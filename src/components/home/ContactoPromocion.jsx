import React, { useState } from 'react';

const WHATSAPP = '+56945432006';
const EMAIL = 'contacto@syrtix.com';
const ADDRESS = '5151 Los Militares, Las Condes, Regi�n Metropolitana, Chile';

export default function ContactoPromocion() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Quiero informaci�n sobre los servicios de dise�o web.');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const formData = new FormData();
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append('email', EMAIL);
    formData.append('subject', 'Nueva cotizaci�n desde syrtix.com');
    formData.append('replyTo', EMAIL);
    formData.append('from_name', 'Syrtix Web');
    if (name) formData.append('name', name);
    if (email) formData.append('from', email);
    if (message) formData.append('message', message);

    try {
      setStatus('sending');
      setFeedback('');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setFeedback('Tu mensaje fue enviado. Te contactaremos pronto.');
        setName('');
        setEmail('');
        setMessage('Quiero informaci�n sobre los servicios de dise�o web.');
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setFeedback('Hubo un problema al enviar. Int�ntalo nuevamente.');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-2 text-gray-900">�Interesado? Cont�añonos directo</h3>
      <form onSubmit={handleSubmit} className="space-y-3 mb-4">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
        />
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm h-24"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold w-full transition ${
            status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </button>
        {feedback && (
          <p
            className={`text-sm ${
              status === 'error' ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {feedback}
          </p>
        )}
      </form>
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
        <a
          className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center justify-center w-full sm:w-auto"
          href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hola, quiero informaci�n sobre dise�o web.')}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
