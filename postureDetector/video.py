import cv2
import mediapipe as mp

# Initialize MediaPipe Pose
mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils
pose = mp_pose.Pose()

# Load the video file (change 'input.mp4' to your video file path)
video_path = 'input.mp4'
cap = cv2.VideoCapture(video_path)

# Get original video properties
frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
fps = cap.get(cv2.CAP_PROP_FPS)
delay = int(1000 / fps) if fps > 0 else 30  # Avoid division by zero

# Create a resizable window with the correct size
cv2.namedWindow("Pose Detection", cv2.WINDOW_NORMAL)
cv2.resizeWindow("Pose Detection", frame_width, frame_height)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break  # Exit when the video ends

    # Convert frame to RGB (MediaPipe requires RGB format)
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Process the frame and detect pose
    results = pose.process(rgb_frame)

    # Draw pose landmarks on the frame
    if results.pose_landmarks:
        mp_drawing.draw_landmarks(frame, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)

    # Show the full-sized frame
    cv2.imshow("Pose Detection", frame)

    # Press 'q' to exit early
    if cv2.waitKey(delay) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
