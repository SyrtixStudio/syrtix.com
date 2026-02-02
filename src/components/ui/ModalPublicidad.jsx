import { useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

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
  const promoDeadline = useMemo(() => getPromoDeadline(), []);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(promoDeadline));

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
    // Run tick immediately
    setTimeLeft(getTimeLeft(promoDeadline));
    return () => clearInterval(intervalId);
  }, [promoDeadline]);

  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4"
    >
      <div className="relative bg-white shadow-2xl max-w-lg w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-fadeIn">
        <div className="relative z-10 hidden md:flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
          <div className="text-center">
            <div className="w-28 h-28 rounded-lg bg-white/10 flex items-center justify-center mb-4 p-3">
              <img
                src="/img/logos/logo6.png"
                alt="syrtix"
                className="w-full h-full object-contain"
                draggable="false"
              />
            </div>
            <p className="text-sm text-white/90">Diseños que convierten</p>
            <p className="text-xs text-white/80 mt-2">UI/UX · Identidad · Contacto · RRSS · SEO </p>
          </div>
        </div>

        <div className="relative z-10 p-3 md:p-4">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl font-semibold"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>

          {title && <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{title}</h3>}
          {price && <div className="text-base md:text-lg font-extrabold text-primary mb-2">{price}</div>}

          <div className="mb-2 overflow-hidden border border-primary">
            <div className="promo-marquee flex items-center">
              <span className="promo-marquee__text px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-primary">
                Web profesional desde $99.000 - cupos limitados - asesoria gratuita
              </span>
              <span className="promo-marquee__text px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-primary">
                Web profesional desde $99.000 - cupos limitados - asesoria gratuita
              </span>
            </div>
          </div>

          {timeLeft.totalSeconds > 0 ? (
            <div className="mb-1 border border-red-200 bg-red-50 p-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-red-700">
                  <span className="inline-flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                  Promocion - termina el 15 de febrero
                </div>
                <div className="flex items-center gap-2 text-red-700">
                  <div className="text-center">
                    <div className="text-lg font-bold leading-none">{formatUnit(timeLeft.days)}</div>
                    <div className="text-xs uppercase">Dias</div>
                  </div>
                  <span className="text-xs font-bold">:</span>
                  <div className="text-center">
                    <div className="text-lg font-bold leading-none">{formatUnit(timeLeft.hours)}</div>
                    <div className="text-xs uppercase">Horas</div>
                  </div>
                  <span className="text-xs font-bold">:</span>
                  <div className="text-center">
                    <div className="text-lg font-bold leading-none">{formatUnit(timeLeft.minutes)}</div>
                    <div className="text-xs uppercase">Min</div>
                  </div>
                  <span className="text-xs font-bold">:</span>
                  <div className="text-center">
                    <div className="text-lg font-bold leading-none">{formatUnit(timeLeft.seconds)}</div>
                    <div className="text-xs uppercase">Seg</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-2 rounded-lg border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-600">
              Promocion finalizada.
            </div>
          )}

          {description && <p className="text-xs text-gray-700 mb-2">{description}</p>}
          {details && <p className="text-xs text-gray-600 mb-2">{details}</p>}

          {Array.isArray(list) && list.length > 0 && (
            <ul className="grid grid-cols-1 gap-1 mb-3">
              {list.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="mt-1 w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.293 9.545a1 1 0 111.414-1.414L8.12 11.54l6.657-6.657a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col sm:flex-row gap-2 mb-2">
            <button
              onClick={() => { if (onClose) onClose(); navigate('/contacto'); }}
              className="w-full sm:w-auto bg-primary text-white px-3 py-2 rounded-lg font-semibold shadow hover:shadow-lg transition text-xs"
            >
              Solicitar presupuesto
            </button>
            <button
              onClick={() => { if (onClose) onClose(); navigate('/paquetes'); }}
              className="w-full sm:w-auto border border-gray-200 text-gray-800 px-3 py-2 rounded-lg font-medium hover:bg-gray-50 transition text-xs"
            >
              Ver paquetes
            </button>
          </div>

        

          <div className="mt-2">
            {delivery && <div className="text-xs text-green-700 font-semibold">{delivery}</div>}
          </div>

          <div className="mt-2 flex items-center gap-2">
            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hola, quiero información sobre ${title} - ${price}`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-md text-xs font-semibold"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.52 3.48A11.95 11.95 0 0012 .5C5.65.5.99 5.16.99 11.5c0 1.98.52 3.87 1.5 5.56L.5 23.5l6.64-1.74A11.98 11.98 0 0012 23.5c6.35 0 11.01-4.66 11.01-11 0-3.02-1.18-5.86-3.49-8.02z" fill="currentColor"/>
                  <path d="M17.6 14.2c-.3-.15-1.8-.9-2.1-1.01-.3-.12-.52-.15-.74.15-.22.3-.86 1.01-1.05 1.22-.2.2-.4.23-.72.08-.32-.15-1.37-.5-2.61-1.6-.97-.86-1.62-1.92-1.81-2.24-.19-.33-.02-.51.14-.68.14-.14.32-.4.48-.6.16-.22.21-.37.32-.62.1-.25.05-.46-.03-.63-.08-.18-.74-1.78-1.02-2.44-.27-.64-.55-.55-.74-.56-.2-.01-.43-.01-.66-.01s-.6.09-.92.44c-.3.35-1.13 1.1-1.13 2.68 0 1.57 1.16 3.09 1.32 3.31.16.22 2.28 3.48 5.52 4.88 3.24 1.4 3.24.93 3.82.87.58-.05 1.88-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.12-.3-.2-.6-.35z" fill="#fff"/>
                </svg>
                WhatsApp
              </a>
            )}
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
