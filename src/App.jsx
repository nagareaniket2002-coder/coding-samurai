import { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { text: "Hello", sender: "bot" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { text: input, sender: "user" };

    setMessages([...messages, newMessage]);
    setInput("");

    setTimeout(() => {
      const reply = { text: "Message received ✅", sender: "bot" };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="chat-box">
        <h2>💬 Chat App</h2>

        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === "user" ? "msg user" : "msg bot"}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Type message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;