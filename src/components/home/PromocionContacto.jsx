import { useEffect, useState } from 'react';

import { useLanguage } from '../../i18n/index.jsx';

export default function PromocionContacto({ data }) {
  const { title, price, description, details, list, contactEmail, whatsapp, address, delivery } = data;
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          namePlaceholder: 'Your name',
          emailPlaceholder: 'Email',
          submitSending: 'Sending...',
          submit: 'Send',
          whatsapp: 'WhatsApp',
          map: 'Open in Google Maps',
          missingAccessKey:
            'VITE_WEB3FORMS_ACCESS_KEY is missing. The form cannot be submitted.',
          missingContactEmail: 'Contact email is missing. The form cannot be submitted.',
          success: 'Message sent successfully.',
          error: 'Error sending message. Please try again.',
          defaultMessage: `I am interested in the package ${title} (${price}).`,
          waMessage: `Hi, I want info about ${title} - ${price}`,
          subject: `Request - ${title}`,
          fromName: 'Interested in package',
          mapTitle: 'map',
        }
      : {
          namePlaceholder: 'Tu nombre',
          emailPlaceholder: 'Email',
          submitSending: 'Enviando...',
          submit: 'Enviar',
          whatsapp: 'WhatsApp',
          map: 'Ver en Google Maps',
          missingAccessKey:
            'Falta configurar VITE_WEB3FORMS_ACCESS_KEY en produccion. No se puede enviar el formulario.',
          missingContactEmail: 'Falta configurar el correo de contacto. No se puede enviar el formulario.',
          success: 'Mensaje enviado correctamente.',
          error: 'Error al enviar el mensaje. Intenta nuevamente.',
          defaultMessage: `Estoy interesado en el paquete ${title} (${price}).`,
          waMessage: `Hola, quiero info sobre ${title} - ${price}`,
          subject: `Solicitud - ${title}`,
          fromName: 'Interesado en paquete',
          mapTitle: 'mapa',
        };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(copy.defaultMessage);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    setMessage(copy.defaultMessage);
  }, [copy.defaultMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const targetEmail = contactEmail || import.meta.env.VITE_CONTACT_EMAIL;

    if (!accessKey) {
      setFeedback({
        type: 'error',
        message: copy.missingAccessKey,
      });
      return;
    }

    if (!targetEmail) {
      setFeedback({
        type: 'error',
        message: copy.missingContactEmail,
      });
      return;
    }

    setFeedback(null);
    setStatus('sending');

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('email', targetEmail);
    formData.append('replyTo', targetEmail);
    formData.append('subject', copy.subject);
    formData.append('from_name', name || copy.fromName);
    if (email) formData.append('from', email);
    if (message) formData.append('message', message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        setFeedback({ type: 'success', message: copy.success });
        setName('');
        setEmail('');
        setMessage(copy.defaultMessage);
      } else {
        throw new Error('request failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setFeedback({ type: 'error', message: copy.error });
    } finally {
      setStatus('idle');
    }
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
                placeholder={copy.namePlaceholder}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={copy.emailPlaceholder}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
              />
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm h-28"
              />

              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold transition ${
                    status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {status === 'sending' ? copy.submitSending : copy.submit}
                </button>
                {whatsapp && (
                  <a
                    className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold flex items-center"
                    href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(copy.waMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.whatsapp}
                  </a>
                )}
              </div>

              {feedback && (
                <p
                  className={`text-sm ${feedback.type === 'error' ? 'text-red-600' : 'text-green-600'}`}
                >
                  {feedback.message}
                </p>
              )}

              {address && (
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary underline"
                >
                  {copy.map}
                </a>
              )}
            </form>
          </div>

          {address && (
            <div className="mt-4">
              <iframe
                title={copy.mapTitle}
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
