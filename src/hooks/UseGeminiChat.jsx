import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export function useGeminiChat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Define la instrucción del sistema para darle un "rol" a la IA
  const systemInstruction = {
    role: "model",
    parts: [
      { text: "Eres un asistente de yesería y pintura amable y profesional para Yesería y Refacciones Gauna. Tu objetivo es responder preguntas sobre los servicios de yesería (como cielorrasos, paredes de drywall, yeso, etc.) y pintura que se ofrecen. Responde de forma concisa y útil, y si la pregunta es irrelevante para los servicios, guía amablemente al usuario de vuelta al tema o sugiérele que se ponga en contacto por WhatsApp para preguntas más específicas. Siempre firma tus respuestas con 'Saludos, Asistente de Yesería Gauna'." }
    ]
  };

  // Función para enviar el mensaje y gestionar el historial
  const handleSendMessage = async (prompt) => {
    if (!prompt) return;
    setLoading(true);

    const newChatHistory = [
      ...chatHistory,
      { role: "user", parts: [{ text: prompt }] }
    ];
    setChatHistory(newChatHistory);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const chat = model.startChat({ history: [systemInstruction] });
      const result = await chat.sendMessage(prompt);
      const text = result.response.text();
      setChatHistory([
        ...newChatHistory,
        { role: "model", parts: [{ text: text }] }
      ]);
    } catch (error) {
      console.error('Error al generar contenido:', error);
      setChatHistory([
        ...newChatHistory,
        { role: "model", parts: [{ text: "Hubo un error al conectar con Gemini. Por favor, inténtalo de nuevo. Saludos, Asistente de Yesería Gauna." }] }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // El hook retorna el historial, el estado de carga y la función para enviar mensajes
  return { chatHistory, loading, handleSendMessage };
}
