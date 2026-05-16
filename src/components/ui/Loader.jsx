import React from 'react';
import AIBackgroundOrb from '../AIBackgroundOrb';

export default function Loader({ fadeOut = false }) {
  const [fade, setFade] = React.useState(false);

  React.useEffect(() => {
    if (fadeOut) {
      // Reducir el tiempo de desvanecimiento interno para que el contenido real aparezca antes
      setTimeout(() => setFade(true), 500);
    }
  }, [fadeOut]);

  // Bloquear el scroll del body mientras el Loader esté visible
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 overflow-hidden bg-[#000] flex items-center justify-center z-[9999] transition-opacity duration-800 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Orb Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-60">
        <AIBackgroundOrb width={1000} height={1000} />
      </div>

      <style>{`
        @keyframes elegantFloat {
          0% { transform: translateY(0px) rotateY(-10deg) rotateX(5deg); }
          50% { transform: translateY(-15px) rotateY(15deg) rotateX(-5deg); }
          100% { transform: translateY(0px) rotateY(-10deg) rotateX(5deg); }
        }
        .animate-logo {
          animation: elegantFloat 6s ease-in-out infinite alternate;
          transform-style: preserve-3d;
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center gap-8 perspective-[1000px]">
        {/* Animated Logo Image */}
        <div className="relative w-40 h-40 sm:w-56 sm:h-56">
          <img
            src="/img/logos/logo-syrtix.webp"
            alt="Syrtix Logo Loading"
            className="w-full h-full object-contain animate-logo mix-blend-screen"
            style={{ filter: 'invert(1)' }}
          />
        </div>

        {/* Brand Name and Tagline */}
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-widest mb-4 drop-shadow-lg">
            SYRTIX
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto mb-4 rounded-full animate-pulse"></div>
          <h2 className="text-xl sm:text-2xl font-light text-blue-200 tracking-wide">
            Digital <span className="text-primary font-bold">Engineering</span> Solutions
          </h2>
        </div>
      </div>
    </div>
  );
}
