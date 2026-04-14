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
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(value);

  return lang === 'en' ? `$${formatted} CLP` : `$${formatted}`;
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
        <div className="relative z-10 hidden md:flex flex-col justify-between bg-gray-900 border-r border-gray-800">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/img/promo/banner.png" 
              alt="Promo Banner" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
          </div>

          <div className="relative z-10 p-12 flex-1 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 mb-8 p-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-md">
              <img
                src="/img/logos/logo6.png"
                alt="Syrtix"
                className="w-full h-full object-contain"
                draggable="false"
              />
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] leading-none mb-4">{copy.sideLabel}</p>
              <div className="h-0.5 w-12 bg-primary/30 mx-auto" />
              <p className="text-[9px] text-white/50 uppercase tracking-[0.2em] leading-relaxed max-w-[180px]">{copy.sideTags}</p>
            </div>
          </div>
        </div>

        <div
          ref={contentRef}
          onScroll={updateScrollHint}
          className="modal-scrollbar relative z-10 p-3 md:p-6 overflow-y-auto min-h-0"
        >
          {title && <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">{title}</h3>}
          
          <div className="mb-8 rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50/50 p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-primary text-gray-900 uppercase tracking-widest">
                {promoLabel || copy.launchOffer}
              </span>
            </div>
            
            <div className="space-y-1">
              {displayOldPrice && (
                <div className="text-sm font-medium text-gray-400 flex items-center gap-3">
                  <span className="line-through opacity-50">{displayOldPrice}</span>
                  {hasSavings && (
                    <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold">-{discountPercent}% OFF</span>
                  )}
                </div>
              )}
              {displayCurrentPrice && (
                <div className="text-4xl font-bold text-gray-900 tracking-tight">
                  {displayCurrentPrice}
                </div>
              )}
            </div>
          </div>

          {/* Countdown removed per request */}

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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <Link
              to="/contacto"
              onClick={onClose}
              className="group relative overflow-hidden bg-secondary text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 text-sm text-center"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              {copy.quoteCta}
            </Link>
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-white border-2 border-gray-900 text-gray-900 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {copy.whatsapp}
              </a>
            )
}</div>

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
