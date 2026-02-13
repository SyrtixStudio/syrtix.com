import { useEffect, useMemo, useState } from 'react';

import { useLanguage } from '../../i18n/index.jsx';

const getPromoDeadline = () => {
  const now = new Date();
  let target = new Date(now.getFullYear(), 1, 15, 23, 59, 59);
  if (target.getTime() < now.getTime()) {
    target = new Date(now.getFullYear() + 1, 1, 15, 23, 59, 59);
  }
  return target;
};

const getTimeLeft = (deadline) => {
  const diff = Math.max(0, deadline.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    totalSeconds,
    days,
    hours,
    minutes,
    seconds,
  };
};

const formatUnit = (value) => String(value).padStart(2, '0');

export default function ModalPublicidad({
  open,
  onClose,
  title,
  price,
  description,
  details,
  list,
  whatsapp,
  delivery,
}) {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          close: 'Close',
          sideLabel: 'Designs that convert',
          sideTags: 'UI/UX · Branding · Contact · Social · SEO',
          marquee: 'Professional website from $99.990 - limited slots - free consulting',
          promoEnds: 'Offer ends on Feb 15',
          promoOver: 'Offer ended.',
          namePlaceholder: 'Your name',
          emailPlaceholder: 'Email',
          submitSending: 'Sending...',
          submit: 'Send quote request',
          whatsapp: 'WhatsApp',
          missingAccessKey:
            'VITE_WEB3FORMS_ACCESS_KEY is missing. The form cannot be submitted.',
          success: 'Your message was sent. We will contact you soon.',
          error: 'There was a problem sending your message. Please try again.',
          fallbackMessage: 'I am interested in this package',
          fallbackPrice: 'Check pricing',
          waMessage: `Hi, I want information about ${title} - ${price}`,
          subject: `Request - ${title}`,
          fromName: 'Interested lead',
        }
      : {
          close: 'Cerrar',
          sideLabel: 'Diseños que convierten',
          sideTags: 'UI/UX · Identidad · Contacto · RRSS · SEO',
          marquee: 'Web profesional desde $99.990 - cupos limitados - asesoria gratuita',
          promoEnds: 'Promo termina el 15 feb',
          promoOver: 'Promocion finalizada.',
          namePlaceholder: 'Tu nombre',
          emailPlaceholder: 'Email',
          submitSending: 'Enviando...',
          submit: 'Enviar cotizacion',
          whatsapp: 'WhatsApp',
          missingAccessKey:
            'Falta configurar VITE_WEB3FORMS_ACCESS_KEY en produccion. No se puede enviar el formulario.',
          success: 'Tu mensaje fue enviado. Te contactaremos pronto.',
          error: 'Hubo un problema al enviar. Intentalo nuevamente.',
          fallbackMessage: 'Estoy interesado en este paquete',
          fallbackPrice: 'Consultar precio',
          waMessage: `Hola, quiero informacion sobre ${title} - ${price}`,
          subject: `Solicitud - ${title}`,
          fromName: 'Interesado en paquete',
        };

  const whatsappSource =
    typeof whatsapp === 'string' && whatsapp.trim() ? whatsapp : import.meta.env.VITE_WHATSAPP_PHONE;
  const whatsappDigits =
    typeof whatsappSource === 'string' ? whatsappSource.replace(/[^0-9]/g, '') : '';
  const whatsappHref = whatsappDigits
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(copy.waMessage)}`
    : '';

  const promoDeadline = useMemo(() => getPromoDeadline(), []);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(promoDeadline));
  const defaultMessage = useMemo(
    () => `${copy.fallbackMessage} ${title || 'web'} (${price || copy.fallbackPrice}).`,
    [copy.fallbackMessage, copy.fallbackPrice, title, price],
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(defaultMessage);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const next = getTimeLeft(promoDeadline);
      setTimeLeft(next);
      if (next.totalSeconds <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);
    setTimeLeft(getTimeLeft(promoDeadline));
    return () => clearInterval(intervalId);
  }, [promoDeadline]);

  useEffect(() => {
    if (open) {
      setMessage(defaultMessage);
    }
  }, [open, defaultMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const targetEmail = import.meta.env.VITE_CONTACT_EMAIL || 'contacto@syrtix.com';

    if (!accessKey) {
      setStatus('error');
      setFeedback(copy.missingAccessKey);
      return;
    }

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('email', targetEmail);
    formData.append('replyTo', targetEmail);
    formData.append('subject', copy.subject);
    formData.append('from_name', name || copy.fromName);
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
        setFeedback(copy.success);
        setName('');
        setEmail('');
        setMessage(defaultMessage);
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setFeedback(copy.error);
    } finally {
      setStatus('idle');
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4"
    >
      <div className="relative bg-white shadow-2xl max-w-xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-fadeIn max-h-[92vh] md:max-h-[88vh]">
        <button
          className="absolute top-2 right-2 md:top-3 md:right-3 z-20 text-gray-400 hover:text-primary text-2xl font-semibold"
          onClick={onClose}
          aria-label={copy.close}
        >
          x
        </button>
        <div className="relative z-10 flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4 md:p-0">
          <div className="text-center flex items-center gap-4 md:flex-col md:gap-0">
            <div className="w-16 h-16 md:w-28 md:h-28 rounded-lg bg-white/10 flex items-center justify-center md:mb-4 p-2 md:p-3">
              <img
                src="/img/logos/logo6.png"
                alt="syrtix"
                className="w-full h-full object-contain"
                draggable="false"
              />
            </div>
            <div className="text-left md:text-center">
              <p className="text-xs md:text-sm text-white/90">{copy.sideLabel}</p>
              <p className="text-[10px] md:text-xs text-white/80 md:mt-2">{copy.sideTags}</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 p-3 md:p-4 overflow-visible">
          {title && <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{title}</h3>}
          {price && <div className="text-base md:text-lg font-extrabold text-primary mb-1">{price}</div>}

          <div className="mb-2 overflow-hidden border border-primary">
            <div className="promo-marquee flex items-center">
              <span className="promo-marquee__text px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-primary">
                {copy.marquee}
              </span>
              <span className="promo-marquee__text px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-primary">
                {copy.marquee}
              </span>
            </div>
          </div>

          {timeLeft.totalSeconds > 0 ? (
            <div className="mb-2 flex items-center gap-2 text-xs text-red-700">
              <span className="inline-flex h-2 w-2 rounded-full bg-red-600 animate-pulse" aria-hidden />
              <span className="font-semibold">{copy.promoEnds}</span>
              <div className="flex items-center gap-1 text-[11px] font-bold bg-red-50 border border-red-200 rounded-full px-2 py-1">
                <span>{formatUnit(timeLeft.days)}d</span>
                <span>:</span>
                <span>{formatUnit(timeLeft.hours)}h</span>
                <span>:</span>
                <span>{formatUnit(timeLeft.minutes)}m</span>
                <span>:</span>
                <span>{formatUnit(timeLeft.seconds)}s</span>
              </div>
            </div>
          ) : (
            <div className="mb-2 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-600">
              {copy.promoOver}
            </div>
          )}

          {description && <p className="text-xs text-gray-700 mb-2">{description}</p>}
          {details && <p className="text-xs text-gray-600 mb-2">{details}</p>}

          {Array.isArray(list) && list.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-4 mb-3">
              {list.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="mt-1 w-3.5 h-3.5 text-primary flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.293 9.545a1 1 0 111.414-1.414L8.12 11.54l6.657-6.657a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[11px] text-gray-700 leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          )}

          <form onSubmit={handleSubmit} className="space-y-2 mb-3">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={copy.namePlaceholder}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-xs"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={copy.emailPlaceholder}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-xs"
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-xs h-16"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full sm:w-auto bg-primary text-white px-3 py-2 rounded-lg font-semibold shadow hover:shadow-lg transition text-xs ${
                  status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {status === 'sending' ? copy.submitSending : copy.submit}
              </button>
              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto border border-green-500 text-green-700 px-3 py-2 rounded-lg font-semibold hover:bg-green-50 transition text-xs text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.52 3.48A11.95 11.95 0 0012 .5C5.65.5.99 5.16.99 11.5c0 1.98.52 3.87 1.5 5.56L.5 23.5l6.64-1.74A11.98 11.98 0 0012 23.5c6.35 0 11.01-4.66 11.01-11 0-3.02-1.18-5.86-3.49-8.02z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.6 14.2c-.3-.15-1.8-.9-2.1-1.01-.3-.12-.52-.15-.74.15-.22.3-.86 1.01-1.05 1.22-.2.2-.4.23-.72.08-.32-.15-1.37-.5-2.61-1.6-.97-.86-1.62-1.92-1.81-2.24-.19-.33-.02-.51.14-.68.14-.14.32-.4.48-.6.16-.22.21-.37.32-.62.1-.25.05-.46-.03-.63-.08-.18-.74-1.78-1.02-2.44-.27-.64-.55-.55-.74-.56-.2-.01-.43-.01-.66-.01s-.6.09-.92.44c-.3.35-1.13 1.1-1.13 2.68 0 1.57 1.16 3.09 1.32 3.31.16.22 2.28 3.48 5.52 4.88 3.24 1.4 3.24.93 3.82.87.58-.05 1.88-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.12-.3-.2-.6-.35z"
                      fill="#fff"
                    />
                  </svg>
                  {copy.whatsapp}
                </a>
              )}
            </div>
            {feedback && (
              <p className={`text-xs ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                {feedback}
              </p>
            )}
          </form>

          <div className="mt-2">
            {delivery && <div className="text-xs text-green-700 font-semibold">{delivery}</div>}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes animate-fadeIn {
          0% { opacity: 0; transform: translateY(6px) scale(0.995); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes promo-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fadeIn {
          animation: animate-fadeIn 260ms cubic-bezier(.4,0,.2,1);
        }
        .promo-marquee {
          width: max-content;
          animation: promo-marquee 12s linear infinite;
        }
        .promo-marquee__text {
          white-space: nowrap;
        }
        .from-primary { --color-primary-dark: #0b6e6e; }
      `}</style>
    </div>
  );
}
