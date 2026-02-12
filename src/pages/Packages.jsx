import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Check, X, Zap, Star, Crown, ArrowRight } from 'lucide-react';

import { useLanguage } from '../i18n/index.jsx';

function Packages() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          heroBadge: 'Packages and pricing',
          heroTitlePrefix: 'Packages and ',
          heroTitleHighlight: 'Pricing',
          heroDescription:
            'Choose the perfect plan for your business. All plans include professional design, technical support, and top technologies.',
          monthlyLabel: 'One-time payment',
          yearlyLabel: 'With annual maintenance',
          badgePopular: 'MOST POPULAR',
          paymentMonthly: 'one-time payment',
          paymentYearly: 'includes annual maintenance',
          customTitle: 'Need something more custom?',
          customDescription:
            'Every project is unique. If you need special requirements or additional features, contact us for a tailored quote.',
          customCta: 'Request custom quote',
          guarantees: [
            {
              title: 'Satisfaction guarantee',
              description: 'If you are not satisfied, we keep iterating until you are.',
            },
            {
              title: 'Fast delivery',
              description: 'Your website ready in record time with our AI-powered workflow.',
            },
            {
              title: 'Support included',
              description: 'All plans include technical support to solve your questions.',
            },
          ],
          plans: [
            {
              name: 'Personal - SMB',
              icon: <Zap size={32} />,
              description: 'Ideal for entrepreneurs and small businesses that need online presence.',
              priceMonthly: 299990,
              priceYearly: 2999990,
              popular: false,
              features: [
                { name: 'Custom design', included: true },
                { name: 'Up to 5 pages', included: true },
                { name: 'Responsive (mobile and tablet)', included: true },
                { name: 'Contact form', included: true },
                { name: 'Social media integration', included: true },
                { name: 'Free SSL', included: true },
                { name: '1 year hosting included', included: true },
                { name: '.cl or .com domain', included: false },
                { name: 'Integrated blog', included: false },
                { name: 'E-commerce', included: false },
                { name: 'Advanced SEO', included: false },
                { name: 'Priority support', included: false },
              ],
              cta: 'Start',
            },
            {
              name: 'SMB - Ecommerce',
              icon: <Star size={32} />,
              description: 'For growing businesses that want to stand out and convert more customers.',
              priceMonthly: 599990,
              priceYearly: 5999990,
              popular: true,
              features: [
                { name: 'Custom design', included: true },
                { name: 'Up to 10 pages', included: true },
                { name: 'Responsive (mobile and tablet)', included: true },
                { name: 'Contact form', included: true },
                { name: 'Social media integration', included: true },
                { name: 'Free SSL', included: true },
                { name: '1 year hosting included', included: true },
                { name: '.cl domain included', included: true },
                { name: 'Integrated blog', included: true },
                { name: 'Basic e-commerce', included: true },
                { name: 'Advanced SEO', included: false },
                { name: 'Priority support', included: false },
              ],
              cta: 'Choose Pro',
            },
            {
              name: 'Enterprise',
              icon: <Crown size={32} />,
              description: 'Complete solution for companies that seek maximum performance and conversion.',
              priceMonthly: 999990,
              priceYearly: 9999990,
              popular: false,
              features: [
                { name: 'Premium custom design', included: true },
                { name: 'Unlimited pages', included: true },
                { name: 'Responsive (mobile and tablet)', included: true },
                { name: 'Advanced forms', included: true },
                { name: 'Social media integration', included: true },
                { name: 'Free SSL', included: true },
                { name: '2 years hosting included', included: true },
                { name: '.cl domain included', included: true },
                { name: 'Integrated blog', included: true },
                { name: 'Full e-commerce', included: true },
                { name: 'Advanced SEO + Analytics', included: true },
                { name: 'Priority support 24/7', included: true },
              ],
              cta: 'Choose Premium',
            },
          ],
        }
      : {
          heroBadge: 'Paquetes y precios',
          heroTitlePrefix: 'Paquetes y ',
          heroTitleHighlight: 'Precios',
          heroDescription:
            'Elige el plan perfecto para tu negocio. Todos incluyen diseno profesional, soporte tecnico y las mejores tecnologias del mercado.',
          monthlyLabel: 'Pago unico',
          yearlyLabel: 'Con mantenimiento anual',
          badgePopular: 'MAS POPULAR',
          paymentMonthly: 'pago unico',
          paymentYearly: 'incluye mantenimiento anual',
          customTitle: 'Necesitas algo mas personalizado?',
          customDescription:
            'Cada proyecto es unico. Si tienes requerimientos especiales o necesitas funcionalidades adicionales, contactanos para una cotizacion a medida.',
          customCta: 'Solicitar cotizacion personalizada',
          guarantees: [
            {
              title: 'Garantia de satisfaccion',
              description: 'Si no estas conforme con el resultado, trabajamos hasta que lo estes.',
            },
            {
              title: 'Entrega rapida',
              description: 'Tu sitio web listo en tiempo record gracias a nuestra tecnologia con IA.',
            },
            {
              title: 'Soporte incluido',
              description: 'Todos los planes incluyen soporte tecnico para resolver tus dudas.',
            },
          ],
          plans: [
            {
              name: 'Persona - Pyme',
              icon: <Zap size={32} />,
              description: 'Ideal para emprendedores y pequenos negocios que necesitan presencia online.',
              priceMonthly: 299990,
              priceYearly: 2999990,
              popular: false,
              features: [
                { name: 'Diseno personalizado', included: true },
                { name: 'Hasta 5 paginas', included: true },
                { name: 'Responsive (movil y tablet)', included: true },
                { name: 'Formulario de contacto', included: true },
                { name: 'Integracion redes sociales', included: true },
                { name: 'SSL gratuito', included: true },
                { name: 'Hosting 1 ano incluido', included: true },
                { name: 'Dominio .cl o .com', included: false },
                { name: 'Blog integrado', included: false },
                { name: 'E-commerce', included: false },
                { name: 'SEO avanzado', included: false },
                { name: 'Soporte prioritario', included: false },
              ],
              cta: 'Comenzar',
            },
            {
              name: 'Pyme - Ecommerce',
              icon: <Star size={32} />,
              description: 'Para negocios en crecimiento que buscan destacar y convertir mas clientes.',
              priceMonthly: 599990,
              priceYearly: 5999990,
              popular: true,
              features: [
                { name: 'Diseno personalizado', included: true },
                { name: 'Hasta 10 paginas', included: true },
                { name: 'Responsive (movil y tablet)', included: true },
                { name: 'Formulario de contacto', included: true },
                { name: 'Integracion redes sociales', included: true },
                { name: 'SSL gratuito', included: true },
                { name: 'Hosting 1 ano incluido', included: true },
                { name: 'Dominio .cl incluido', included: true },
                { name: 'Blog integrado', included: true },
                { name: 'E-commerce basico', included: true },
                { name: 'SEO avanzado', included: false },
                { name: 'Soporte prioritario', included: false },
              ],
              cta: 'Elegir Pro',
            },
            {
              name: 'Empresa',
              icon: <Crown size={32} />,
              description: 'Solucion completa para empresas que buscan maximo rendimiento y conversion.',
              priceMonthly: 999990,
              priceYearly: 9999990,
              popular: false,
              features: [
                { name: 'Diseno personalizado premium', included: true },
                { name: 'Paginas ilimitadas', included: true },
                { name: 'Responsive (movil y tablet)', included: true },
                { name: 'Formularios avanzados', included: true },
                { name: 'Integracion redes sociales', included: true },
                { name: 'SSL gratuito', included: true },
                { name: 'Hosting 2 anos incluido', included: true },
                { name: 'Dominio .cl incluido', included: true },
                { name: 'Blog integrado', included: true },
                { name: 'E-commerce completo', included: true },
                { name: 'SEO avanzado + Analytics', included: true },
                { name: 'Soporte prioritario 24/7', included: true },
              ],
              cta: 'Elegir Premium',
            },
          ],
        };

  const formatPrice = (price) =>
    new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <main className="min-h-screen bg-base">
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900 mt-20 lg:mt-28">
        <div className="absolute inset-0">
          <img
            src="/img/img-paquetes.avif"
            alt="packages background"
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
            <Zap size={16} className="text-primary mr-2" />
            <span className="text-primary text-xs sm:text-sm font-medium">{copy.heroBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {copy.heroTitlePrefix}
            <span className="text-primary">{copy.heroTitleHighlight}</span>
          </h1>
          <p className="text-gray-300 sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {copy.heroDescription}
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 p-8">
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
              {copy.monthlyLabel}
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'bg-primary text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {copy.yearlyLabel}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {copy.plans.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-base border-2 ${
                pkg.popular ? 'border-secondary' : 'border-gray-200'
              } p-6 transition-all duration-300 hover:border-primary hover:shadow-lg`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white text-xs font-bold px-4 py-1">
                    {copy.badgePopular}
                  </span>
                </div>
              )}

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

              <div className="text-center mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                  {formatPrice(billingCycle === 'monthly' ? pkg.priceMonthly : pkg.priceYearly)}
                </div>
                <div className="text-sm text-gray-500">
                  {billingCycle === 'monthly' ? copy.paymentMonthly : copy.paymentYearly}
                </div>
              </div>

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

        <div className="mt-16 text-center">
          <div className="bg-transparent shadow shadow-md shadow-gray-300 p-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{copy.customTitle}</h3>
            <p className="text-sm text-gray-600 mb-6">{copy.customDescription}</p>
            <Link
              to="/contacto"
              className="inline-flex items-center bg-secondary text-white font-bold px-6 py-3 hover:bg-blue-900 transition-all duration-300"
            >
              {copy.customCta}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.guarantees.map((item) => (
            <div key={item.title} className="text-center p-6">
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Packages;
