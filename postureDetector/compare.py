import numpy as np
import matplotlib.pyplot as plt

# Load video trajectory and mean posture
video_trajectory = np.load("mean_posture.npy")  # Shape: (30, 33, 3)
mean_posture_trajectory = np.load("processed_landmarks/VID-20250301-WA0074.npy")  # Shape: (30, 33, 3)

# Choose a frame index to visualize (e.g., middle frame)
frame_idx = 15

# Extract landmarks for the chosen frame
video_landmarks = video_trajectory[frame_idx]  # Shape: (33, 3)
mean_landmarks = mean_posture_trajectory[frame_idx]  # Shape: (33, 3)

# Plot landmarks
plt.figure(figsize=(8, 6))
plt.scatter(video_landmarks[:, 0], video_landmarks[:, 1], label="Video Sample", color='blue')
plt.scatter(mean_landmarks[:, 0], mean_landmarks[:, 1], label="Mean Posture", color='red', marker='x')

# Draw connections between corresponding landmarks
for i in range(33):
    plt.plot([video_landmarks[i, 0], mean_landmarks[i, 0]],
             [video_landmarks[i, 1], mean_landmarks[i, 1]],
             color='gray', linestyle='--', linewidth=0.5)

plt.xlabel("X Coordinate")
plt.ylabel("Y Coordinate")
plt.title("Comparison of Video Landmarks vs. Mean Posture")
plt.legend()
plt.grid()
plt.show()
