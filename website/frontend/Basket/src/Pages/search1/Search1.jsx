import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Search1 = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Function to handle user input and send it to backend
  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Send user input to backend
      const response = await fetch("http://127.0.0.1:8000/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input, k: 1 }),
      });

      const res = await response.json();
      if (res) {
        const video = res // Assuming first result is most relevant
        const botResponse = {
          text: (
            <>
              <span>Watch this video - {video.title}: </span>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ff9100", textDecoration: "underline" }}
              >
                {video.url}                
              </a>
              <div>{video.description}</div>
            </>
          ),
          sender: "bot",
        };
        setMessages((prev) => [...prev, botResponse]);
      } else {
        setMessages((prev) => [...prev, { text: "No results found.", sender: "bot" }]);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { text: "Error getting response. Try again!", sender: "bot" }]);
    }

    setInput(""); // Clear input field
  };

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "100vw",
      minHeight: "100vh",
      backgroundColor: "#121212",
      marginTop: "50px",
    },
    chatBox: {
      width: "400px",
      height: "400px",
      backgroundColor: "#1E1E1E",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      overflow: "hidden",
    },
    header: {
      backgroundColor: "#ea9215",
      color: "#fff",
      textAlign: "center",
      padding: "10px",
      fontSize: "18px",
      fontWeight: "bold",
    },
    messages: {
      flex: 1,
      padding: "10px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
    },
    message: (sender) => ({
      alignSelf: sender === "user" ? "flex-end" : "flex-start",
      backgroundColor: sender === "user" ? "#ff9100" : "#333",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "10px",
      margin: "5px 0",
      maxWidth: "75%",
      wordBreak: "break-word",
    }),
    inputArea: {
      display: "flex",
      padding: "10px",
      backgroundColor: "#282828",
    },
    input: {
      flex: 1,
      padding: "10px",
      borderRadius: "6px",
      border: "none",
      outline: "none",
      fontSize: "16px",
      backgroundColor: "#3A3A3A",
      color: "#fff",
    },
    sendButton: {
      marginLeft: "10px",
      padding: "15px",
      border: "none",
      backgroundColor: "#ea9215",
      color: "#fff",
      cursor: "pointer",
      borderRadius: "6px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.chatBox}>
        <div style={styles.header}>🔍 Search Here</div>
        <div style={styles.messages}>
          {messages.map((msg, index) => (
            <div key={index} style={styles.message(msg.sender)}>
              {typeof msg.text === "string" ? msg.text : msg.text}
            </div>
          ))}
        </div>
        <div style={styles.inputArea}>
          <input
            type="text"
            placeholder="Ask something..."
            style={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button style={styles.sendButton} onClick={handleSend}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search1;