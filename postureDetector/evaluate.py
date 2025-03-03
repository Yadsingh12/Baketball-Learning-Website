import cv2
import mediapipe as mp
import numpy as np

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
    if not video_path or not isinstance(video_path, str):
        return None  # Handle case where no video is provided

    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    if total_frames == 0:
        cap.release()
        return None  # No frames in video

    frame_indices = np.linspace(0, total_frames - 1, num_frames, dtype=int)
    frames = []
    for idx in frame_indices:
        cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
        ret, frame = cap.read()
        if ret:
            frames.append(frame)
    cap.release()
    return frames if frames else None  # Return None if no frames were extracted

def get_landmarks(frame):
    """Extract and preprocess pose landmarks from a frame."""
    if frame is None:
        return None

    frame_height, frame_width, _ = frame.shape
    results = pose.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
    if results.pose_landmarks:
        return preprocess_landmarks(results.pose_landmarks.landmark, frame_width, frame_height)
    else:
        return None

def process_video(video_path):
    """Extract landmarks from a video."""
    frames = extract_frames(video_path)
    if frames is None:
        print("Error: No frames extracted from the video.")
        return None  # Handle case where video is empty or invalid

    video_landmarks = []
    for frame in frames:
        landmarks = get_landmarks(frame)
        if landmarks:
            video_landmarks.append(landmarks)  # Append frame-wise landmarks
        else:
            video_landmarks.append([(np.nan, np.nan, np.nan)] * 33)  # Fill missing frames

    if all(np.isnan(frame[0][0]) for frame in video_landmarks):  
        print("Error: No valid landmarks detected in the video.")
        return None  # No landmarks detected at all

    return np.array(video_landmarks)  # Shape: (30, 33, 3)

def evaluate_posture(video_path, mean_posture_trajectory):
    """Compare video landmarks to the mean posture trajectory using only x and y coordinates."""
    if not video_path:
        print("Error: No video file provided.")
        return None

    video_landmarks = process_video(video_path)
    if video_landmarks is None:
        print("Error: No valid landmarks found for evaluation.")
        return None

    # Extract only x and y coordinates (ignore z)
    video_landmarks_xy = video_landmarks[:, :, :2]  # Shape: (30, 33, 2)
    mean_posture_xy = mean_posture_trajectory[:, :, :2]  # Shape: (30, 33, 2)

    # Compute Euclidean distance from mean posture for each frame
    distances = np.linalg.norm(video_landmarks_xy - mean_posture_xy, axis=(1, 2))  # Shape: (30,)

    correctness_score = np.mean(distances)  # Average deviation over all frames
    return correctness_score


# **TEST CASES**

# Test 1: No video provided
print("\nTest 1: No video given")
score = evaluate_posture("", mean_posture_trajectory)
print("Output:", score)  # Expected: Error message and None

# Test 2: Invalid video file (file does not exist)
print("\nTest 2: Invalid video path")
score = evaluate_posture("non_existent_file.mp4", mean_posture_trajectory)
print("Output:", score)  # Expected: Error message and None

# Test 3: Video with no valid landmarks
print("\nTest 3: Video with no detectable landmarks")
empty_video_path = "empty_video.mp4"  # Assume this is a video with only noise/background
score = evaluate_posture(empty_video_path, mean_posture_trajectory)
print("Output:", score)  # Expected: Error message and None

# **Actual Evaluation**
new_video_path = "dataset_videos/front/VID-20250301-WA0124.mp4"
print("\nEvaluating actual video...")
score = evaluate_posture(new_video_path, mean_posture_trajectory)

if score is not None:
    print(f"Correctness Score: {score}")
    
    # Define a threshold based on training data
    std_posture = np.nanstd(mean_posture_trajectory, axis=(0, 1, 2))  # Standard deviation across all coordinates
    threshold_good = std_posture * 1.5  # Very close to mean
    threshold_ok = std_posture * 2.5  # Moderate deviation
    threshold_bad = std_posture * 3.5  # Large deviation

    print("Thresholds:")
    print("Great:", threshold_good)
    print("Good but need some work:", threshold_ok)
    print("Needs practice:", threshold_bad)

    if score < threshold_good:
        print("Posture is GOOD ✅")
    elif score < threshold_ok:
        print("Posture CAN DO SOME WORK ⚠️")
    else:
        print("Posture NEEDS PRACTICE ❌")


