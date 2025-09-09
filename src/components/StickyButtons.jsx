import React, { useState } from "react";
import { useOpenAIChat } from "../hooks/useOpenAIChat"

export default function StickyButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const { chatHistory, loading, handleSendMessage } = useOpenAIChat();

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    handleSendMessage(prompt);
    setPrompt("");
  };

  return (
    <>
      {/* Botones flotantes */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-50 flex flex-col-reverse items-start space-y-2">

        {/* Botón Mercado Libre */}
        <a
          href="https://servicio.mercadolibre.com.ar/MLA-1476452521-yesero-profesional-drywall-y-pintura-_JM#origin%3Dshare%26sid%3Dshare"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 sm:gap-3 bg-yellow-400 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-105 z-50 text-sm sm:text-base"
        >
          <span className="text-xl sm:text-2xl">🛍️</span>
          <span className="font-semibold">¡Estamos en MERCADO LIBRE!</span>
        </a>

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/5491164371277"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 sm:gap-3 bg-green-500 text-white px-3 py-2 sm:px-3 sm:py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 animate-bounce-slow z-50 text-sm sm:text-base"
        >
          <span className="text-xl sm:text-2xl">💬</span>
          <span className="font-semibold">¡Ponete en contacto por WhatsApp!</span>
        </a>

        {/* Botón Chat OpenAI */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center aspect-square"
        >
          <span className="text-xl sm:text-2xl">🤖</span>
        </button>
      </div>

      {/* Ventana de chat OpenAI */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 sm:right-6 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-2xl z-[100] flex flex-col p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-2 border-gray-200">
            <h3 className="font-bold text-lg text-gray-800">Asistente de Yesería</h3>
            <button onClick={() => setIsChatOpen(false)} className="text-gray-500 hover:text-gray-800">
              ❌
            </button>
          </div>

          {/* Historial de chat */}
          <div className="flex-grow overflow-y-auto mb-4 p-2 bg-gray-50 rounded-lg">
            {chatHistory.length > 0 ? (
              chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-2 p-2 rounded-lg max-w-[85%] ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white self-end ml-auto"
                      : "bg-gray-200 text-gray-800 self-start mr-auto"
                  }`}
                >
                  <p className="font-semibold mb-1">
                    {msg.role === "user" ? "👤 Tú" : "🤖 Asistente"}
                  </p>
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-sm">
                Pregúntame sobre proyectos, presupuestos o tipos de materiales.
              </p>
            )}
          </div>

          {/* Input de mensaje */}
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 border rounded-lg text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="2"
            placeholder="Escribe tu pregunta..."
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
          >
            {loading ? "Generando..." : "Enviar"}
          </button>
        </div>
      )}
    </>
  );
}
