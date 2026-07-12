import { useState } from "react";
import { askAI } from "../gemini";

function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    if (!question) return;

    try {
  const response = await askAI(question);
  console.log(response);
  setAnswer(response);
} catch (err) {
  console.error(err);
  alert(err.message);
}
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