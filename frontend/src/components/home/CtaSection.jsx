import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { useLanguage } from '../../i18n/index.jsx';

function CtaSection() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          title: 'Ready to take your business to the next level?',
          description:
            'Contact us today and get a free quote for your project. No commitments, no hidden fees.',
          packages: 'View packages',
          quote: 'Request quote',
        }
      : {
          title: 'Listo para llevar tu negocio al siguiente nivel?',
          description:
            'Contactaños hoy y recibe una cotizacion gratuita para tu proyecto. Sin compromisos, sin costos ocultos.',
          packages: 'Ver paquetes',
          quote: 'Solicitar cotizacion',
        };

  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{copy.title}</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">{copy.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/paquetes"
            className="bg-primary text-gray-900 font-bold px-8 py-4 hover:bg-amber-500 transition duration-300 flex items-center justify-center"
          >
            {copy.packages}
            <ArrowRight size={20} className="ml-2" />
          </Link>
          <Link
            to="/contacto"
            className="border-2 border-secondary text-secondary font-bold px-8 py-4 hover:bg-secondary hover:text-white transition duration-300 flex items-center justify-center"
          >
            {copy.quote}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
