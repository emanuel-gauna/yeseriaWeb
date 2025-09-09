import { useState } from "react";

export function useOpenAIChat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSendMessage = async (prompt) => {
    if (!prompt.trim()) return;

    const newChat = { role: "user", content: prompt };
    setChatHistory([...chatHistory, newChat]);
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt }),
      });

      const data = await res.json();

      const responseText = data.reply || "No hubo respuesta.";
      setChatHistory((prev) => [
        ...prev,
        { role: "model", content: responseText },
      ]);
    } catch (err) {
      setChatHistory((prev) => [
        ...prev,
        { role: "model", content: "Error de conexión. Intenta nuevamente." },
      ]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { chatHistory, loading, handleSendMessage, errorMessage };
}
