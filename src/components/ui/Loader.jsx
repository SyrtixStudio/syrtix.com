import React from 'react';

export default function Loader({ fadeOut = false }) {
  const [fade, setFade] = React.useState(false);

  React.useEffect(() => {
    if (fadeOut) {
      setTimeout(() => setFade(true), 1000);
    }
  }, [fadeOut]);

  return (
    <div
      className={`fixed inset-0 bg-base flex items-center justify-center z-[9999] transition-opacity duration-800 ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64">
          <img
            src="/img/logos/logogif1.gif"
            alt="syrtix.com"
            className="w-full h-full object-contain animate-pulse-slow drop-shadow-primary"
          />
        </div>

        {/* Nombre de la empresa */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
            Desarrollo y soluciones <span className="text-primary">informáticas</span>
          </h2>
          
        </div>
      </div>
    </div>
  );
}
