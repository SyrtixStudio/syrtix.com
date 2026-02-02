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
];

function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
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
      </div>
    </section>
  );
}

export default Testimonials;
