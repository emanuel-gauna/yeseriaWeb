import { useState } from "react";

export function useOpenAIChat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      const text = data.text;

      setChatHistory((prev) => [
        ...prev,
        { role: "user", content: message },
        { role: "assistant", content: text },
      ]);
    } catch (err) {
      console.error(err);
      setChatHistory((prev) => [
        ...prev,
        { role: "assistant", content: "Error al conectarse con el asistente." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { chatHistory, loading, handleSendMessage };
}
