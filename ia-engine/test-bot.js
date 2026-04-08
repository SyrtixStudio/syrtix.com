// import fetch from 'node-fetch'; // Not needed in node 22

import dotenv from 'dotenv';
dotenv.config();

const url = 'http://localhost:3001/api/ia/chat';
const secret = process.env.SYRTIX_SECRET || 'syrtix_super_secret_123';

async function test() {
  console.log('🚀 Probando respuesta del chatbot...');
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${secret}`
      },
      body: JSON.stringify({
        question: 'Dame el link de whatsapp para contratar'
      })


    });

    const data = await response.json();
    console.log('🤖 Respuesta de la IA:');
    console.log('------------------------');
    console.log(data.answer || data.error || 'Sin respuesta');
    console.log('------------------------');

  } catch (error) {
    console.error('❌ Error al conectar con el servidor:', error.message);
  }
}

test();
