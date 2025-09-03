import React, { useState } from "react";
import { FaWhatsapp, FaStore, FaRobot, FaTimes } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export default function StickyButtons() {
  const [isGeminiChatOpen, setIsGeminiChatOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateContent = async () => {
    if (!prompt) return;
    setLoading(true);
    setResponse('');
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);
    } catch (error) {
      console.error('Error al generar contenido:', error);
      setResponse('Hubo un error al conectar con Gemini. Por favor, inténtalo de nuevo.');
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
        className="fixed bottom-6 left-4 sm:left-6 flex items-center gap-2 sm:gap-3 bg-green-500 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 animate-bounce-slow z-50 text-sm sm:text-base"
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
        className="fixed bottom-20 left-4 sm:left-6 flex items-center gap-2 sm:gap-3 bg-yellow-400 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-105 z-50 text-sm sm:text-base"
      >
        <FaStore className="text-xl sm:text-2xl" />
        <span className="font-semibold">¡Estamos en MERCADO LIBRE!</span>
      </a>

      {/* Botón flotante para Gemini */}
      <button
        onClick={() => setIsGeminiChatOpen(!isGeminiChatOpen)}
        aria-label="Abrir chat con Gemini"
        className="fixed bottom-36 left-4 sm:left-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105 z-50"
      >
        <FaRobot className="text-xl sm:text-2xl" />
      </button>

      {/* Ventana del chat con Gemini */}
      {isGeminiChatOpen && (
        <div className="fixed bottom-4 right-4 sm:right-6 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-2xl z-50 flex flex-col p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="font-bold text-lg">Asistente de Yesería</h3>
            <button onClick={() => setIsGeminiChatOpen(false)} className="text-gray-500 hover:text-gray-800">
              <FaTimes />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto mb-4 p-2 bg-gray-50 rounded-lg">
            {response ? (
              <p className="whitespace-pre-wrap">{response}</p>
            ) : (
              <p className="text-gray-400">Pregúntame sobre proyectos, presupuestos o tipos de materiales.</p>
            )}
          </div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 border rounded-lg text-sm mb-2"
            rows="2"
            placeholder="Escribe tu pregunta..."
          />
          <button
            onClick={handleGenerateContent}
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
          >
            {loading ? 'Generando...' : 'Enviar'}
          </button>
        </div>
      )}
    </>
  );
}