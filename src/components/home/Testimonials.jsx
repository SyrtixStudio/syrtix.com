import { useEffect, useMemo, useState } from 'react';

import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    company: 'Boutique Elena',
    text: 'Excelente trabajo. Mi tienda online aumentó las ventas un 150% en el primer mes.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    company: 'Consultora CR',
    text: 'Profesionales y rápidos. Entregaron antes de tiempo y el resultado superó mis expectativas.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Martínez',
    company: 'Clínica Dental Sonríe',
    text: 'El mejor equipo con el que he trabajado. Soporte increíble y diseño impecable.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Alan Iturra',
    company: 'Eat burger',
    text: 'Grande chicos! solucionaron mi problema de años en semanas.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Marcela Concha',
    company: 'Tech Solutions',
    text: 'Totalmente recomendables, indagaron a fondo y entregaron el producto que quería.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Antonio Vega',
    company: 'Innova Corp',
    text: 'Muy muy profesionales, diseños modernos y funcionalidades excepcionales. Ellos saben lo que hacen',
    rating: 5,
  },
  {
    id: 7,
    name: 'Sebastian Mella',
    company: 'Startup XYZ',
    text: '4 paginas e-commerce con ellos todas fluyen de maravilla. ellos hacen el manteniemiento de mis sitios web.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Alexis Rodríguez',
    company: 'Servicios Financieros AR',
    text: 'Valió cada peso invertido, superaron mis expectativas en diseño y funcionalidad.',
    rating: 5,
  },
  {
    id: 9,
    name: 'Cristian Castro',
    company: 'Barber Shop CC',
    text: 'No sabía cómo tener en orden mis reservas hasta que este equipo me ayudaron a crear mi sitio web con sistema de reservas integrado. Vale la pena 100%',
    rating: 5,
  },
];

function Testimonials() {
  const [groupSize, setGroupSize] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateGroupSize = () => setGroupSize(mediaQuery.matches ? 3 : 1);
    updateGroupSize();
    mediaQuery.addEventListener('change', updateGroupSize);
    return () => mediaQuery.removeEventListener('change', updateGroupSize);
  }, []);

  const groups = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < testimonials.length; i += groupSize) {
      chunks.push(testimonials.slice(i, i + groupSize));
    }
    return chunks;
  }, [groupSize]);

  useEffect(() => {
    if (groups.length <= 1) return undefined;
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % groups.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [groups.length]);

  useEffect(() => {
    if (activeIndex >= groups.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, groups.length]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + groups.length) % groups.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % groups.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groups[activeIndex]?.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
                className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:border-primary transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-current" />
                  ))}
                </div>
                <p className="text-white/90 text-sm mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="text-white font-bold text-sm">{testimonial.name}</p>
                  <p className="text-white/60 text-xs">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          {groups.length > 1 && (
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  className="h-9 w-9 border border-white/30 text-white hover:border-primary hover:text-primary transition"
                  aria-label="Anterior"
                >
                  ‹
                </button>
                <div className="flex items-center gap-2">
                  {groups.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 w-2.5  transition ${
                        idx === activeIndex ? 'bg-primary' : 'bg-white/30'
                      }`}
                      aria-label={`Ir al grupo ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  className="h-9 w-9 border border-white/30 text-white hover:border-primary hover:text-primary transition"
                  aria-label="Siguiente"
                >
                  ›
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
