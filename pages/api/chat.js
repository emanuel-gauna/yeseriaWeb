import 'dotenv/config';

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  const { message } = req.body;
  if (!message) return res.status(400).json({ message: "Message is required" });

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Eres un asistente amable y profesional de yesería y pintura." },
          { role: "user", content: message },
        ],
        max_tokens: 500,
      }),
    });

    const data = await response.json();

    const text = data.choices?.[0]?.message?.content || "No hubo respuesta";

    res.status(200).json({ text });

  } catch (error) {
    console.error(error);
    res.status(500).json({ text: "Error en la API de OpenAI" });
  }
}
