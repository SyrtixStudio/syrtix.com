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
        {/* Logo Icon */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <img
            src="/img/logos/logo6.png"
            alt="Syrtix Icon"
            className="w-full h-full object-contain animate-pulse-slow drop-shadow-primary bg-primary p-2"
          />
        </div>

        {/* Brand Name and Tagline */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-2">
            Syrtix
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-gray-600">
            Desarrollo y soluciones <span className="text-primary font-bold">informáticas</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
