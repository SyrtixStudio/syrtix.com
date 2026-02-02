import React, { useState } from 'react';

export default function PromocionContacto({ data }) {
  const { title, price, description, details, list, contactEmail, whatsapp, address, delivery } = data;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(`Estoy interesado en el paquete ${title} (${price}).`);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Solicitud - ${title}`;
    const body = `Paquete: ${title} - ${price}%0A%0ANombre: ${name}%0AEmail: ${email}%0A%0AMensaje:%0A${message}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <div className="text-lg font-extrabold text-primary my-2">{price}</div>
          <p className="text-gray-700 mb-3">{description}</p>
          <p className="text-gray-600 mb-4">{details}</p>

          <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
            {list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className="text-sm text-green-700 font-semibold">{delivery}</div>
        </div>

        <div>
          <div className="bg-base/50 p-4 rounded-md">
            <form onSubmit={handleSubmit} className="space-y-3">
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
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm h-28"
              />

              <div className="flex gap-2">
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold">Enviar</button>
                {whatsapp && (
                  <a
                    className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center"
                    href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hola, quiero info sobre ${title} - ${price}`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                )}
              </div>

              {address && (
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary underline"
                >
                  Ver en Google Maps
                </a>
              )}
            </form>
          </div>

          {address && (
            <div className="mt-4">
              <iframe
                title="mapa"
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                width="100%"
                height="200"
                loading="lazy"
                className="rounded-md border"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
