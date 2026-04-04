import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { getIcon } from './IconResolver';
import { useLanguage } from '../../i18n/index.jsx';

function ServicesGrid() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          sectionTitlePrefix: 'Additional ',
          sectionTitleHighlight: 'add-ons',
          sectionSubtitle:
            'Enhance your website post-launch with our ongoing growth services.',
          pricingDisclaimer:
            '* Monthly recurring services. Prices may vary depending on the scope.',
          whatsappDisclaimer:
            '* Contact us via WhatsApp to quote your specific needs.',
          viewService: 'Learn more',
          services: [
            {
              id: 'seo',
              icon: 'Search',
              title: 'SEO Tuning',
              description: 'Search optimization to improve your organic visibility on Google.',
              price: 'From $79.000 CLP/month',
            },
            {
              id: 'maintenance',
              icon: 'Settings',
              title: 'Ongoing Maintenance',
              description: 'Security updates, daily backups, and continuous technical support.',
              price: 'From $49.000 CLP/month',
            },
            {
              id: 'custom',
              icon: 'Code',
              title: 'Custom Integrations',
              description: 'Connect your website with your ERP, CRM, or external tools.',
              price: 'Custom Quote',
            },
          ],
        }
      : {
          sectionTitlePrefix: 'Complementos ',
          sectionTitleHighlight: 'adicionales',
          sectionSubtitle:
            'Potencia tu sitio web después del lanzamiento con nuestros servicios de crecimiento continuo.',
          pricingDisclaimer:
            '* Servicios de cobro mensual recurrente. Los precios pueden variar según el alcance.',
          whatsappDisclaimer:
            '* Contáctanos por WhatsApp para cotizar según tu necesidad.',
          viewService: 'Saber más',
          services: [
            {
              id: 'seo',
              icon: 'Search',
              title: 'Posicionamiento SEO',
              description: 'Optimización para buscadores que mejora tu visibilidad orgánica en Google.',
              price: 'Desde $79.000/mes',
            },
            {
              id: 'maintenance',
              icon: 'Settings',
              title: 'Mantenimiento continuo',
              description: 'Actualizaciones de seguridad, respaldos y soporte técnico constante.',
              price: 'Desde $49.000/mes',
            },
            {
              id: 'custom',
              icon: 'Code',
              title: 'Integraciones a medida',
              description: 'Conectamos tu página web con tu ERP, CRM o herramientas externas.',
              price: 'Cotización a medida',
            },
          ],
        };

  return (
    <section className="py-16 px-4 sm:px-6 bg-base2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {copy.sectionTitlePrefix}
            <span className="text-primary">{copy.sectionTitleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.services.map((service, idx) => (
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
                  <h3 className="text-base font-bold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <p className="text-primary font-bold text-sm mb-2">{service.price}</p>
                  <span className="inline-flex items-center text-secondary font-semibold text-xs hover:text-primary">
                    {copy.viewService} <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs sm:text-sm text-gray-600 text-center max-w-4xl mx-auto">
          {copy.pricingDisclaimer}
        </p>
        <p className="mt-2 text-xs sm:text-sm text-secondary text-center max-w-4xl mx-auto font-medium">
          {copy.whatsappDisclaimer}
        </p>

      </div>
    </section>
  );
}

export default ServicesGrid;
