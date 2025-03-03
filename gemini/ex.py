import google.generativeai as genai
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()
API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=API_KEY)

try:
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content("Hello, world!")
    print(response.text)
except Exception as e:
    print(f"Error: {e}")