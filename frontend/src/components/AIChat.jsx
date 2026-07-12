import { useState } from "react";
import { askAI } from "../gemini";

function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question) return;

    const response = await askAI(question);

    setAnswer(response);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>EcoSphere AI Assistant</h2>

      <input
        type="text"
        placeholder="Ask your ESG question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{ width: "300px" }}
      />

      <button onClick={handleAsk}>
        Ask AI
      </button>

      <h3>Response</h3>

      <p>{answer}</p>

    </div>
  );
}

export default AIChat;