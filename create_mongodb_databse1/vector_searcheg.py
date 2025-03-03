from pymongo import MongoClient
from sentence_transformers import SentenceTransformer

# MongoDB Atlas Connection
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["basketballDB"]
collection = db["videos"]
print(f"Total videos in DB: {collection.count_documents({})}")

# Load Sentence Transformer Model
model = SentenceTransformer("all-MiniLM-L6-v2")  # 384-dimension embeddings

def search_videos(query, k):
    """
    Perform vector search in MongoDB Atlas.
    - `query`: The search input from the user.
    - `k`: Number of similar videos to return (default: 5).
    """
    # Convert query to embedding
    query_embedding = model.encode(query).tolist()

    # MongoDB Vector Search Query
    pipeline = [
        {
            "$search": {
                "index": "vectorr",
                "knnBeta": {
                    "vector": query_embedding,
                    "path": "embedding",  # Field where embeddings are stored
                    "k": k  # Number of results to return
                }
            }
        },
        {"$limit": k}  # Ensure we only return 'k' results
    ]

    results = list(collection.aggregate(pipeline))
    print(results)
    # Remove MongoDB ObjectId for cleaner output
    for result in results:
        result.pop("_id", None)

    return results

if __name__ == "__main__":
    query = input("Enter your search query: ")
    results = search_videos(query, k=1)

    print("\nTop Matching Videos:")
    for idx, video in enumerate(results, 1):
        print(f"{idx}. {video['title']}\n   {video['url']}\n")
