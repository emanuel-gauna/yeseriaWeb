// pages/api/chat.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Falta el mensaje" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Sos un asistente especializado en yesería, albañilería, pintura y microcemento. Responde de forma clara, útil y en español rioplatense.",
        },
        { role: "user", content: message },
      ],
      max_tokens: 300,
    });

    const reply =
      completion.choices?.[0]?.message?.content || "No hubo respuesta.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Error en la API de OpenAI:", error);

    if (error.code === "insufficient_quota") {
      return res.status(200).json({
        reply:
          "⚠️ Se agotó la cuota de la API de OpenAI. Revisa tu plan de facturación o intenta más tarde.",
      });
    }

    return res.status(500).json({
      reply: "Hubo un error al conectar con OpenAI. Intenta más tarde.",
    });
  }
}
