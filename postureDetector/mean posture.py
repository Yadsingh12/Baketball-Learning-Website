import os
import numpy as np

# Directory containing processed .npy files
processed_dir = "processed_landmarks"

# List to store all posture trajectories
all_trajectories = []

# Load all .npy files
for npy_file in os.listdir(processed_dir):
    if npy_file.endswith(".npy"):
        npy_path = os.path.join(processed_dir, npy_file)
        data = np.load(npy_path)  # Shape: (30, 33, 3)
        
        if data.shape == (30, 33, 3):  # Ensure correct shape
            all_trajectories.append(data)

# Convert list to numpy array: Shape (num_videos, 30, 33, 3)
all_trajectories = np.array(all_trajectories)

# Compute mean posture trajectory (Mean across all videos)
mean_posture_trajectory = np.nanmean(all_trajectories, axis=0)  # Shape: (30, 33, 3)

# Save mean posture trajectory
np.save("mean_posture.npy", mean_posture_trajectory)

print("Mean posture trajectory computed and saved as mean_posture.npy")
