import { useEffect } from 'react';

import { CheckCircle2, X, XCircle } from 'lucide-react';

function PackageDetailModal({ isOpen, onClose, title, subtitle, details, labels, closeLabel }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !details) return null;

  return (
    <div
      className="fixed inset-0 z-[80] bg-gray-900/70 backdrop-blur-md p-3 sm:p-4 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="modal-scrollbar w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-base border border-gray-200 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-base border-b border-gray-200">
          <div className="h-1 bg-gradient-to-r from-secondary via-primary to-secondary" />
          <div className="px-5 sm:px-6 py-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-secondary">{subtitle}</p>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={closeLabel}
              className="inline-flex items-center justify-center w-9 h-9 text-gray-500 border border-gray-300 hover:border-secondary hover:text-secondary transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="border border-gray-200 bg-base2/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-secondary">{labels.audience}</p>
              <p className="text-sm text-gray-700 mt-1">{details.audience}</p>
            </div>
            <div className="border border-gray-200 bg-base2/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-secondary">{labels.objective}</p>
              <p className="text-sm text-gray-700 mt-1">{details.objective}</p>
            </div>
            <div className="border border-gray-200 bg-base2/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-secondary">{labels.focus}</p>
              <p className="text-sm text-gray-700 mt-1">{details.focus}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="border border-green-200 bg-green-50/60 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-green-700 mb-2">{labels.includes}</p>
              <ul className="space-y-2">
                {details.includes.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start">
                    <CheckCircle2 size={16} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50/60 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-700 mb-2">{labels.excludes}</p>
              <ul className="space-y-2">
                {details.excludes.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start">
                    <XCircle size={16} className="mr-2 mt-0.5 text-amber-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {Array.isArray(details.webTypes) && details.webTypes.length > 0 && (
            <div className="border border-secondary/30 bg-secondary/5 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-secondary mb-2">{labels.webTypes}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {details.webTypes.map((item) => (
                  <li key={item} className="text-sm text-gray-700 flex items-start">
                    <CheckCircle2 size={16} className="mr-2 mt-0.5 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-secondary hover:bg-blue-900 transition-colors"
            >
              {closeLabel}
            </button>
          </div>
        </div>

        <style>{`
          .modal-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .modal-scrollbar::-webkit-scrollbar-track {
            background: #f3f4f6;
          }
          .modal-scrollbar::-webkit-scrollbar-thumb {
            background: #9ca3af;
          }
        `}</style>
      </div>
    </div>
  );
}

export default PackageDetailModal;
