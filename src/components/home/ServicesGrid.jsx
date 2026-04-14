import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { useLanguage } from '../../i18n/index.jsx';

const serviceImages = [
  'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&auto=format&fit=crop&q=80',
];

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
              title: 'SEO Tuning',
              description: 'Search optimization to improve your organic visibility on Google.',
              price: 'From $79.000 CLP/month',
            },
            {
              id: 'maintenance',
              title: 'Ongoing Maintenance',
              description: 'Security updates, daily backups, and continuous technical support.',
              price: 'From $49.000 CLP/month',
            },
            {
              id: 'custom',
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
              title: 'Posicionamiento SEO',
              description: 'Optimización para buscadores que mejora tu visibilidad orgánica en Google.',
              price: 'Desde $79.000/mes',
            },
            {
              id: 'maintenance',
              title: 'Mantenimiento continuo',
              description: 'Actualizaciones de seguridad, respaldos y soporte técnico constante.',
              price: 'Desde $49.000/mes',
            },
            {
              id: 'custom',
              title: 'Integraciones a medida',
              description: 'Conectamos tu página web con tu ERP, CRM o herramientas externas.',
              price: 'Cotización a medida',
            },
          ],
        };

  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 bg-base2">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {copy.sectionTitlePrefix}
            <span className="text-primary">{copy.sectionTitleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">{copy.sectionSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.services.map((service, idx) => (
            <Link
              to="/contacto"
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="block bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ textDecoration: 'none' }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={serviceImages[idx]}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <p className="text-primary font-bold text-sm mb-2">{service.price}</p>
                <span className="inline-flex items-center text-secondary font-semibold text-xs group-hover:text-primary transition-colors">
                  {copy.viewService} <ArrowRight size={14} className="ml-1" />
                </span>
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
