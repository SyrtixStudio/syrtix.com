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
          subtitle: 'Choose the package that matches your business stage and goals.',
          helper:
            'These are complete solutions: planning, design, development, launch, and post-launch guidance.',
          growthTip: 'Want ongoing growth? We recommend a monthly maintenance plan.',
          emailFootnote: '* Hosting and transactional email providers are billed by usage.',
          viewDetails: 'View full package details',
          packages: [
            {
              id: 'landing-starter',
              name: 'Starter Solution',
              icon: 'Zap',
              description: 'Single-page website for fast launch and lead capture.',
              priceLabel: '$299.990 CLP',
              paymentType: 'one-time setup payment',
              featured: false,
              features: [
                { text: 'Professional design + visual identity', included: true },
                { text: 'Landing page (single page)', included: true },
                { text: 'Responsive website', included: true },
                { text: 'Contact form + WhatsApp buttons', included: true },
                { text: 'Basic Google visibility setup', included: true },
                { text: 'Website launch configuration', included: true },
                { text: '30-day post-launch guidance', included: true },
                { text: 'Business email setup*', included: true },
                { text: 'Custom system development', included: false },
                { text: 'E-commerce module', included: false },
              ],
              ctaText: 'Start',
              ctaLink: '/contacto',
            },
            {
              id: 'corporate-web',
              name: 'SMB Solution',
              icon: 'Code',
              description: 'Multi-page website for positioning and lead generation.',
              priceLabel: '$599.990 CLP',
              paymentType: 'one-time setup payment',
              featured: false,
              conditionNote: 'Hosting and transactional email providers are billed by usage.',
              features: [
                { text: 'Everything in Starter Solution', included: true },
                { text: 'Up to 8 pages', included: true },
                { text: 'Service and company pages', included: true },
                { text: 'Conversion-focused contact sections', included: true },
                { text: 'Blog/news module (optional)', included: true },
                { text: 'Basic Google visibility by page', included: true },
                { text: '30-day post-launch guidance', included: true },
                { text: 'Custom system development', included: false },
                { text: 'E-commerce module', included: false },
              ],
              ctaText: 'Choose SMB',
              ctaLink: '/contacto',
            },
            {
              id: 'ecommerce-standard',
              name: 'Business Solution',
              icon: 'ShoppingCart',
              description: 'Online store to manage products, orders, and payments.',
              priceLabel: '$999.990 CLP',
              paymentType: 'one-time setup payment',
              featured: true,
              badge: 'MOST POPULAR',
              conditionNote: 'Hosting and transactional email providers are billed by usage.',
              features: [
                { text: 'Everything in SMB Solution', included: true },
                { text: 'Up to 10 pages', included: true },
                { text: 'E-commerce + secure checkout', included: true },
                { text: 'Payment gateway integration', included: true },
                { text: 'Admin panel for products and stock', included: true },
                { text: 'Order and customer management', included: true },
                { text: 'Basic sales dashboard', included: true },
                { text: '30-day post-launch guidance', included: true },
                { text: 'Legal e-invoicing with SII (quoted separately)', included: false },
                { text: 'Priority support', included: false },
              ],
              ctaText: 'Choose Business',
              ctaLink: '/contacto',
            },
            {
              id: 'ecommerce-advanced',
              name: 'Enterprise Solution',
              icon: 'Crown',
              description: 'Advanced ecommerce with custom modules and integrations.',
              priceLabel: '$1.699.990 CLP',
              paymentType: 'one-time setup payment',
              featured: false,
              conditionNote: 'Hosting and transactional email providers are billed by usage.',
              features: [
                { text: 'Everything in Business Solution', included: true },
                { text: 'Up to 20 pages / advanced modules', included: true },
                { text: 'Custom modules for your business', included: true },
                { text: 'Email template editor in admin panel', included: true },
                { text: 'Custom PDF vouchers/payment receipts', included: true },
                { text: 'Advanced sales dashboard with custom filters', included: true },
                { text: 'Common tool integrations (payments, shipping, analytics)', included: true },
                { text: 'High-traffic ready setup + monitoring', included: true },
                { text: 'Priority support', included: true },
                { text: 'Legal e-invoicing with SII (quoted separately)', included: false },
              ],
              ctaText: 'Choose Enterprise',
              ctaLink: '/contacto',
            },
          ],
        }
      : {
          titlePrefix: 'Paquetes y ',
          titleHighlight: 'Precios',
          subtitle: 'Elige el paquete que mejor se adapta a tu etapa y objetivos.',
          helper:
            'Son soluciones completas: planificacion, diseno, desarrollo, publicacion y acompanamiento post-lanzamiento.',
          growthTip: 'Quieres crecimiento continuo? Recomendamos un plan mensual de mantenimiento.',
          emailFootnote: '* Hosting y proveedores de correo transaccional se cobran segun uso.',
          viewDetails: 'Ver todos los detalles de cada paquete',
          packages: [
            {
              id: 'landing-starter',
              name: 'Solucion Inicio',
              icon: 'Zap',
              description: 'Sitio de una pagina para lanzar rapido y captar clientes.',
              priceLabel: '$299.990',
              paymentType: 'pago unico de implementacion',
              featured: false,
              features: [
                { text: 'Diseno profesional + identidad visual', included: true },
                { text: 'Landing page (single page)', included: true },
                { text: 'Sitio adaptable a celular y computador', included: true },
                { text: 'Formulario de contacto + botones WhatsApp', included: true },
                { text: 'Visibilidad basica en Google', included: true },
                { text: 'Configuracion y publicacion del sitio', included: true },
                { text: 'Acompanamiento post-lanzamiento por 30 dias', included: true },
                { text: 'Configuracion de correo corporativo*', included: true },
                { text: 'Desarrollo de funciones a medida', included: false },
                { text: 'Modulo e-commerce', included: false },
              ],
              ctaText: 'Comenzar',
              ctaLink: '/contacto',
            },
            {
              id: 'web-corporativa',
              name: 'Solucion Pyme',
              icon: 'Code',
              description: 'Sitio multipagina para posicionamiento y generacion de leads.',
              priceLabel: '$599.990',
              paymentType: 'pago unico de implementacion',
              featured: false,
              conditionNote: 'Hosting y proveedores de correo transaccional se cobran segun uso.',
              features: [
                { text: 'Todo lo de Solucion Inicio', included: true },
                { text: 'Hasta 8 paginas', included: true },
                { text: 'Paginas de servicios y empresa', included: true },
                { text: 'Secciones de contacto orientadas a conversion', included: true },
                { text: 'Modulo blog/noticias (opcional)', included: true },
                { text: 'Visibilidad basica en Google por seccion', included: true },
                { text: 'Acompanamiento post-lanzamiento por 30 dias', included: true },
                { text: 'Desarrollo de funciones a medida', included: false },
                { text: 'Modulo e-commerce', included: false },
              ],
              ctaText: 'Elegir Pyme',
              ctaLink: '/contacto',
            },
            {
              id: 'ecommerce-standard',
              name: 'Solucion Negocio',
              icon: 'ShoppingCart',
              description: 'Tienda online para gestionar productos, pedidos y pagos.',
              priceLabel: '$999.990',
              paymentType: 'pago unico de implementacion',
              featured: true,
              badge: 'MAS POPULAR',
              conditionNote: 'Hosting y proveedores de correo transaccional se cobran segun uso.',
              features: [
                { text: 'Todo lo de Solucion Pyme', included: true },
                { text: 'Hasta 10 paginas', included: true },
                { text: 'E-commerce + checkout seguro', included: true },
                { text: 'Integracion de pasarela de pago', included: true },
                { text: 'Panel para gestionar productos y stock', included: true },
                { text: 'Gestion de pedidos y clientes', included: true },
                { text: 'Dashboard de ventas basico', included: true },
                { text: 'Acompanamiento post-lanzamiento por 30 dias', included: true },
                { text: 'Facturacion electronica legal con SII (cotizacion aparte)', included: false },
                { text: 'Soporte prioritario', included: false },
              ],
              ctaText: 'Elegir Negocio',
              ctaLink: '/contacto',
            },
            {
              id: 'ecommerce-avanzado',
              name: 'Solucion Empresa',
              icon: 'Crown',
              description: 'Ecommerce avanzado con modulos personalizados e integraciones.',
              priceLabel: '$1.699.990',
              paymentType: 'pago unico de implementacion',
              featured: false,
              conditionNote: 'Hosting y proveedores de correo transaccional se cobran segun uso.',
              features: [
                { text: 'Todo lo de Solucion Negocio', included: true },
                { text: 'Hasta 20 paginas o modulos avanzados', included: true },
                { text: 'Modulos personalizados para tu negocio', included: true },
                { text: 'Editor de plantillas de email desde panel admin', included: true },
                { text: 'Comprobantes/vouchers PDF personalizados', included: true },
                { text: 'Dashboard de ventas avanzado con filtros', included: true },
                { text: 'Integraciones comunes (pagos, envios, analitica)', included: true },
                { text: 'Sitio preparado para alto trafico + monitoreo', included: true },
                { text: 'Soporte prioritario', included: true },
                { text: 'Facturacion electronica legal con SII (cotizacion aparte)', included: false },
              ],
              ctaText: 'Elegir Empresa',
              ctaLink: '/contacto',
            },
          ],
        };

  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {copy.packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className={`relative bg-base border-2 p-6 transition-all duration-300 hover:border-primary hover:shadow-lg flex flex-col h-full ${
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

              <div className="flex-1">
                <ul className="space-y-3 mb-4">
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

                {pkg.conditionNote && <p className="text-[11px] text-gray-500 mb-6">{pkg.conditionNote}</p>}
              </div>

              <Link
                to={pkg.ctaLink}
                className={`w-full flex items-center justify-center py-3 font-bold text-sm transition-all duration-300 mt-auto ${
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
          <p className="text-[11px] text-gray-500 mb-3">{copy.emailFootnote}</p>
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
