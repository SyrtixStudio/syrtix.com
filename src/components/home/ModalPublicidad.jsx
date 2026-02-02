import { useEffect } from 'react';

export default function ModalPublicidad({ open, onClose }) {
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-primary text-2xl font-bold"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-primary mb-2">Diseño Web</h2>
        <div className="text-lg font-semibold text-gray-800 mb-2">Desde $99.000</div>
        <p className="text-gray-700 mb-4">
          Diseños únicos y personalizados que reflejan la identidad de tu marca y conectan con tu audiencia.
        </p>
        <p className="text-gray-700 mb-4">
          Enfocado en UI/UX, prototipos e identidad visual.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-2">
          <li>Diseño UI/UX profesional</li>
          <li>Prototipado interactivo</li>
          <li>Identidad visual</li>
          <li>Responsive design</li>
          <li>Landing simple</li>
          <li>Rediseño</li>
          <li>Sección adicional + SEO básico</li>
        </ul>
      </div>
    </div>
  );
}
