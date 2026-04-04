import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

const AuditModal = ({ isOpen, onClose, auditData, lang }) => {
  if (!isOpen || !auditData) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div 
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              {auditData.icon}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{auditData.title}</h2>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider">
                {lang === 'es' ? 'Detalle del Servicio' : 'Service Detail'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-gray-400 hover:text-gray-900" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              "{auditData.description}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-gray-900 font-bold mb-4 flex items-center gap-2">
                <CheckCircle size={18} className="text-secondary" />
                {lang === 'es' ? '¿Qué auditamos?' : 'What do we audit?'}
              </h3>
              <ul className="space-y-3">
                {auditData.what.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 border-l-2 border-gray-100 pl-4 py-1 hover:border-secondary transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-gray-50 p-6">
              <h3 className="text-gray-900 font-bold mb-4 flex items-center gap-2">
                <ArrowRight size={18} className="text-green-600" />
                {lang === 'es' ? 'Resultado Esperado' : 'Expected Result'}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                {auditData.result}
              </p>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-400 mb-4 uppercase font-bold">
                  {lang === 'es' ? '¿Listo para empezar?' : 'Ready to start?'}
                </p>
                <a 
                  href="/contacto"
                  className="inline-flex w-full items-center justify-center bg-secondary text-white font-bold px-6 py-3 hover:bg-primary transition duration-300"
                >
                  {lang === 'es' ? 'Solicitar Presupuesto' : 'Request Quote'}
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-gray-50 p-6 text-center text-xs text-gray-400">
          {lang === 'es' 
            ? 'Este servicio se incluye de forma integral en el paquete Auditoría Digital 360°.' 
            : 'This service is comprehensively included in the 360° Digital Audit package.'}
        </div>
      </div>
    </div>
  );
};

export default AuditModal;
