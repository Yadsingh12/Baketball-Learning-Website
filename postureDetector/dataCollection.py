import os
import cv2
import numpy as np
import mediapipe as mp

# Load Mean Posture Trajectory
mean_posture_trajectory = np.load("mean_posture.npy")  # Shape: (30, 33, 3)

# Initialize MediaPipe Pose
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(static_image_mode=False, min_detection_confidence=0.5, min_tracking_confidence=0.5)

def preprocess_landmarks(landmarks, frame_width, frame_height):
    """Normalize (x, y, z) using the hip as reference, and torso length for scale invariance."""
    
    if not landmarks:
        return None

    # Convert to absolute pixel values
    hip_x = landmarks[mp_pose.PoseLandmark.LEFT_HIP].x * frame_width
    hip_y = landmarks[mp_pose.PoseLandmark.LEFT_HIP].y * frame_height
    hip_z = landmarks[mp_pose.PoseLandmark.LEFT_HIP].z  

    nose_x = landmarks[mp_pose.PoseLandmark.NOSE].x * frame_width
    nose_y = landmarks[mp_pose.PoseLandmark.NOSE].y * frame_height
    nose_z = landmarks[mp_pose.PoseLandmark.NOSE].z  

    # Normalize by torso length (XY) as a stable scaling factor
    torso_length = np.linalg.norm([nose_x - hip_x, nose_y - hip_y])
    if torso_length == 0:
        return None  # Prevent division by zero

    # Normalize by max(frame_width, frame_height) for aspect ratio
    scale_factor = max(frame_width, frame_height)

    # Normalize Z using the same torso length as XY (instead of absolute depth)
    processed_landmarks = [
        (
            ((lm.x * frame_width - hip_x) / torso_length) / scale_factor,  
            ((lm.y * frame_height - hip_y) / torso_length) / scale_factor,  
            (lm.z - hip_z) / torso_length  # Use torso length instead of torso depth
        )
        for lm in landmarks
    ]
    
    return processed_landmarks

def extract_frames(video_path, num_frames=30):
    """Extract evenly spaced frames from a video."""
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    frame_indices = np.linspace(0, total_frames - 1, num_frames, dtype=int)
    frames = []
    for idx in frame_indices:
        cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
        ret, frame = cap.read()
        if ret:
            frames.append(frame)
    cap.release()
    return frames

def get_landmarks(frame):
    """Extract and preprocess pose landmarks from a frame."""
    frame_height, frame_width, _ = frame.shape
    results = pose.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
    if results.pose_landmarks:
        return preprocess_landmarks(results.pose_landmarks.landmark, frame_width, frame_height)
    else:
        return None

def process_video(video_path):
    """Extract landmarks from a video and save as .npy."""
    frames = extract_frames(video_path)
    video_landmarks = []
    for frame in frames:
        landmarks = get_landmarks(frame)
        if landmarks:
            video_landmarks.append(landmarks)  # Append frame-wise landmarks
        else:
            video_landmarks.append([(np.nan, np.nan, np.nan)] * 33)  # Fill missing frames
    return np.array(video_landmarks)  # Shape: (30, 33, 3)

# Directory containing input videos
video_dir = "dataset_videos/front"
output_dir = "processed_landmarks"

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

# Process all videos in the directory
for video_file in os.listdir(video_dir):
    video_path = os.path.join(video_dir, video_file)
    
    if video_file.endswith(('.mp4', '.avi', '.mov')):  # Check if it's a valid video file
        print(f"Processing {video_file}...")
        landmarks = process_video(video_path)
        
        # Save as .npy file
        output_path = os.path.join(output_dir, f"{os.path.splitext(video_file)[0]}.npy")
        np.save(output_path, landmarks)
        print(f"Saved: {output_path}")
