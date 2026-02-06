import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Check, X, Zap, Star, Crown, ArrowRight } from 'lucide-react';

function Packages() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const packages = [
    {
      name: 'Persona - Pyme',
      icon: <Zap size={32} />,
      description: 'Ideal para emprendedores y pequeños negocios que necesitan presencia online.',
      priceMonthly: 299000,
      priceYearly: 2990000,
      popular: false,
      features: [
        { name: 'Diseño personalizado', included: true },
        { name: 'Hasta 5 páginas', included: true },
        { name: 'Responsive (móvil y tablet)', included: true },
        { name: 'Formulario de contacto', included: true },
        { name: 'Integración redes sociales', included: true },
        { name: 'SSL gratuito', included: true },
        { name: 'Hosting 1 año incluido', included: true },
        { name: 'Dominio .cl o .com', included: false },
        { name: 'Blog integrado', included: false },
        { name: 'E-commerce', included: false },
        { name: 'SEO avanzado', included: false },
        { name: 'Soporte prioritario', included: false },
      ],
      cta: 'Comenzar',
      color: 'primary',
    },
    {
      name: 'Pyme - Ecommerce',
      icon: <Star size={32} />,
      description: 'Para negocios en crecimiento que buscan destacar y convertir más clientes.',
      priceMonthly: 599000,
      priceYearly: 5990000,
      popular: true,
      features: [
        { name: 'Diseño personalizado', included: true },
        { name: 'Hasta 10 páginas', included: true },
        { name: 'Responsive (móvil y tablet)', included: true },
        { name: 'Formulario de contacto', included: true },
        { name: 'Integración redes sociales', included: true },
        { name: 'SSL gratuito', included: true },
        { name: 'Hosting 1 año incluido', included: true },
        { name: 'Dominio .cl incluido', included: true },
        { name: 'Blog integrado', included: true },
        { name: 'E-commerce básico', included: true },
        { name: 'SEO avanzado', included: false },
        { name: 'Soporte prioritario', included: false },
      ],
      cta: 'Elegir Pro',
      color: 'secondary',
    },
    {
      name: 'Empresa',
      icon: <Crown size={32} />,
      description: 'Solución completa para empresas que buscan máximo rendimiento y conversión.',
      priceMonthly: 999000,
      priceYearly: 9990000,
      popular: false,
      features: [
        { name: 'Diseño personalizado premium', included: true },
        { name: 'Páginas ilimitadas', included: true },
        { name: 'Responsive (móvil y tablet)', included: true },
        { name: 'Formularios avanzados', included: true },
        { name: 'Integración redes sociales', included: true },
        { name: 'SSL gratuito', included: true },
        { name: 'Hosting 2 años incluido', included: true },
        { name: 'Dominio .cl incluido', included: true },
        { name: 'Blog integrado', included: true },
        { name: 'E-commerce completo', included: true },
        { name: 'SEO avanzado + Analytics', included: true },
        { name: 'Soporte prioritario 24/7', included: true },
      ],
      cta: 'Elegir Premium',
      color: 'primary',
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <main className="min-h-screen bg-base">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900 mt-20 lg:mt-28">
        <div className="absolute inset-0">
          <img
            src="/img/img-paquetes.avif"
            alt="Fondo precios syrtix"
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
            <Zap size={16} className="text-primary mr-2" />
            <span className="text-primary text-xs sm:text-sm font-medium">Paquetes y precios</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Paquetes y <span className="text-primary">Precios</span>
          </h1>
          <p className="text-gray-300 sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Elige el plan perfecto para tu negocio. Todos incluyen diseño profesional, soporte
            técnico y las mejores tecnologías del mercado.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 p-8">
        {/* Toggle Mensual/Anual */}
        <div className="flex justify-center mb-12">
          <div className="bg-base2 p-1 rounded-none inline-flex">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-primary text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Pago único
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-primary text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Con mantenimiento anual
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-base border-2 ${
                pkg.popular ? 'border-secondary' : 'border-gray-200'
              } p-6 transition-all duration-300 hover:border-primary hover:shadow-lg`}
            >
              {/* Badge Popular */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white text-xs font-bold px-4 py-1">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Icon & Name */}
              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-4 ${
                    pkg.popular ? 'bg-secondary text-white' : 'bg-primary text-gray-900'
                  }`}
                >
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {formatPrice(billingCycle === 'monthly' ? pkg.priceMonthly : pkg.priceYearly)}
                </div>
                <div className="text-sm text-gray-500">
                  {billingCycle === 'monthly' ? 'pago único' : 'incluye mantenimiento anual'}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    {feature.included ? (
                      <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                    ) : (
                      <X size={18} className="text-gray-300 mr-2 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/contacto"
                className={`w-full flex items-center justify-center py-3 font-bold text-sm transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-secondary text-white hover:bg-blue-900'
                    : 'bg-primary text-gray-900 hover:bg-amber-600'
                }`}
              >
                {pkg.cta}
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-transparent shadow shadow-md shadow-gray-300 p-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              ¿Necesitas algo más personalizado?
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Cada proyecto es único. Si tienes requerimientos especiales o necesitas
              funcionalidades adicionales, contáctanos para una cotización a medida.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center bg-secondary text-white font-bold px-6 py-3 hover:bg-blue-900 transition-all duration-300"
            >
              Solicitar cotización personalizada
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>

        {/* FAQ or Guarantees */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="text-3xl mb-3">💯</div>
            <h4 className="font-bold text-gray-900 mb-2">Garantía de satisfacción</h4>
            <p className="text-sm text-gray-600">
              Si no estás conforme con el resultado, trabajamos hasta que lo estés.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-3">🚀</div>
            <h4 className="font-bold text-gray-900 mb-2">Entrega rápida</h4>
            <p className="text-sm text-gray-600">
              Tu sitio web listo en tiempo récord gracias a nuestra tecnología con IA.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="text-3xl mb-3">🛡️</div>
            <h4 className="font-bold text-gray-900 mb-2">Soporte incluido</h4>
            <p className="text-sm text-gray-600">
              Todos los planes incluyen soporte técnico para resolver tus dudas.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Packages;
