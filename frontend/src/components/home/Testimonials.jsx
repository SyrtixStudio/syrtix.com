import { useEffect, useMemo, useState } from 'react';

import { Star } from 'lucide-react';

import { useLanguage } from '../../i18n/index.jsx';

const testimonials = [
  {
    id: 1,
    name: 'Maria Gonzalez',
    company: 'Boutique Elena',
    textEs: 'Excelente trabajo. Mi tienda online aumento las ventas un 150% en el primer mes.',
    textEn: 'Excellent work. My online store increased sales by 150% in the first month.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Rodriguez',
    company: 'Consultora CR',
    textEs: 'Profesionales y rapidos. Entregaron antes de tiempo y el resultado supero mis expectativas.',
    textEn: 'Professional and fast. They delivered ahead of time and exceeded my expectations.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ana Martinez',
    company: 'Clinica Dental Sonrie',
    textEs: 'El mejor equipo con el que he trabajado. Soporte increible y Diseño impecable.',
    textEn: 'The best team I have worked with. Amazing support and flawless design.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Alan Iturra',
    company: 'Eat Burger',
    textEs: 'Grande chicos, solucionaron mi problema de años en semanas.',
    textEn: 'Great team, they solved a long-standing issue in just weeks.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Marcela Concha',
    company: 'Tech Solutions',
    textEs: 'Totalmente recomendables, indagaron a fondo y entregaron el producto que queria.',
    textEn: 'Highly recommended. They went deep and delivered exactly what I needed.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Antonio Vega',
    company: 'Innova Corp',
    textEs: 'Muy profesionales, Diseños modernos y funcionalidades excepcionales.',
    textEn: 'Very professional, modern designs and exceptional functionality.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Sebastian Mella',
    company: 'Startup XYZ',
    textEs:
      'Tengo 4 paginas e-commerce con ellos y todas funcionan excelente. Ellos mantienen mis sitios web.',
    textEn:
      'I have 4 e-commerce websites with them and all run perfectly. They also maintain my websites.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Alexis Rodriguez',
    company: 'Servicios Financieros AR',
    textEs: 'Valio cada peso invertido, superaron mis expectativas en Diseño y funcionalidad.',
    textEn: 'Worth every peso. They exceeded my expectations in design and functionality.',
    rating: 5,
  },
  {
    id: 9,
    name: 'Cristian Castro',
    company: 'Barber Shop CC',
    textEs:
      'No sabia como ordenar mis reservas hasta que este equipo me ayudo a crear mi web con reservas integradas.',
    textEn:
      'I did not know how to organize my bookings until this team helped me build my website with integrated booking.',
    rating: 5,
  },
];

function Testimonials() {
  const { lang } = useLanguage();
  const [groupSize, setGroupSize] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'What our ',
          titleHighlight: 'clients',
          titleSuffix: ' say',
          prev: 'Previous',
          next: 'Next',
          goToGroup: 'Go to group',
        }
      : {
          titlePrefix: 'Lo que dicen nuestros ',
          titleHighlight: 'clientes',
          titleSuffix: '',
          prev: 'Anterior',
          next: 'Siguiente',
          goToGroup: 'Ir al grupo',
        };

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
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleHighlight}</span>
            {copy.titleSuffix}
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
                <p className="text-white/90 text-sm mb-4 italic">
                  &quot;{lang === 'en' ? testimonial.textEn : testimonial.textEs}&quot;
                </p>
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
                  aria-label={copy.prev}
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
                      aria-label={`${copy.goToGroup} ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  className="h-9 w-9 border border-white/30 text-white hover:border-primary hover:text-primary transition"
                  aria-label={copy.next}
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
