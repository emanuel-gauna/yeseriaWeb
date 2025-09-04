import React, { useState } from "react";

export default function StickyButtons() {
  const [isGeminiChatOpen, setIsGeminiChatOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (userPrompt) => {
    if (userPrompt.trim() === "") return;

    // Agrega el mensaje del usuario al historial
    const newChatHistory = [...chatHistory, { role: 'user', parts: [{ text: userPrompt }] }];
    setChatHistory(newChatHistory);
    setPrompt('');
    setLoading(true);

    // Configuración para la API de Gemini
    const systemPrompt = "Actúa como un asistente profesional especializado en yesería, drywall y pintura. Ofrece consejos, presupuestos estimados, y responde a preguntas técnicas de manera amigable y clara.";
    const userQuery = userPrompt;
    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: userQuery }] }],
      tools: [{ "google_search": {} }],
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      const candidate = result.candidates?.[0];
      const text = candidate?.content?.parts?.[0]?.text || "Disculpa, no pude generar una respuesta en este momento.";
      
      const updatedChatHistory = [...newChatHistory, { role: 'model', parts: [{ text: text }] }];
      setChatHistory(updatedChatHistory);
    } catch (error) {
      console.error("Error al llamar a la API de Gemini:", error);
      setChatHistory(prevHistory => [...prevHistory, { role: 'model', parts: [{ text: "Lo siento, hubo un problema al conectar con el asistente. Inténtalo de nuevo." }] }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Contenedor de botones flotantes */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-50 flex flex-col-reverse items-start space-y-2">
        {/* Botón de Mercado Libre con emoji */}
        <a
          href="https://servicio.mercadolibre.com.ar/MLA-1476452521-yesero-profesional-drywall-y-pintura-_JM#origin%3Dshare%26sid%3Dshare"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver nuestra tienda en Mercado Libre"
          className="flex items-center gap-2 sm:gap-3 bg-yellow-400 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-105 z-50 text-sm sm:text-base dark:bg-yellow-500 dark:hover:bg-yellow-600"
        >
          <span className="text-xl sm:text-2xl">🛍️</span>
          <span className="font-semibold">¡Estamos en MERCADO LIBRE!</span>
        </a>

        {/* Botón de WhatsApp con emoji */}
        <a
          href="https://wa.me/5491164371277"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactarme por WhatsApp"
          className="flex items-center gap-2 sm:gap-3 bg-green-500 text-white px-3 py-2 sm:px-3 sm:py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 animate-bounce-slow z-50 text-sm sm:text-base dark:bg-green-600 dark:hover:bg-green-700"
        >
          <span className="text-xl sm:text-2xl">💬</span>
          <span className="font-semibold">¡Ponete en contacto por WhatsApp!</span>
        </a>

        {/* Botón de chat de Gemini */}
        <button
          onClick={() => setIsGeminiChatOpen(!isGeminiChatOpen)}
          aria-label="Abrir chat con Gemini"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105 dark:bg-blue-600 dark:hover:bg-blue-700 flex items-center justify-center aspect-square"
        >
          <span className="text-xl sm:text-2xl">🤖</span>
        </button>
      </div>

      {/* Ventana del chat con Gemini */}
      {isGeminiChatOpen && (
        <div className="fixed bottom-4 right-4 sm:right-6 w-80 h-96 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-2xl z-[100] flex flex-col p-4">
          <div className="flex justify-between items-center border-b pb-2 mb-2 border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Asistente de Yesería</h3>
            <button onClick={() => setIsGeminiChatOpen(false)} className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
              <span className="text-lg">❌</span>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto mb-4 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
            {chatHistory.length > 0 ? (
              chatHistory.map((msg, index) => (
                <div key={index} className={`mb-2 p-2 rounded-lg max-w-[85%] ${msg.role === 'user' ? 'bg-blue-500 text-white self-end ml-auto' : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 self-start mr-auto'}`}>
                  <p className="font-semibold mb-1 flex items-center gap-2">
                    {msg.role === 'user' ? <span className="text-white">👤</span> : <span className="text-gray-800 dark:text-gray-200">🤖</span>}
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
            onClick={() => handleSendMessage(prompt)}
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