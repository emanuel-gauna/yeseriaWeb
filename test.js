import 'dotenv/config';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });


async function testOpenAI() {
  console.log('API Key:', process.env.OPENAI_API_KEY); // debe mostrar tu clave

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hola, prueba de chat' }],
      max_tokens: 50,
    }),
  });

  const data = await response.json();
  console.log(data);
}

testOpenAI();
