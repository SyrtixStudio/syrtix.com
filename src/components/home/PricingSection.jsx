import { Link } from 'react-router-dom';

import { ArrowRight, Check, X } from 'lucide-react';

import { getIcon } from './IconResolver';

const packages = [
  {
    id: 'Persona-Pyme',
    name: 'Persona - Pyme',
    icon: 'Zap',
    description: 'Ideal para emprendedores y pequeños negocios.',
    price: 299000,
    priceLabel: '$299.000',
    paymentType: 'pago único',
    featured: false,
    features: [
      { text: 'Diseño personalizado', included: true },
      { text: 'Hasta 5 páginas', included: true },
      { text: 'Responsive', included: true },
      { text: 'Formulario de contacto', included: true },
      { text: 'SSL gratuito', included: true },
      { text: 'Hosting 1 año', included: true },
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
    price: 599000,
    priceLabel: '$599.000',
    paymentType: 'pago único',
    featured: true,
    badge: 'MÁS POPULAR',
    features: [
      { text: 'Diseño personalizado', included: true },
      { text: 'Hasta 10 páginas', included: true },
      { text: 'Responsive', included: true },
      { text: 'Formulario de contacto', included: true },
      { text: 'SSL gratuito', included: true },
      { text: 'Hosting 1 año', included: true },
      { text: 'Dominio incluido', included: true },
      { text: 'Blog integrado', included: true },
      { text: 'E-commerce básico', included: true },
    ],
    ctaText: 'Elegir Pro',
    ctaLink: '/contacto',
  },
  {
    id: 'Empresa',
    name: 'Empresa',
    icon: 'Crown',
    description: 'Solución completa para máximo rendimiento.',
    price: 999000,
    priceLabel: '$999.000',
    paymentType: 'pago único',
    featured: false,
    features: [
      { text: 'Diseño premium', included: true },
      { text: 'Páginas ilimitadas', included: true },
      { text: 'Responsive', included: true },
      { text: 'Formularios avanzados', included: true },
      { text: 'SSL gratuito', included: true },
      { text: 'Hosting 2 años', included: true },
      { text: 'Dominio incluido', included: true },
      { text: 'Blog integrado', included: true },
      { text: 'E-commerce completo', included: true },
      { text: 'SEO avanzado', included: true },
      { text: 'Soporte 24/7', included: true },
    ],
    ctaText: 'Elegir Premium',
    ctaLink: '/contacto',
  },
];

function PricingSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-base2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Paquetes y <span className="text-primary">Precios</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-900 text-gray-900 max-w-2xl mx-auto">
            Elige el plan perfecto para tu negocio. Todos incluyen diseño profesional y soporte
            técnico.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto mt-2">
            Nuestros paquetes son soluciones más completas que los servicios a la carta: incluyen
            planificación, diseño, desarrollo, publicación y acompañamiento inicial para que tu
            sitio salga listo para convertir visitantes en clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, idx) => (
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
                  <span className="bg-secondary text-white text-xs font-bold px-4 py-1">
                    {pkg.badge}
                  </span>
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
          <p className="text-xs sm:text-sm text-gray-600 mb-3">
            ¿Quieres crecimiento continuo? Recomendamos un plan mensual de mantenimiento.
          </p>
          <Link
            to="/paquetes"
            className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors"
          >
            Ver todos los detalles de cada paquete
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default PricingSection;
