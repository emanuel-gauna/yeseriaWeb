import fetch from "node-fetch";

const test = async () => {
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
        { role: "user", content: "¿Sabes de yesería?" }
      ],
      max_tokens: 100
    }),
  });

  const data = await response.json();
  console.log(data);
};

test();
