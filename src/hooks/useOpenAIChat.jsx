// hooks/useOpenAIChat.js
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

      if (data.error?.code === "insufficient_quota") {
        setChatHistory(prev => [
          ...prev,
          { role: "model", content: "Lo siento, se ha excedido la cuota de tu cuenta de OpenAI. Por favor revisa tu plan o espera a que se renueve." }
        ]);
      } else if (data.error) {
        setChatHistory(prev => [
          ...prev,
          { role: "model", content: "Hubo un error con la API de OpenAI. Intenta nuevamente más tarde." }
        ]);
      } else {
        const responseText = data.choices?.[0]?.message?.content || "No hubo respuesta.";
        setChatHistory(prev => [...prev, { role: "model", content: responseText }]);
      }
    } catch (err) {
      setChatHistory(prev => [
        ...prev,
        { role: "model", content: "Error de conexión. Intenta nuevamente." }
      ]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { chatHistory, loading, handleSendMessage, errorMessage };
}
