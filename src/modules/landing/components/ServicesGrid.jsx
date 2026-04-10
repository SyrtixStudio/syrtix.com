import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../../i18n/index.jsx';
import { landingData } from '../landing.data.js'; // Nuestra nueva "Modular Data"

// Helper para iconos (lo mantenemos o lo movemos al core después)
import { getIcon } from '../../../components/home/IconResolver';

function ServicesGrid() {
  const { lang } = useLanguage();
  const t = landingData.services[lang] || landingData.services.es;

  return (
    <section className="py-16 px-4 sm:px-6 bg-base2">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {t.titlePrefix}
            <span className="text-primary">{t.titleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((service, idx) => (
            <Link
              to="/contacto"
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="block bg-base p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ textDecoration: 'none' }}
            >
              <div className="flex items-start">
                <div className="bg-secondary/10 p-3 mr-4">
                  <div className="text-secondary">{getIcon(service.icon)}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-800 mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <p className="text-primary font-bold text-sm mb-2">{service.price}</p>
                  <span className="inline-flex items-center text-secondary font-semibold text-xs hover:text-primary">
                    {t.viewLink} <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs sm:text-sm text-gray-600 text-center max-w-4xl mx-auto">
          {t.pricingDisclaimer}
        </p>
        <p className="mt-2 text-xs sm:text-sm text-secondary text-center max-w-4xl mx-auto font-medium">
          {t.whatsappDisclaimer}
        </p>
      </div>
    </section>
  );
}

export default ServicesGrid;
