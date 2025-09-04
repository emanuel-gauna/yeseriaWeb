//UseGeminiCAht.jsx//
import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

let ai;
if (GEMINI_API_KEY) {
  ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
} else {
  console.error("Error: La clave de la API de Gemini no está configurada.");
}

export function useGeminiChat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const systemInstruction = {
    role: "model",
    parts: [
      { text: "Eres un asistente de yesería y pintura amable y profesional para Yesería y Refacciones Gauna. Tu objetivo es responder preguntas sobre los servicios de yesería (como cielorrasos, paredes de drywall, yeso, etc.) y pintura que se ofrecen. Responde de forma concisa y útil, y si la pregunta es irrelevante para los servicios, guía amablemente al usuario de vuelta al tema o sugiérele que se ponga en contacto por WhatsApp para preguntas más específicas. Siempre firma tus respuestas con 'Saludos, Asistente de Yesería Gauna'." },
    ],
  };

  const handleSendMessage = async (prompt) => {
    if (!prompt || !ai) {
      setChatHistory([
        ...chatHistory,
        { role: "model", parts: [{ text: "Error: La clave de la API de Gemini no está configurada. Por favor, revisa el archivo .env.local y reinicia el servidor." }] },
      ]);
      setLoading(false);
      return;
    }
    setLoading(true);

    const newChatHistory = [
      ...chatHistory,
      { role: "user", parts: [{ text: prompt }] },
    ];
    setChatHistory(newChatHistory);

    try {
      const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" }); 
      const chat = model.startChat({ history: [systemInstruction] });
      const result = await chat.sendMessage(prompt);
      const text = result.response.text();

      setChatHistory([
        ...newChatHistory,
        { role: "model", parts: [{ text: text }] },
      ]);
    } catch (error) {
      console.error("Error al generar contenido:", error);
      setChatHistory([
        ...newChatHistory,
        { role: "model", parts: [{ text: "Hubo un error al conectar con Gemini. Por favor, inténtalo de nuevo. Saludos, Asistente de Yesería Gauna." }] },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return { chatHistory, loading, handleSendMessage };
}