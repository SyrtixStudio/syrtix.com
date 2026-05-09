import AIBackgroundOrb from '../components/AIBackgroundOrb';

const Delivery = () => {
  return (
    <div className="min-h-screen bg-[#000] flex flex-col items-center justify-center relative overflow-hidden font-['Outfit']">
      {/* Background Orb Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-50">
        <AIBackgroundOrb width={1200} height={1200} />
      </div>

      <style>{`
        @keyframes deliveryFloat {
          0% { transform: translateY(0px) rotateY(-8deg) rotateX(4deg); }
          50% { transform: translateY(-20px) rotateY(12deg) rotateX(-4deg); }
          100% { transform: translateY(0px) rotateY(-8deg) rotateX(4deg); }
        }
        .animate-delivery-logo {
          animation: deliveryFloat 8s ease-in-out infinite alternate;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 perspective-[1200px]">
        {/* Logo Image */}
        <div className="w-56 h-56 sm:w-80 sm:h-80 mb-8">
          <img 
            src="/img/logos/img-logo-syrtix.png" 
            alt="Syrtix Logo Delivery" 
            className="w-full h-full object-contain animate-delivery-logo mix-blend-screen"
            style={{ filter: 'invert(1)' }}
          />
        </div>

        <h1 className="text-4xl sm:text-7xl font-bold text-white tracking-[0.2em] mb-4 uppercase">
          Proyecto <span className="text-primary">Entregado</span>
        </h1>
        
        <div className="h-px w-48 bg-gradient-to-r from-transparent via-primary to-transparent mb-8"></div>
        
        <p className="text-xl sm:text-2xl text-blue-100 font-light max-w-2xl leading-relaxed">
          Tu solución de <span className="font-bold text-white">Ingeniería Digital</span> ha sido desplegada con éxito. 
          Bienvenido al futuro de tu negocio.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="px-8 py-3 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(200,170,90,0.4)]">
            Ver mi Sitio
          </button>
          <button className="px-8 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
            Descargar Documentación
          </button>
        </div>
      </div>

      {/* Subtle border effect */}
      <div className="absolute inset-0 pointer-events-none border-[20px] border-white/5"></div>
      
      {/* Decorative dots */}
      <div className="absolute bottom-10 left-10 text-white/20 text-xs tracking-widest uppercase">
        Syrtix Deployment System v3.1
      </div>
      <div className="absolute bottom-10 right-10 text-white/20 text-xs tracking-widest uppercase">
        Verified by Syrtix AI
      </div>
    </div>
  );
};

export default Delivery;
