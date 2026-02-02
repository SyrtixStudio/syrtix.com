import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export default function ModalPublicidad({ open, onClose, title, price, description, details, list, contactEmail, whatsapp, address, socials, delivery }) {
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

  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-4"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden animate-fadeIn">
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
          <div className="text-center">
            <div className="w-28 h-28 rounded-lg bg-white/10 flex items-center justify-center mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm text-white/90">Diseños que convierten</p>
            <p className="text-xs text-white/80 mt-2">UI/UX · Prototipado · Identidad · SEO básico</p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-primary text-2xl font-semibold"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>

          {title && <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{title}</h3>}
          {price && <div className="text-lg md:text-xl font-extrabold text-primary mb-3">{price}</div>}

          {description && <p className="text-sm text-gray-700 mb-4">{description}</p>}
          {details && <p className="text-sm text-gray-600 mb-4">{details}</p>}

          {Array.isArray(list) && list.length > 0 && (
            <ul className="grid grid-cols-1 gap-2 mb-5">
              {list.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="mt-1 w-4 h-4 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.293 9.545a1 1 0 111.414-1.414L8.12 11.54l6.657-6.657a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <button
              onClick={() => { if (onClose) onClose(); navigate('/contacto'); }}
              className="w-full sm:w-auto bg-primary text-white px-5 py-3 rounded-lg font-semibold shadow hover:shadow-lg transition"
            >
              Solicitar presupuesto
            </button>
            <button
              onClick={() => { if (onClose) onClose(); navigate('/paquetes'); }}
              className="w-full sm:w-auto border border-gray-200 text-gray-800 px-5 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Ver paquetes
            </button>
          </div>

          <div className="mt-2 text-xs text-gray-500">Entrega rápida · Soporte incluido · Garantía de satisfacción</div>

          <div className="mt-3">
            {delivery && <div className="text-xs text-green-700 font-semibold">{delivery}</div>}
          </div>

          <div className="mt-4 flex items-center gap-3">
            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hola, quiero información sobre ${title} - ${price}`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.52 3.48A11.95 11.95 0 0012 .5C5.65.5.99 5.16.99 11.5c0 1.98.52 3.87 1.5 5.56L.5 23.5l6.64-1.74A11.98 11.98 0 0012 23.5c6.35 0 11.01-4.66 11.01-11 0-3.02-1.18-5.86-3.49-8.02z" fill="currentColor"/>
                  <path d="M17.6 14.2c-.3-.15-1.8-.9-2.1-1.01-.3-.12-.52-.15-.74.15-.22.3-.86 1.01-1.05 1.22-.2.2-.4.23-.72.08-.32-.15-1.37-.5-2.61-1.6-.97-.86-1.62-1.92-1.81-2.24-.19-.33-.02-.51.14-.68.14-.14.32-.4.48-.6.16-.22.21-.37.32-.62.1-.25.05-.46-.03-.63-.08-.18-.74-1.78-1.02-2.44-.27-.64-.55-.55-.74-.56-.2-.01-.43-.01-.66-.01s-.6.09-.92.44c-.3.35-1.13 1.1-1.13 2.68 0 1.57 1.16 3.09 1.32 3.31.16.22 2.28 3.48 5.52 4.88 3.24 1.4 3.24.93 3.82.87.58-.05 1.88-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.12-.3-.2-.6-.35z" fill="#fff"/>
                </svg>
                WhatsApp
              </a>
            )}

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
          </div>
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
        .from-primary { --color-primary-dark: #0b6e6e; }
      `}</style>
    </div>
  );
}
