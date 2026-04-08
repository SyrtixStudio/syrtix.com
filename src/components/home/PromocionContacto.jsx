import { useEffect, useMemo, useState } from 'react';

import { useLanguage } from '../../i18n/index.jsx';

const DEFAULT_OFFER_DAYS = 7;

const parsePriceNumber = (value) => {
  if (typeof value !== 'string') return null;
  const digits = value.replace(/[^0-9]/g, '');
  if (!digits) return null;
  return Number(digits);
};

const formatCLP = (value, lang) => {
  if (typeof value !== 'number' || Number.isNaN(value)) return '';
  const formatted = new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(value);

  return lang === 'en' ? `${formatted} CLP` : formatted;
};

const getTimeLeft = (deadline) => {
  const diff = Math.max(0, deadline.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);

  return {
    totalSeconds,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

const pad = (num) => String(num).padStart(2, '0');

export default function PromocionContacto({ data }) {
  const {
    title,
    price,
    oldPrice,
    promoLabel,
    offerEndsAt,
    description,
    details,
    list = [],
    contactEmail,
    whatsapp,
    address,
    delivery,
  } = data;
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          namePlaceholder: 'Your name',
          emailPlaceholder: 'Email',
          submitSending: 'Sending...',
          submit: 'I want this offer',
          whatsapp: 'WhatsApp',
          map: 'Open in Google Maps',
          missingAccessKey:
            'VITE_WEB3FORMS_ACCESS_KEY is missing. The form cannot be submitted.',
          missingContactEmail: 'Contact email is missing. The form cannot be submitted.',
          success: 'Message sent successfully.',
          error: 'Error sending message. Please try again.',
          defaultMessage: `I am interested in the limited offer for ${title} (${price}).`,
          waMessage: `Hi, I want info about the limited offer for ${title} - ${price}`,
          subject: `Limited offer request - ${title}`,
          fromName: 'Interested in offer',
          mapTitle: 'map',
          offerLimited: 'LIMITED OFFER',
          before: 'Before',
          now: 'Now',
          save: 'You save',
          endsIn: 'Ends in',
          slots: 'Limited slots this week',
        }
      : {
          namePlaceholder: 'Tu nombre',
          emailPlaceholder: 'Email',
          submitSending: 'Enviando...',
          submit: 'Quiero esta oferta',
          whatsapp: 'WhatsApp',
          map: 'Ver en Google Maps',
          missingAccessKey:
            'Falta configurar VITE_WEB3FORMS_ACCESS_KEY en produccion. No se puede enviar el formulario.',
          missingContactEmail: 'Falta configurar el correo de contacto. No se puede enviar el formulario.',
          success: 'Mensaje enviado correctamente.',
          error: 'Error al enviar el mensaje. Intenta nuevamente.',
          defaultMessage: `Estoy interesado en la oferta limitada de ${title} (${price}).`,
          waMessage: `Hola, quiero info de la oferta limitada de ${title} - ${price}`,
          subject: `Solicitud oferta limitada - ${title}`,
          fromName: 'Interesado en oferta',
          mapTitle: 'mapa',
          offerLimited: 'OFERTA LIMITADA',
          before: 'Antes',
          now: 'Ahora',
          save: 'Ahorras',
          endsIn: 'Termina en',
          slots: 'Cupos limitados esta semana',
        };

  const deadline = useMemo(() => {
    const fallback = new Date(Date.now() + DEFAULT_OFFER_DAYS * 24 * 60 * 60 * 1000);
    if (!offerEndsAt) return fallback;
    const parsed = new Date(offerEndsAt);
    return Number.isNaN(parsed.getTime()) ? fallback : parsed;
  }, [offerEndsAt]);

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(deadline));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(copy.defaultMessage);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    setMessage(copy.defaultMessage);
  }, [copy.defaultMessage]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(deadline));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [deadline]);

  const oldPriceValue = parsePriceNumber(oldPrice);
  const currentPriceValue = parsePriceNumber(price);
  const hasSavings =
    typeof oldPriceValue === 'number' &&
    typeof currentPriceValue === 'number' &&
    oldPriceValue > currentPriceValue;
  const savingsValue = hasSavings ? oldPriceValue - currentPriceValue : 0;
  const discountPercent = hasSavings ? Math.round((savingsValue / oldPriceValue) * 100) : 0;

  const displayOldPrice = oldPrice || (oldPriceValue ? formatCLP(oldPriceValue, lang) : '');
  const displayCurrentPrice = price || (currentPriceValue ? formatCLP(currentPriceValue, lang) : '');

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
      <div className="relative overflow-hidden border border-secondary/30 bg-white p-6 shadow-lg">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 text-secondary px-3 py-1 text-xs font-bold tracking-wide mb-4">
              <span className="inline-flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
              {promoLabel || copy.offerLimited}
            </div>

            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>

            <div className="mt-3 mb-4">
              {displayOldPrice && (
                <div className="text-sm text-gray-500 line-through">
                  {copy.before}: {displayOldPrice}
                </div>
              )}
              <div className="text-3xl font-extrabold text-secondary">
                {copy.now}: {displayCurrentPrice}
              </div>
              {hasSavings && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full bg-primary/10 text-primary text-xs font-bold px-3 py-1">
                    {copy.save}: {formatCLP(savingsValue, lang)}
                  </div>
                  <div className="inline-flex items-center rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold px-3 py-1">
                    -{discountPercent}%
                  </div>
                </div>
              )}
            </div>

            {timeLeft.totalSeconds > 0 && (
              <div className="mb-4">
                <div className="text-xs font-semibold text-gray-600 mb-2">{copy.endsIn}</div>
                <div className="flex gap-2 text-sm font-bold text-gray-800">
                  <span className="px-2 py-1 bg-base border border-gray-200 rounded">{pad(timeLeft.days)}d</span>
                  <span className="px-2 py-1 bg-base border border-gray-200 rounded">{pad(timeLeft.hours)}h</span>
                  <span className="px-2 py-1 bg-base border border-gray-200 rounded">{pad(timeLeft.minutes)}m</span>
                  <span className="px-2 py-1 bg-base border border-gray-200 rounded">{pad(timeLeft.seconds)}s</span>
                </div>
                <p className="text-xs text-secondary font-semibold mt-2">{copy.slots}</p>
              </div>
            )}

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
            <div className="bg-base/50 p-4 border border-gray-200">
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
                    className={`bg-primary text-white px-4 py-2 text-sm font-semibold transition ${
                      status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-secondary'
                    }`}
                  >
                    {status === 'sending' ? copy.submitSending : copy.submit}
                  </button>
                  {whatsapp && (
                    <a
                      className="bg-green-500 text-white px-4 py-2 text-sm font-semibold flex items-center hover:bg-green-600 transition"
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
      </div>
    </section>
  );
}
