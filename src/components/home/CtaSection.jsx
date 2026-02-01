import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

function CtaSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Contáctanos hoy y recibe una cotización gratuita para tu proyecto. Sin compromisos, sin
          costos ocultos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/paquetes"
            className="bg-primary text-gray-900 font-bold px-8 py-4 hover:bg-amber-500 transition duration-300 flex items-center justify-center"
          >
            Ver paquetes
            <ArrowRight size={20} className="ml-2" />
          </Link>
          <Link
            to="/contacto"
            className="border-2 border-secondary text-secondary font-bold px-8 py-4 hover:bg-secondary hover:text-white transition duration-300 flex items-center justify-center"
          >
            Solicitar cotización
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
