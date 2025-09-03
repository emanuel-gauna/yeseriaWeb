import React, { useState } from "react";
import { FaWhatsapp, FaStore, FaRobot, FaTimes, FaUser } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Configuración de la API de Gemini para Next.js
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

// Si la clave no está definida, evitamos la inicialización
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export default function StickyButtons() {
  const [isGeminiChatOpen, setIsGeminiChatOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Define la instrucción del sistema para darle un "rol" a la IA
  const systemInstruction = {
    role: "model",
    parts: [
      { text: "Eres un asistente de yesería y pintura amable y profesional para Yesería y Refacciones Gauna. Tu objetivo es responder preguntas sobre los servicios de yesería (como cielorrasos, paredes de drywall, yeso, etc.) y pintura que se ofrecen. Responde de forma concisa y útil, y si la pregunta es irrelevante para los servicios, guía amablemente al usuario de vuelta al tema o sugiérele que se ponga en contacto por WhatsApp para preguntas más específicas. Siempre firma tus respuestas con 'Saludos, Asistente de Yesería Gauna'." }
    ]
  };
  
  // Función para enviar la solicitud a la API de Gemini
  const handleGenerateContent = async () => {
    if (!prompt) return;
    setLoading(true);

    const newChatHistory = [
      ...chatHistory,
      { role: "user", parts: [{ text: prompt }] }
    ];
    setChatHistory(newChatHistory);
    const currentPrompt = prompt;
    setPrompt('');

    // Verificamos si la clave de API es válida antes de intentar la conexión
    if (!genAI) {
      setChatHistory([
        ...newChatHistory,
        { role: "model", parts: [{ text: "Error: La clave de la API de Gemini no está configurada correctamente en el archivo .env.local. Saludos, Asistente de Yesería Gauna." }] }
      ]);
      setLoading(false);
      return;
    }

    try {
      // Usamos el modelo gemini-1.5-flash por ser rápido
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      // Inicia un chat con el modelo y le da un historial de conversación
      const chat = model.startChat({ history: [systemInstruction] });
      const result = await chat.sendMessage(currentPrompt);
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

  return (
    <>
      {/* Botón flotante para WhatsApp */}
      <a
        href="https://wa.me/5491164371277"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactarme por WhatsApp"
        className="fixed bottom-6 left-4 sm:left-6 flex items-center gap-2 sm:gap-3 bg-green-500 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 animate-bounce-slow z-50 text-sm sm:text-base dark:bg-green-600 dark:hover:bg-green-700"
      >
        <FaWhatsapp className="text-xl sm:text-2xl" />
        <span className="font-semibold">¡Ponete en contacto por WhatsApp!</span>
      </a>

      {/* Botón flotante para Mercado Libre */}
      <a
        href="https://servicio.mercadolibre.com.ar/MLA-1476452521-yesero-profesional-drywall-y-pintura-_JM#origin%3Dshare%26sid%3Dshare"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver nuestra tienda en Mercado Libre"
        className="fixed bottom-20 left-4 sm:left-6 flex items-center gap-2 sm:gap-3 bg-yellow-400 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-105 z-50 text-sm sm:text-base dark:bg-yellow-500 dark:hover:bg-yellow-600"
      >
        <FaStore className="text-xl sm:text-2xl" />
        <span className="font-semibold">¡Estamos en MERCADO LIBRE!</span>
      </a>

      {/* Nuevo botón flotante para Gemini */}
      <button
        onClick={() => setIsGeminiChatOpen(!isGeminiChatOpen)}
        aria-label="Abrir chat con Gemini"
        className="fixed bottom-36 left-4 sm:left-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105 z-50 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        <FaRobot className="text-xl sm:text-2xl" />
      </button>

      {/* Ventana del chat con Gemini */}
      {isGeminiChatOpen && (
        <div className="fixed bottom-4 right-4 sm:right-6 w-80 h-96 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-2xl z-50 flex flex-col p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Asistente de Yesería</h3>
            <button onClick={() => setIsGeminiChatOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
              <FaTimes />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto mb-4 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
            {chatHistory.length > 0 ? (
              chatHistory.map((msg, index) => (
                <div key={index} className={`mb-2 p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 self-start'}`}>
                  <p className="font-semibold mb-1 flex items-center gap-2">
                    {msg.role === 'user' ? <FaUser /> : <FaRobot />}
                    {msg.role === 'user' ? 'Tú' : 'Asistente'}
                  </p>
                  <p className="whitespace-pre-wrap">{msg.parts[0].text}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 dark:text-gray-500 text-sm">Pregúntame sobre proyectos, presupuestos o tipos de materiales.</p>
            )}
          </div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 border rounded-lg text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white dark:border-gray-600"
            rows="2"
            placeholder="Escribe tu pregunta..."
          />
          <button
            onClick={handleGenerateContent}
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800 dark:disabled:bg-blue-400"
          >
            {loading ? 'Generando...' : 'Enviar'}
          </button>
        </div>
      )}
    </>
  );
}