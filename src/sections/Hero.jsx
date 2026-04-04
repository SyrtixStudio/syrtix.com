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
      badge: 'Professional Web Development with AI',
      titleLine1: 'Expert',
      titleEmphasis: 'design & development',
      titleLine2: 'for your website',
      subtitle: 'From strategy and branding to high-performance code. We build custom websites tailored to your business goals.'
    },
    {
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1920&q=85',
      badge: 'Strategic Digital Solutions',
      titleLine1: 'High-end',
      titleEmphasis: 'custom websites',
      titleLine2: 'built to scale',
      subtitle: 'We don\'t just sell websites, we engineer the digital authority and visibility your brand deserves.'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85',
      badge: '24/7 Support & Maintenance',
      titleLine1: 'Scalable and',
      titleEmphasis: 'optimized',
      titleLine2: 'infrastructure',
      subtitle: 'Clean code and modern technology to ensure your digital presence reaches the entire world.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504868584819-f8e90ece2cd3?w=1920&q=85',
      badge: 'Engineering vs. Templates',
      titleLine1: 'Stop using',
      titleEmphasis: 'slow templates',
      titleLine2: 'Choose engineering',
      subtitle: 'Don\'t settle for slow 20MB WordPress sites. At Syrtix we build high-performance code that never breaks.'
    }
  ] : [
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=85',
      badge: 'Desarrollo Web Profesional con IA',
      titleLine1: 'Expertos en',
      titleEmphasis: 'diseño y desarrollo',
      titleLine2: 'de sitios a medida',
      subtitle: 'De la estrategia al código de alto rendimiento. Construimos sitios web personalizados que garantizan el crecimiento de tu marca.'
    },
    {
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1920&q=85',
      badge: 'Soluciones Digitales Estratégicas',
      titleLine1: 'Sitios web',
      titleEmphasis: 'de alto impacto',
      titleLine2: 'para tu negocio',
      subtitle: 'En Syrtix no solo vendemos webs, desarrollamos la identidad y el futuro digital que tu marca merece.'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85',
      badge: 'Soporte y Mantenimiento 24/7',
      titleLine1: 'Infraestructura',
      titleEmphasis: 'escalable y',
      titleLine2: 'optimizada',
      subtitle: 'Código limpio y tecnología moderna para asegurar que tu presencia digital llegue a todo el mundo.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504868584819-f8e90ece2cd3?w=1920&q=85',
      badge: 'Ingeniería vs Plantillas',
      titleLine1: '¿Webs de',
      titleEmphasis: 'usar y tirar?',
      titleLine2: 'Elige Ingeniería',
      subtitle: 'No te conformes con plantillas lentas de 20MB. En Syrtix vendemos ingeniería: webs que vuelan y no se rompen.'
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
                <Zap size={16} className="text-primary mr-2" />
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
                  <Zap size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-[0.95rem] uppercase">{t('hero.info.ai.title')}</span>
                </div>
                <span className="text-white/60 text-[0.85rem] leading-tight">{t('hero.info.ai.desc')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-[0.45rem] sm:p-[0.6rem] border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <TrendingUp size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-[0.95rem] uppercase">{t('hero.info.conversion.title')}</span>
                </div>
                <span className="text-white/60 text-[0.85rem] leading-tight">{t('hero.info.conversion.desc')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-[0.45rem] sm:p-[0.6rem] border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <Clock size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-[0.95rem] uppercase">{t('hero.info.support.title')}</span>
                </div>
                <span className="text-white/60 text-[0.85rem] leading-tight">{t('hero.info.support.desc')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-[0.45rem] sm:p-[0.6rem] border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <Code size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-[0.95rem] uppercase">{t('hero.info.code.title')}</span>
                </div>
                <span className="text-white/60 text-[0.85rem] leading-tight">{t('hero.info.code.desc')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
