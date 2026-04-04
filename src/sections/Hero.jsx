import { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

import { ArrowRight, Zap, TrendingUp, Clock, Code } from 'lucide-react';

import { useLanguage } from '../i18n/index.jsx';

const heroImages = [
  // Diseño web / UI en laptop — agencia digital
  'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1920&q=85',
  // Equipo de trabajo colaborativo en oficina moderna
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=85',
  // Código en pantalla — desarrollo profesional
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=85',
  // Diseño UI/UX en tablet — experiencia de usuario
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=85',
  // Análisis de datos / conversión / gráficos de negocio
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85',
  // Startup / emprendedor trabajando con laptop
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=85',
  // Diseño gráfico / branding creativo
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=85',
  // Responsive design — múltiples dispositivos
  'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=85',
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { lang, t } = useLanguage();

  const heroContent = lang === 'en' ? [
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=85',
      badge: 'Software Engineering',
      titleLine1: 'The easiest way to',
      titleEmphasis: 'contract or buy',
      titleLine2: 'your custom website',
      subtitle: 'High-performance digital infrastructure and strategic design. We develop custom software solutions to grow your brand.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?q=1920&q=85',
      badge: 'E-commerce & Business',
      titleLine1: 'Solutions to',
      titleEmphasis: 'sell and scale',
      titleLine2: 'your business online',
      subtitle: 'Self-manageable platforms with payment gateway integration, inventory control, and optimized conversion funnels.'
    },
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85',
      badge: 'SEO & Strategy',
      titleLine1: 'Invest in',
      titleEmphasis: 'digital authority',
      titleLine2: 'and SEO positioning',
      subtitle: 'We don\'t just deploy code; we position your brand on the first page of Google to capture qualified organic traffic.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=85',
      badge: 'Infrastructure & Security',
      titleLine1: 'Proactive',
      titleEmphasis: '24/7 technical',
      titleLine2: 'support & maintenance',
      subtitle: 'Security hardening, daily backups, and server monitoring. Your corporate infrastructure always online and protected.'
    }
  ] : [
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=85',
      badge: 'Ingeniería de Software',
      titleLine1: 'La mejor forma de',
      titleEmphasis: 'comprar y contratar',
      titleLine2: 'tu sitio a medida',
      subtitle: 'Infraestructura digital de alto rendimiento y diseño estratégico. Desarrollamos soluciones de software que garantizan el éxito de tu marca.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?w=1920&q=85',
      badge: 'E-commerce & Negocio',
      titleLine1: 'Soluciones para',
      titleEmphasis: 'vender y escalar',
      titleLine2: 'tu pyme en internet',
      subtitle: 'Plataformas autogestionables con integración de pagos, control de stock y embudos de conversión optimizados.'
    },
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85',
      badge: 'SEO & Estrategia Branding',
      titleLine1: 'Invierta hoy en',
      titleEmphasis: 'autoridad digital',
      titleLine2: 'y posicionamiento SEO',
      subtitle: 'No solo lanzamos código; posicionamos tu marca en los primeros puestos de Google para atraer tráfico orgánico calificado.'
    },
    {
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=85',
      badge: 'Infraestructura & Ciberseguridad',
      titleLine1: 'Mantenimiento y',
      titleEmphasis: 'soporte técnico',
      titleLine2: 'proactivo 24/7',
      subtitle: 'Hardening de seguridad, respaldos diarios y monitoreo de servidores. Tu infraestructura corporativa siempre online y segura.'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroContent.length);
  }, [heroContent.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentSlide = heroContent[currentIndex];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Carrusel de imágenes */}
      <div className="absolute inset-0">
        {heroContent.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={item.image}
              alt={item.titleEmphasis}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroContent.map((_, index) => (
          <div
            key={index}
            className={`h-3 transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-white/50 w-3'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full flex items-center">
        <div className="w-full max-w-5xl pl-4 sm:pl-12 lg:pl-24 xl:pl-48 pr-4">
          <div className="max-w-2xl pt-[3.5rem] sm:pt-[4.5rem] lg:pt-[5.5rem] pb-3 sm:pb-4">
            {/* Single Content Container with key for transition effect (optional) */}
            <div key={currentIndex} className="animate-in fade-in duration-700">
              {/* Badge */}
              <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-[0.55rem] py-[0.25rem] mb-2 sm:mb-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2 md:mr-3" />
                <span className="text-primary text-[0.7rem] sm:text-[0.85rem] font-medium tracking-wide">
                  {currentSlide.badge}
                </span>
              </div>

              {/* Título - Único H1 para toda la página */}
              <h1 className="text-[clamp(1.4rem,3.8vw,2.6rem)] font-bold text-white mb-2 sm:mb-3 leading-[1.08] text-left">
                {currentSlide.titleLine1}{' '}
                <span className="text-primary">{currentSlide.titleEmphasis}</span>{' '}
                {currentSlide.titleLine2}
              </h1>

              {/* Subtítulo */}
              <p className="text-[clamp(0.95rem,1.5vw,1.15rem)] text-white/80 mb-4 sm:mb-6 max-w-[34rem] text-left leading-relaxed">
                {currentSlide.subtitle}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-6">
                <Link
                  to="/paquetes"
                  className="bg-primary text-gray-900 font-bold px-[1.1rem] py-[0.6rem] sm:px-[1.4rem] sm:py-[0.8rem] hover:bg-white transition duration-300 flex items-center justify-center text-[0.95rem] sm:text-[1.05rem] uppercase tracking-wide group"
                >
                  {t('hero.cta.primary')}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/contacto"
                  className="border-2 border-white/40 text-white font-bold px-[1.1rem] py-[0.6rem] sm:px-[1.4rem] sm:py-[0.8rem] hover:bg-white hover:text-gray-900 transition duration-300 flex items-center justify-center text-[0.95rem] sm:text-[1.05rem] uppercase tracking-wide"
                >
                  {t('hero.cta.secondary')}
                </Link>
              </div>
            </div>


            {/* Common Info boxes (Left Aligned) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-3xl">
              <div className="bg-white/10 backdrop-blur-sm p-[0.45rem] sm:p-[0.6rem] border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <div className="bg-primary p-1 rounded-sm mr-2 text-gray-900">
                    <Code size={14} />
                  </div>
                  <span className="text-white font-bold text-[0.85rem] uppercase tracking-tighter">CRM / ERP</span>
                </div>
                <span className="text-white/60 text-[0.75rem] leading-tight">Integraciones avanzadas para tu negocio.</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-[0.45rem] sm:p-[0.6rem] border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <div className="bg-primary p-1 rounded-sm mr-2 text-gray-900">
                    <Zap size={14} />
                  </div>
                  <span className="text-white font-bold text-[0.85rem] uppercase tracking-tighter">Performance</span>
                </div>
                <span className="text-white/60 text-[0.75rem] leading-tight">Carga en milisegundos y código limpio.</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-[0.45rem] sm:p-[0.6rem] border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <div className="bg-primary p-1 rounded-sm mr-2 text-gray-900">
                    <TrendingUp size={14} />
                  </div>
                  <span className="text-white font-bold text-[0.85rem] uppercase tracking-tighter">SEO Pro</span>
                </div>
                <span className="text-white/60 text-[0.75rem] leading-tight">Posicionamiento real en Google Chile.</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-[0.45rem] sm:p-[0.6rem] border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <div className="bg-primary p-1 rounded-sm mr-2 text-gray-900">
                    <Clock size={14} />
                  </div>
                  <span className="text-white font-bold text-[0.85rem] uppercase tracking-tighter">24/7 Soporte</span>
                </div>
                <span className="text-white/60 text-[0.75rem] leading-tight">Tu empresa siempre online y bajo control.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
