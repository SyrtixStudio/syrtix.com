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
  const { t } = useLanguage();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Carrusel de imágenes */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`${t('hero.carousel.alt')} ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
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
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-6 lg:px-36">
          <div className="max-w-xl pt-[3.5rem] sm:pt-[4.5rem] lg:pt-[5.5rem] pb-3 sm:pb-4">
            {/* Badge */}
            <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-[0.55rem] py-[0.25rem] mb-2 sm:mb-3">
              <Zap size={16} className="text-primary mr-2" />
              <span className="text-primary text-[0.7rem] sm:text-[0.85rem] font-medium">
                {t('hero.badge')}
              </span>
            </div>

            {/* Título */}
            <h1 className="text-[clamp(1.3rem,3.5vw,2.3rem)] font-bold text-white mb-2 sm:mb-3 leading-[1.08]">
              {t('hero.title.line1')}
              {' '}
              <span className="text-primary">{t('hero.title.emphasis')}</span>{' '}
              {t('hero.title.line2')}
            </h1>

            {/* Subtítulo */}
            <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] text-white/80 mb-3 sm:mb-4 max-w-[32rem]">
              {t('hero.subtitle')}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Link
                to="/paquetes"
                className="bg-primary text-gray-900 font-bold px-[0.9rem] py-[0.55rem] sm:px-[1.2rem] sm:py-[0.7rem] hover:bg-secondary transition duration-300 flex items-center justify-center text-[0.9rem] sm:text-[0.98rem]"
              >
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contacto"
                className="border-2 border-white text-white font-bold px-[0.9rem] py-[0.55rem] sm:px-[1.2rem] sm:py-[0.7rem] hover:bg-white hover:text-gray-900 transition duration-300 flex items-center justify-center text-[0.9rem] sm:text-[0.98rem]"
              >
                {t('hero.cta.secondary')}
              </Link>
            </div>

            {/* Info boxes */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2">
              <div className="bg-white/10 backdrop-blur-sm p-[0.45rem] sm:p-[0.6rem] border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <Zap size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-[0.95rem]">{t('hero.info.ai.title')}</span>
                </div>
                <span className="text-white/60 text-[0.85rem]">{t('hero.info.ai.desc')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-[0.45rem] sm:p-[0.6rem] border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <TrendingUp size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-[0.95rem]">
                    {t('hero.info.conversion.title')}
                  </span>
                </div>
                <span className="text-white/60 text-[0.85rem]">{t('hero.info.conversion.desc')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-[0.45rem] sm:p-[0.6rem] border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <Clock size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-[0.95rem]">
                    {t('hero.info.support.title')}
                  </span>
                </div>
                <span className="text-white/60 text-[0.85rem]">{t('hero.info.support.desc')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-[0.45rem] sm:p-[0.6rem] border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <Code size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-[0.95rem]">{t('hero.info.code.title')}</span>
                </div>
                <span className="text-white/60 text-[0.85rem]">{t('hero.info.code.desc')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
