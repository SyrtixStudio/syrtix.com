import React, { useState } from 'react';

const WHATSAPP = '+56945432006';
const EMAIL = 'contacto@syrtix.com';
const ADDRESS = 'Santiago, Chile';

export default function ContactoPromocion() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('Quiero información sobre los servicios de diseño web.');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = 'Consulta diseño web';
    const body = `Nombre: ${name}%0AEmail: ${email}%0A%0AMensaje:%0A${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold mb-2 text-gray-900">¿Interesado? Contáctanos directo</h3>
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
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold w-full">Enviar</button>
      </form>
      <div className="flex flex-col sm:flex-row gap-2 items-center justify-between">
        <a
          className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center justify-center w-full sm:w-auto"
          href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hola, quiero información sobre diseño web.')}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
