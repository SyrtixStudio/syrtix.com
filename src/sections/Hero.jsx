import { useState, useEffect, useCallback } from 'react';

import { Link } from 'react-router-dom';

import { ChevronLeft, ChevronRight, ArrowRight, Zap, TrendingUp, Clock, Code } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&q=80',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1920&q=80',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&q=80',
  'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80',
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
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
              alt={`Desarrollo web ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
          </div>
        ))}
      </div>

      {/* Controles del carrusel */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-primary p-3 transition duration-300 group"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={24} className="text-white group-hover:text-gray-900" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-primary p-3 transition duration-300 group"
        aria-label="Imagen siguiente"
      >
        <ChevronRight size={24} className="text-white group-hover:text-gray-900" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-14">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
              <Zap size={16} className="text-primary mr-2" />
              <span className="text-primary text-xs sm:text-sm font-medium">
                Desarrollo web con inteligencia artificial
              </span>
            </div>

            {/* Título */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Creamos sitios web que
              <br />
              <span className="text-primary">convierten visitantes</span>
              <br />
              en clientes
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8">
              Agencia de desarrollo web premium. Diseño elegante, tecnología moderna y resultados
              medibles para hacer crecer tu negocio.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/paquetes"
                className="bg-primary text-gray-900 font-bold px-8 py-4 hover:bg-secondary transition duration-300 flex items-center justify-center text-sm sm:text-base"
              >
                Ver paquetes y precios
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contacto"
                className="border-2 border-white text-white font-bold px-8 py-4 hover:bg-white hover:text-gray-900 transition duration-300 flex items-center justify-center text-sm sm:text-base"
              >
                Solicitar cotización
              </Link>
            </div>

            {/* Info boxes */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-white/10 backdrop-blur-sm p-4 border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <Zap size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-sm">IA Integrada</span>
                </div>
                <span className="text-white/60 text-xs">Desarrollo rápido</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <TrendingUp size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-sm">Alta conversión</span>
                </div>
                <span className="text-white/60 text-xs">Diseño orientado a ventas</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <Clock size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-sm">Soporte 24/7</span>
                </div>
                <span className="text-white/60 text-xs">Siempre disponibles</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 border-l-4 border-primary">
                <div className="flex items-center mb-1">
                  <Code size={18} className="text-primary mr-2" />
                  <span className="text-white font-bold text-sm">Código limpio</span>
                </div>
                <span className="text-white/60 text-xs">Tecnología moderna</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
