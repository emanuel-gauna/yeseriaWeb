import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Accede a la clave de API de forma segura usando la variable de entorno de Vite
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Inicializa el cliente de Gemini
const genAI = new GoogleGenerativeAI(API_KEY);

const MyGeminiComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateContent = async () => {
    if (!prompt) return;

    setLoading(true);
    setResponse('');

    try {
      // Elige el modelo que quieres usar
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      // Envía el prompt y obtén la respuesta
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
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Chat con Gemini</h1>
      
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full max-w-lg p-4 mb-4 text-lg border rounded-lg shadow-sm"
        rows="4"
        placeholder="Escribe tu pregunta aquí..."
      />

      <button
        onClick={handleGenerateContent}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
      >
        {loading ? 'Generando...' : 'Enviar a Gemini'}
      </button>

      {response && (
        <div className="w-full max-w-lg mt-8 p-6 bg-white border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Respuesta de Gemini:</h2>
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

export default MyGeminiComponent;