import { useEffect, useMemo, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import { useLanguage } from '../../i18n/index.jsx';

const getPromoDeadline = (offerEndsAt) => {
  const fallback = new Date(2026, 2, 31, 23, 59, 59);
  if (!offerEndsAt) return fallback;
  const parsed = new Date(offerEndsAt);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed;
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

export default function ModalPublicidad({
  open,
  onClose,
  title,
  oldPrice,
  price,
  promoLabel,
  offerEndsAt,
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
          sideTags: 'UI/UX - Branding - Contact - Social - SEO',
          promoEnds: 'Offer ends:',
          promoOver: 'Offer has ended.',
          quoteCta: 'Get quote',
          whatsapp: 'WhatsApp',
          fallbackPrice: 'Check pricing',
          emailFootnote: '* Includes setup. Provider licenses are quoted separately.',
          scrollDown: 'Scroll down',
          before: 'Before',
          now: 'Now',
          launchOffer: 'Launch offer',
          save: 'You save',
        }
      : {
          close: 'Cerrar',
          sideLabel: 'Diseños que convierten',
          sideTags: 'UI/UX - Identidad - Contacto - RRSS - SEO',
          promoEnds: 'La promo termina:',
          promoOver: 'La promo ha finalizado.',
          quoteCta: 'Cotizar',
          whatsapp: 'WhatsApp',
          fallbackPrice: 'Consultar precio',
          emailFootnote: '* Incluye configuración. Las licencias del proveedor se cotizan aparte.',
          scrollDown: 'Desliza hacia abajo',
          before: 'Antes',
          now: 'Ahora',
          launchOffer: 'Oferta de lanzamiento',
          save: 'Ahorras',
        };

  const whatsappSource =
    typeof whatsapp === 'string' && whatsapp.trim() ? whatsapp : import.meta.env.VITE_WHATSAPP_PHONE;
  const whatsappDigits =
    typeof whatsappSource === 'string' ? whatsappSource.replace(/[^0-9]/g, '') : '';
  const messagePrice = price || copy.fallbackPrice;
  const whatsappMessage =
    lang === 'en'
      ? `Hi, I want information about ${title || 'this package'} - ${messagePrice}`
      : `Hola, quiero información sobre ${title || 'este paquete'} - ${messagePrice}`;
  const whatsappHref = whatsappDigits
    ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(whatsappMessage)}`
    : '';

  const promoDeadline = useMemo(() => getPromoDeadline(offerEndsAt), [offerEndsAt]);
  const promoDateLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'es-CL', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(promoDeadline),
    [lang, promoDeadline],
  );
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(promoDeadline));
  const [showScrollHint, setShowScrollHint] = useState(false);
  const contentRef = useRef(null);
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
  const hasAsteriskFeature =
    Array.isArray(list) && list.some((item) => typeof item === 'string' && item.includes('*'));

  const updateScrollHint = () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setShowScrollHint(false);
      return;
    }

    const contentEl = contentRef.current;
    if (!contentEl) {
      setShowScrollHint(false);
      return;
    }

    const hasOverflow = contentEl.scrollHeight > contentEl.clientHeight + 8;
    const nearBottom = contentEl.scrollTop + contentEl.clientHeight >= contentEl.scrollHeight - 16;
    setShowScrollHint(hasOverflow && !nearBottom);
  };

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
    if (!open) return;
    updateScrollHint();

    const onResize = () => updateScrollHint();
    window.addEventListener('resize', onResize);
    const rafId = window.requestAnimationFrame(updateScrollHint);

    return () => {
      window.removeEventListener('resize', onResize);
      window.cancelAnimationFrame(rafId);
    };
  }, [open, description, details, delivery, list]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-3 sm:px-4 py-3"
    >
      <div className="relative bg-white shadow-2xl w-full max-w-lg md:max-w-5xl grid grid-rows-[auto,minmax(0,1fr)] md:grid-rows-1 md:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.25fr)] overflow-hidden animate-fadeIn max-h-[88vh] md:max-h-[90vh]">
        <button
          className="absolute top-2 right-2 md:top-3 md:right-3 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-gray-100/80 hover:bg-primary/90 transition-colors shadow-lg border border-gray-200 hover:border-primary group"
          onClick={onClose}
          aria-label={copy.close}
        >
          <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" fill="none" />
            <path d="M6.5 6.5l7 7M13.5 6.5l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
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

        <div
          ref={contentRef}
          onScroll={updateScrollHint}
          className="modal-scrollbar relative z-10 p-3 md:p-6 overflow-y-auto min-h-0"
        >
          {title && <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">{title}</h3>}
          <div className="mb-3 rounded-xl border border-secondary/25 bg-gradient-to-br from-secondary/5 via-white to-primary/5 p-3 md:p-4">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                {promoLabel || copy.launchOffer}
              </span>
              {hasSavings && (
                <>
                  <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                    {copy.save}: {formatCLP(savingsValue, lang)}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-700">
                    -{discountPercent}%
                  </span>
                </>
              )}
            </div>
            {displayOldPrice && (
              <div className="text-[11px] text-gray-500">
                {copy.before}:{' '}
                <span className="line-through decoration-gray-400">{displayOldPrice}</span>
              </div>
            )}
            {displayCurrentPrice && (
              <div className="mt-0.5 text-xl md:text-2xl font-extrabold text-primary">
                {copy.now}: {displayCurrentPrice}
              </div>
            )}
          </div>

          {timeLeft.totalSeconds > 0 ? (
            <div className="mb-3 flex flex-wrap items-center gap-2 rounded-lg border border-secondary/25 bg-secondary/5 px-3 py-2 text-xs text-secondary">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden />
              <span className="font-semibold text-secondary">
                {copy.promoEnds} {promoDateLabel}
              </span>
              <div className="flex items-center gap-1 text-[11px] font-bold rounded-full border border-secondary/35 bg-white px-2 py-1 text-secondary">
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
            <div className="mb-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs text-gray-600">
              {copy.promoOver}
            </div>
          )}

          {(description || details) && (
            <div className="mb-3 rounded-lg border border-gray-200 bg-gray-50/70 p-3">
              {description && <p className="text-xs text-gray-600 leading-relaxed">{description}</p>}
              {details && <p className="mt-1 text-xs text-gray-500 leading-relaxed">{details}</p>}
            </div>
          )}

          {Array.isArray(list) && list.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-1.5 gap-x-4 mb-3">
              {list.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5"
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
                  </span>
                  <span className="text-[12px] text-gray-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {hasAsteriskFeature && <p className="text-[10px] text-gray-500 mb-3">{copy.emailFootnote}</p>}

          <div className={`grid gap-2 mb-2 ${whatsappHref ? 'grid-cols-2' : 'grid-cols-1'}`}>
            <Link
              to="/contacto"
              onClick={onClose}
              className="w-full bg-primary text-white px-2 py-2 rounded-lg font-semibold shadow hover:shadow-lg transition text-[11px] sm:text-xs text-center"
            >
              {copy.quoteCta}
            </Link>
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="w-full border border-green-500 text-green-700 px-2 py-2 rounded-lg font-semibold hover:bg-green-50 transition text-[11px] sm:text-xs text-center flex items-center justify-center gap-2"
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

          <div className="mt-2">
            {delivery && <div className="text-xs text-green-700 font-semibold">{delivery}</div>}
          </div>

          {showScrollHint && (
            <div className="md:hidden pointer-events-none sticky bottom-1 mt-2 flex justify-center">
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white/95 px-2 py-1 text-[10px] font-semibold text-gray-600 shadow-sm">
                {copy.scrollDown}
                <svg
                  className="w-3 h-3 animate-bounce"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes animate-fadeIn {
          0% { opacity: 0; transform: translateY(6px) scale(0.995); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn {
          animation: animate-fadeIn 260ms cubic-bezier(.4,0,.2,1);
        }
        .modal-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(18, 41, 122, 0.5) rgba(243, 244, 246, 1);
        }
        .modal-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .modal-scrollbar::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
        .modal-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(18, 41, 122, 0.5);
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}
