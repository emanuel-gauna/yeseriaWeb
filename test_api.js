const { GoogleGenAI } = require("@google/genai");

const API_KEY = "AIzaSyDeE_SfDSw560hf2fG_x7zAlJr09a46kCI";

if (!API_KEY) {
    console.error("Error: La clave de la API no está configurada.");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

async function run() {
    try {
        const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Explica cómo funciona la yesería en 10 palabras.");
        const response = await result.response;
        const text = response.text();
        console.log("¡Éxito! Respuesta de la API:\n", text);
    } catch (error) {
        console.error("Error al conectar con la API de Gemini:", error);
    }
}

run();