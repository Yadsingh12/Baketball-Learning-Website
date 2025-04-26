from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
from sentence_transformers import SentenceTransformer
import google.generativeai as genai
import numpy as np
import cv2
import mediapipe as mp
import tempfile
import shutil
import os
import re
from typing import List
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# FastAPI app
app = FastAPI()

# CORS (allow frontend to call backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace "*" with your frontend URL for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------- POSTURE EVALUATION ----------------------

# Load Mean Posture Trajectory
mean_posture_trajectory = np.load("mean_posture.npy")  # Shape: (30, 33, 3)

# Initialize MediaPipe Pose
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(static_image_mode=False, min_detection_confidence=0.5, min_tracking_confidence=0.5)

def preprocess_landmarks(landmarks, frame_width, frame_height):
    if not landmarks:
        return None
    hip_x = landmarks[mp_pose.PoseLandmark.LEFT_HIP].x * frame_width
    hip_y = landmarks[mp_pose.PoseLandmark.LEFT_HIP].y * frame_height
    hip_z = landmarks[mp_pose.PoseLandmark.LEFT_HIP].z
    nose_x = landmarks[mp_pose.PoseLandmark.NOSE].x * frame_width
    nose_y = landmarks[mp_pose.PoseLandmark.NOSE].y * frame_height
    torso_length = np.linalg.norm([nose_x - hip_x, nose_y - hip_y])
    if torso_length == 0:
        return None
    scale_factor = max(frame_width, frame_height)
    return [
        (
            ((lm.x * frame_width - hip_x) / torso_length) / scale_factor,
            ((lm.y * frame_height - hip_y) / torso_length) / scale_factor,
            (lm.z - hip_z) / torso_length
        )
        for lm in landmarks
    ]

def extract_frames(video_path, num_frames=30):
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    if total_frames == 0:
        cap.release()
        return None
    frame_indices = np.linspace(0, total_frames - 1, num_frames, dtype=int)
    frames = []
    for idx in frame_indices:
        cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
        ret, frame = cap.read()
        if ret:
            frames.append(frame)
    cap.release()
    return frames if frames else None

def get_landmarks(frame):
    if frame is None:
        return None
    frame_height, frame_width, _ = frame.shape
    results = pose.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
    if results.pose_landmarks:
        return preprocess_landmarks(results.pose_landmarks.landmark, frame_width, frame_height)
    return None

def process_video(video_path):
    frames = extract_frames(video_path)
    if frames is None:
        return None
    video_landmarks = []
    for frame in frames:
        landmarks = get_landmarks(frame)
        if landmarks:
            video_landmarks.append(landmarks)
        else:
            video_landmarks.append([(np.nan, np.nan, np.nan)] * 33)
    if all(np.isnan(frame[0][0]) for frame in video_landmarks):
        return None
    return np.array(video_landmarks)

def evaluate_posture(video_path, mean_posture_trajectory):
    video_landmarks = process_video(video_path)
    if video_landmarks is None:
        return None
    video_landmarks_xy = video_landmarks[:, :, :2]
    mean_posture_xy = mean_posture_trajectory[:, :, :2]
    distances = np.linalg.norm(video_landmarks_xy - mean_posture_xy, axis=(1, 2))
    correctness_score = np.mean(distances)
    std_posture = np.nanstd(mean_posture_trajectory, axis=(0, 1, 2))
    threshold_good = std_posture * 1.25
    threshold_ok = std_posture * 1.75
    if correctness_score < threshold_good:
        return "GOOD ✅"
    elif correctness_score < threshold_ok:
        return "OKAY ⚠️"
    return "BAD ❌"

@app.post("/evaluate_posture/")
async def upload_video(file: UploadFile = File(...)):
    with tempfile.NamedTemporaryFile(delete=False, suffix=".mp4") as temp_file:
        shutil.copyfileobj(file.file, temp_file)
        temp_file_path = temp_file.name
    posture_result = evaluate_posture(temp_file_path, mean_posture_trajectory)
    if posture_result is None:
        return {"message": "No valid posture detected in the video."}
    return {"posture": posture_result}

# ---------------------- GEMINI CHAT ----------------------

API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=API_KEY)

class QueryRequest(BaseModel):
    query: str

def clean_gemini_response(text):
    text = re.sub(r"\*\*(.*?)\*\*", r"\1", text)
    text = re.sub(r"^\* ", "- ", text, flags=re.MULTILINE)
    return text

@app.post("/ask_gemini/")
async def ask_gemini(request: QueryRequest):
    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(request.query + " in context of basketball")
        cleaned_response = clean_gemini_response(response.text)
        return {"reply": cleaned_response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ---------------------- VECTOR SEARCH ----------------------

MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["basketballDB"]
collection = db["videos"]

embedding_model = SentenceTransformer("all-MiniLM-L6-v2")

class SearchRequest(BaseModel):
    query: str
    k: int = 5

def search_videos(query: str, k: int = 1) -> List[dict]:
    query_embedding = embedding_model.encode(query).tolist()
    pipeline = [
        {
            "$search": {
                "index": "vectorr",
                "knnBeta": {
                    "vector": query_embedding,
                    "path": "embedding",
                    "k": k
                }
            }
        },
        {"$limit": k}
    ]
    results = list(collection.aggregate(pipeline))
    for result in results:
        result.pop("_id", None)
    return results

@app.post("/search/")
def search_api(request: SearchRequest):
    results = search_videos(request.query, request.k)
    if not results:
        return {"message": "No results found"}
    return results[0]

# ---------------------- MAIN ENTRY ----------------------

import uvicorn

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))  # Render provides PORT env variable
    uvicorn.run("backend:app", host="0.0.0.0", port=port, reload=False)
