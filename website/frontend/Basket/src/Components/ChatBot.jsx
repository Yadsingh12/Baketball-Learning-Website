import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "👋 Hello! How can I assist you today?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:8000/ask_gemini/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { text: "❌ Error: Unable to fetch response.", sender: "bot" }]);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", display: "flex", flexDirection: "column", alignItems: "flex-end", zIndex: 9999 }}>
      {isOpen && (
        <div style={{ backgroundColor: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "12px", padding: "16px", width: "300px", border: "1px solid #ccc", marginBottom: "10px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>Chat with AI</h2>
          <div style={{ height: "150px", overflowY: "auto", fontSize: "14px", color: "#555", padding: "8px", border: "1px solid #ddd", borderRadius: "6px", backgroundColor: "#f9f9f9", display: "flex", flexDirection: "column" }}>
            {messages.map((msg, index) => (
              <p key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "4px 0", color: msg.sender === "user" ? "#007bff" : "#000",  whiteSpace: "pre-line"}}>
                {msg.text}
              </p>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            style={{ width: "100%", padding: "8px", marginTop: "8px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px" }}
          />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: "#007bff",
          padding: "12px",
          borderRadius: "50%",
          boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s"
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        <MessageCircle style={{ color: "white", width: "24px", height: "24px" }} />
      </button>
    </div>
  );
}
