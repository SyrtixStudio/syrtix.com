import { Link } from 'react-router-dom';

import { ArrowRight, Check, X } from 'lucide-react';

import { getIcon } from './IconResolver';
import { useLanguage } from '../../i18n/index.jsx';

function PricingSection() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'Packages and ',
          titleHighlight: 'Pricing',
          subtitle:
            'Choose the perfect plan for your business. All plans include professional design and technical support.',
          helper:
            'Our packages are more complete than standalone services: planning, design, development, launch, and initial support to convert visitors into customers.',
          growthTip: 'Want ongoing growth? We recommend a monthly maintenance plan.',
          viewDetails: 'View full package details',
          packages: [
            {
              id: 'persona-pyme',
              name: 'Personal - SMB',
              icon: 'Zap',
              description: 'Ideal for entrepreneurs and small businesses.',
              priceLabel: '$299.990',
              paymentType: 'one-time payment',
              featured: false,
              features: [
                { text: 'Custom design', included: true },
                { text: 'Up to 5 pages', included: true },
                { text: 'Responsive', included: true },
                { text: 'Contact form', included: true },
                { text: 'Free SSL', included: true },
                { text: 'Hosting for 1 year', included: true },
                { text: 'Domain included', included: false },
                { text: 'Integrated blog', included: false },
                { text: 'E-commerce', included: false },
              ],
              ctaText: 'Start now',
              ctaLink: '/contacto',
            },
            {
              id: 'pyme-ecommerce',
              name: 'SMB - Ecommerce',
              icon: 'Star',
              description: 'For growing businesses that want to stand out.',
              priceLabel: '$599.990',
              paymentType: 'one-time payment',
              featured: true,
              badge: 'MOST POPULAR',
              features: [
                { text: 'Custom design', included: true },
                { text: 'Up to 10 pages', included: true },
                { text: 'Responsive', included: true },
                { text: 'Contact form', included: true },
                { text: 'Free SSL', included: true },
                { text: 'Hosting for 1 year', included: true },
                { text: 'Domain included', included: true },
                { text: 'Integrated blog', included: true },
                { text: 'Basic e-commerce', included: true },
              ],
              ctaText: 'Choose Pro',
              ctaLink: '/contacto',
            },
            {
              id: 'empresa',
              name: 'Enterprise',
              icon: 'Crown',
              description: 'Complete solution for maximum performance.',
              priceLabel: '$999.990',
              paymentType: 'one-time payment',
              featured: false,
              features: [
                { text: 'Premium design', included: true },
                { text: 'Unlimited pages', included: true },
                { text: 'Responsive', included: true },
                { text: 'Advanced forms', included: true },
                { text: 'Free SSL', included: true },
                { text: 'Hosting for 2 years', included: true },
                { text: 'Domain included', included: true },
                { text: 'Integrated blog', included: true },
                { text: 'Full e-commerce', included: true },
                { text: 'Advanced SEO', included: true },
                { text: '24/7 support', included: true },
              ],
              ctaText: 'Choose Premium',
              ctaLink: '/contacto',
            },
          ],
        }
      : {
          titlePrefix: 'Paquetes y ',
          titleHighlight: 'Precios',
          subtitle:
            'Elige el plan perfecto para tu negocio. Todos incluyen diseno profesional y soporte tecnico.',
          helper:
            'Nuestros paquetes son soluciones mas completas que los servicios a la carta: incluyen planificacion, diseno, desarrollo, publicacion y acompanamiento inicial para que tu sitio convierta visitantes en clientes.',
          growthTip: 'Quieres crecimiento continuo? Recomendamos un plan mensual de mantenimiento.',
          viewDetails: 'Ver todos los detalles de cada paquete',
          packages: [
            {
              id: 'persona-pyme',
              name: 'Persona - Pyme',
              icon: 'Zap',
              description: 'Ideal para emprendedores y pequenos negocios.',
              priceLabel: '$299.990',
              paymentType: 'pago unico',
              featured: false,
              features: [
                { text: 'Diseno personalizado', included: true },
                { text: 'Hasta 5 paginas', included: true },
                { text: 'Responsive', included: true },
                { text: 'Formulario de contacto', included: true },
                { text: 'SSL gratuito', included: true },
                { text: 'Hosting 1 ano', included: true },
                { text: 'Dominio incluido', included: false },
                { text: 'Blog integrado', included: false },
                { text: 'E-commerce', included: false },
              ],
              ctaText: 'Comenzar',
              ctaLink: '/contacto',
            },
            {
              id: 'pyme-ecommerce',
              name: 'Pyme - Ecommerce',
              icon: 'Star',
              description: 'Para negocios en crecimiento que buscan destacar.',
              priceLabel: '$599.990',
              paymentType: 'pago unico',
              featured: true,
              badge: 'MAS POPULAR',
              features: [
                { text: 'Diseno personalizado', included: true },
                { text: 'Hasta 10 paginas', included: true },
                { text: 'Responsive', included: true },
                { text: 'Formulario de contacto', included: true },
                { text: 'SSL gratuito', included: true },
                { text: 'Hosting 1 ano', included: true },
                { text: 'Dominio incluido', included: true },
                { text: 'Blog integrado', included: true },
                { text: 'E-commerce basico', included: true },
              ],
              ctaText: 'Elegir Pro',
              ctaLink: '/contacto',
            },
            {
              id: 'empresa',
              name: 'Empresa',
              icon: 'Crown',
              description: 'Solucion completa para maximo rendimiento.',
              priceLabel: '$999.990',
              paymentType: 'pago unico',
              featured: false,
              features: [
                { text: 'Diseno premium', included: true },
                { text: 'Paginas ilimitadas', included: true },
                { text: 'Responsive', included: true },
                { text: 'Formularios avanzados', included: true },
                { text: 'SSL gratuito', included: true },
                { text: 'Hosting 2 anos', included: true },
                { text: 'Dominio incluido', included: true },
                { text: 'Blog integrado', included: true },
                { text: 'E-commerce completo', included: true },
                { text: 'SEO avanzado', included: true },
                { text: 'Soporte 24/7', included: true },
              ],
              ctaText: 'Elegir Premium',
              ctaLink: '/contacto',
            },
          ],
        };

  return (
    <section className="py-16 px-4 sm:px-6 bg-base2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-900 text-gray-900 max-w-2xl mx-auto">{copy.subtitle}</p>
          <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto mt-2">{copy.helper}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {copy.packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className={`relative bg-base border-2 p-6 transition-all duration-300 hover:border-primary hover:shadow-lg ${
                pkg.featured ? 'border-secondary' : 'border-gray-200'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white text-xs font-bold px-4 py-1">{pkg.badge}</span>
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-4 ${
                    pkg.featured ? 'bg-secondary text-white' : 'bg-primary text-gray-900'
                  }`}
                >
                  {getIcon(pkg.icon, 32)}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">{pkg.priceLabel}</div>
                <div className="text-sm text-gray-500">{pkg.paymentType}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center text-sm">
                    {feature.included ? (
                      <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                    ) : (
                      <X size={18} className="text-gray-300 mr-2 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={pkg.ctaLink}
                className={`w-full flex items-center justify-center py-3 font-bold text-sm transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-secondary text-white hover:bg-blue-900'
                    : 'bg-primary text-gray-900 hover:bg-amber-600'
                }`}
              >
                {pkg.ctaText} <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8" data-aos="fade-up">
          <p className="text-xs sm:text-sm text-gray-600 mb-3">{copy.growthTip}</p>
          <Link
            to="/paquetes"
            className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors"
          >
            {copy.viewDetails}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
