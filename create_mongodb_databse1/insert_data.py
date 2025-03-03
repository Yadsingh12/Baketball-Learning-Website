from pymongo import MongoClient
from sentence_transformers import SentenceTransformer
from bson.objectid import ObjectId

from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")
# MongoDB Atlas Connection
client = MongoClient(MONGO_URI)
db = client["basketballDB"]
collection = db["videos"]

# Load Sentence Transformer Model
model = SentenceTransformer("all-MiniLM-L6-v2")  # 384-dimension embeddings

def generate_embeddings():
    """
    Fetches all videos that don't have embeddings and updates them with vector representations.
    """
    videos = list(collection.find({"embedding": {"$exists": False}}))  # Get videos without embeddings
    if not videos:
        print("All videos already have embeddings.")
        return

    for video in videos:
        embedding = model.encode(video["description"]).tolist()  # Convert to list for MongoDB storage
        collection.update_one({"_id": ObjectId(video["_id"])}, {"$set": {"embedding": embedding}})
        print(f"Processed: {video['title']}")

    print(f"Updated {len(videos)} videos with embeddings.")

# Run the function
if __name__ == "__main__":
    generate_embeddings()
