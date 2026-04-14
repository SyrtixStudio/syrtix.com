import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { useLanguage } from '../../i18n/index.jsx';

function CtaSection() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          title: 'Your competition already has professional digital presence',
          description:
            'Every day without an optimized website, your business loses clients who go straight to the competition. Free quote in less than 24 hours.',
          packages: 'View packages',
          quote: 'Request free quote',
        }
      : {
          title: 'Tu competencia ya tiene presencia digital profesional',
          description:
            'Cada día sin una web optimizada, tu negocio pierde clientes que van directo a la competencia. Cotización gratuita en menos de 24 horas.',
          packages: 'Ver paquetes',
          quote: 'Solicitar cotización gratuita',
        };

  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 bg-base2">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy lado izquierdo */}
          <div data-aos="fade-right" className="border-l-4 border-primary pl-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-tight">
              {copy.title}
            </h2>
            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-lg">
              {copy.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/paquetes"
                className="bg-primary text-gray-800 font-bold px-7 py-3.5 hover:brightness-110 transition duration-300 flex items-center justify-center text-sm uppercase tracking-wide group"
              >
                {copy.packages}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contacto"
                className="border border-secondary text-secondary font-bold px-7 py-3.5 hover:bg-secondary hover:text-white transition duration-300 flex items-center justify-center text-sm uppercase tracking-wide"
              >
                {copy.quote}
              </Link>
            </div>
          </div>

          {/* Imagen lado derecho */}
          <div data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80"
              alt={lang === 'en' ? 'Business team planning digital strategy' : 'Equipo de negocio planificando estrategia digital'}
              className="w-full aspect-[4/3] object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
