import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Check, X, Zap, Star, ArrowRight, Building2, ShoppingCart } from 'lucide-react';

import { COMPANY } from '../constants/index.js';
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
            'Choose the package that fits your current stage. Compare value first, then pick your investment level.',
          monthlyLabel: 'Setup only',
          yearlyLabel: 'Setup + 12 months maintenance',
          badgePopular: 'MOST POPULAR',
          paymentMonthly: 'single setup payment',
          paymentYearly: 'single payment including annual maintenance',
          emailFootnote: '* Hosting, domains, and provider licenses are billed separately.',
          customTitle: 'Need something more custom?',
          customDescription:
            'Every project is unique. If you need special requirements or additional features, contact us for a tailored quote.',
          customCta: 'Request custom quote',
          moreInfoCta: 'Need more information?',
          guarantees: [
            {
              title: 'Satisfaction guarantee',
              description: 'Strategic iterations are included until agreed scope closure.',
            },
            {
              title: 'Fast delivery',
              description: 'Your website ready in record time with our AI-powered workflow.',
            },
            {
              title: 'Post-launch guidance included',
              description: 'All plans include post-launch guidance to resolve questions and small adjustments.',
            },
          ],
          plans: [
            {
              name: 'Starter Solution',
              icon: <Zap size={32} />,
              description: 'Single-page landing focused on conversion with basic integrations. No custom development.',
              priceMonthly: 299990,
              priceYearly: 899990,
              popular: false,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Basic Maintenance plan.',
              conditionNote: 'Hosting, domains, and transactional email providers are billed by usage.',
              features: [
                { name: 'Landing page (single page)', included: true },
                { name: 'Professional design + visual identity', included: true },
                { name: 'Responsive development', included: true },
                { name: 'Buttons to WhatsApp and social media', included: true },
                { name: 'Contact form connected to your email', included: true },
                { name: 'Google Maps + YouTube embeds', included: true },
                { name: 'Basic Google visibility + visits tracking', included: true },
                { name: 'Free domain (1st year)', included: true },
                { name: 'Website launch configuration', included: true },
                { name: '30-day post-launch guidance', included: true },
                { name: 'Business email setup*', included: true },
                { name: 'Custom system development', included: false },
                { name: 'E-commerce module', included: false },
                { name: 'Priority support', included: false },
              ],
              cta: 'Start',
            },
            {
              name: 'SMB Solution',
              icon: <Building2 size={32} />,
              description: 'Corporate website (multi-page) for business positioning and lead generation.',
              priceMonthly: 599990,
              priceYearly: 1299990,
              popular: false,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Basic Maintenance plan.',
              conditionNote: 'Hosting, domains, and transactional email providers are billed by usage.',
              features: [
                { name: 'Everything in Starter Solution', included: true },
                { name: 'Up to 8 pages', included: true },
                { name: 'Service and about pages', included: true },
                { name: 'Conversion-focused contact sections', included: true },
                { name: 'Blog/news module (optional)', included: true },
                { name: 'Basic Google visibility by page', included: true },
                { name: '30-day post-launch guidance', included: true },
                { name: 'Custom system development', included: false },
                { name: 'E-commerce module', included: false },
                { name: 'Priority support', included: false },
              ],
              cta: 'Choose SMB',
            },
            {
              name: 'Business Solution',
              icon: <ShoppingCart size={32} />,
              description: 'Online store with admin tools to manage products, orders, and payments.',
              priceMonthly: 999990,
              priceYearly: 1999990,
              popular: true,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Professional Maintenance plan.',
              conditionNote: 'Hosting, domains, and transactional email providers are billed by usage.',
              features: [
                { name: 'Everything in SMB Solution', included: true },
                { name: 'Up to 10 pages', included: true },
                { name: 'E-commerce + secure checkout', included: true },
                { name: 'Payment gateway integration', included: true },
                { name: 'Admin panel for products and stock', included: true },
                { name: 'Order and customer management', included: true },
                { name: 'Email center in admin panel', included: true },
                { name: 'Payment voucher/receipt generation (non-tax)', included: true },
                { name: 'Basic sales dashboard (orders, revenue, avg ticket)', included: true },
                { name: 'Essential Google visibility setup', included: true },
                { name: '30-day post-launch guidance', included: true },
                { name: 'Legal e-invoicing with SII (quoted separately)', included: false },
                { name: 'Priority support', included: false },
              ],
              cta: 'Choose Business',
            },
            {
              name: 'Enterprise Solution',
              icon: <Star size={32} />,
              description: 'Advanced ecommerce with custom modules, integrations, and automation.',
              priceMonthly: 1699990,
              priceYearly: 3099990,
              popular: false,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Premium Maintenance plan.',
              conditionNote: 'Hosting, domains, and transactional email providers are billed by usage.',
              features: [
                { name: 'Everything in Business Solution', included: true },
                { name: 'Up to 20 pages / advanced modules', included: true },
                { name: 'Custom modules for your business', included: true },
                { name: 'Email template editor in admin panel', included: true },
                { name: 'Custom PDF vouchers/payment receipts', included: true },
                { name: 'Advanced sales dashboard with custom filters', included: true },
                { name: 'Integrations with common tools (payments, shipping, analytics)', included: true },
                { name: 'High-traffic ready setup + monitoring', included: true },
                { name: 'Priority support', included: true },
                { name: 'Monthly strategic follow-up', included: true },
                { name: 'Strategic scope iterations', included: true },
                { name: 'Legal e-invoicing with SII (quoted separately)', included: false },
              ],
              cta: 'Choose Enterprise',
            },
          ],
        }
      : {
          heroBadge: 'Paquetes y precios',
          heroTitlePrefix: 'Paquetes y ',
          heroTitleHighlight: 'Precios',
          heroDescription:
            'Elige el paquete que mejor calza con tu etapa actual. Primero entiendes el valor, luego decides la inversion.',
          monthlyLabel: 'Solo implementacion',
          yearlyLabel: 'Implementacion + 12 meses mantenimiento',
          badgePopular: 'MAS POPULAR',
          paymentMonthly: 'pago unico de implementacion',
          paymentYearly: 'pago unico con mantenimiento anual incluido',
          emailFootnote: '* Hosting, dominio y licencias de proveedores se cotizan por separado.',
          customTitle: 'Necesitas algo mas personalizado?',
          customDescription:
            'Cada proyecto es unico. Si tienes requerimientos especiales o necesitas funcionalidades adicionales, contactaños para una cotizacion a medida.',
          customCta: 'Solicitar cotizacion personalizada',
          moreInfoCta: '¿Necesitas mas informacion?',
          guarantees: [
            {
              title: 'Garantia de satisfaccion',
              description: 'Incluimos iteraciones estrategicas hasta cierre del alcance acordado.',
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
              name: 'Solucion Inicio',
              icon: <Zap size={32} />,
              description: 'Landing page de una sola pantalla enfocada en conversion con integraciones basicas. Sin desarrollo a medida.',
              priceMonthly: 299990,
              priceYearly: 899990,
              popular: false,
              cycleNoteMonthly: 'Incluye solo implementacion del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Basico.',
              conditionNote: 'Hosting y proveedores de correo transaccional se cobran segun uso.',
              features: [
                { name: 'Landing page (single page)', included: true },
                { name: 'Diseno profesional + identidad visual', included: true },
                { name: 'Sitio adaptable a celular y computador', included: true },
                { name: 'Botones de WhatsApp y redireccion a redes', included: true },
                { name: 'Formulario de contacto conectado a tu correo', included: true },
                { name: 'Integracion Google Maps + videos YouTube', included: true },
                { name: 'Visibilidad basica en Google + medicion de visitas', included: true },
                { name: 'Dominio gratis (primer ano)', included: true },
                { name: 'Configuracion y publicacion del sitio', included: true },
                { name: 'Acompanamiento post-lanzamiento por 30 dias', included: true },
                { name: 'Configuracion de correo corporativo*', included: true },
                { name: 'Desarrollo de funciones a medida', included: false },
                { name: 'Modulo e-commerce', included: false },
                { name: 'Soporte prioritario', included: false },
              ],
              cta: 'Comenzar',
            },
            {
              name: 'Solucion Pyme',
              icon: <Building2 size={32} />,
              description: 'Sitio corporativo multipagina para posicionamiento de marca y generacion de leads.',
              priceMonthly: 599990,
              priceYearly: 1299990,
              popular: false,
              cycleNoteMonthly: 'Incluye solo implementacion del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Basico.',
              conditionNote: 'Hosting y proveedores de correo transaccional se cobran segun uso.',
              features: [
                { name: 'Todo lo de Solucion Inicio', included: true },
                { name: 'Hasta 8 paginas', included: true },
                { name: 'Paginas de servicios y empresa', included: true },
                { name: 'Secciones de contacto orientadas a conversion', included: true },
                { name: 'Modulo blog/noticias (opcional)', included: true },
                { name: 'Visibilidad basica en Google por seccion', included: true },
                { name: 'Acompanamiento post-lanzamiento por 30 dias', included: true },
                { name: 'Desarrollo de funciones a medida', included: false },
                { name: 'Modulo e-commerce', included: false },
                { name: 'Soporte prioritario', included: false },
              ],
              cta: 'Elegir Pyme',
            },
            {
              name: 'Solucion Negocio',
              icon: <ShoppingCart size={32} />,
              description: 'Tienda online con herramientas de administracion para gestionar catalogo, pedidos y pagos.',
              priceMonthly: 999990,
              priceYearly: 1999990,
              popular: true,
              cycleNoteMonthly: 'Incluye solo implementacion del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Profesional.',
              conditionNote: 'Hosting y proveedores de correo transaccional se cobran segun uso.',
              features: [
                { name: 'Todo lo de Solucion Pyme', included: true },
                { name: 'Hasta 10 paginas', included: true },
                { name: 'E-commerce + checkout seguro', included: true },
                { name: 'Integracion de pasarela de pago', included: true },
                { name: 'Panel para gestionar productos y stock', included: true },
                { name: 'Gestion de pedidos y clientes', included: true },
                { name: 'Centro de emails en panel administrador', included: true },
                { name: 'Generacion de comprobante/voucher de pago (no tributario)', included: true },
                { name: 'Dashboard de ventas basico (pedidos, ingresos, ticket promedio)', included: true },
                { name: 'Visibilidad esencial en Google', included: true },
                { name: 'Acompanamiento post-lanzamiento por 30 dias', included: true },
                { name: 'Facturacion electronica legal con SII (cotizacion aparte)', included: false },
                { name: 'Soporte prioritario', included: false },
              ],
              cta: 'Elegir Negocio',
            },
            {
              name: 'Solucion Empresa',
              icon: <Star size={32} />,
              description: 'Ecommerce avanzado con modulos personalizados, integraciones y automatizaciones.',
              priceMonthly: 1699990,
              priceYearly: 3099990,
              popular: false,
              cycleNoteMonthly: 'Incluye solo implementacion del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Premium.',
              conditionNote: 'Hosting y proveedores de correo transaccional se cobran segun uso.',
              features: [
                { name: 'Todo lo de Solucion Negocio', included: true },
                { name: 'Hasta 20 paginas o modulos avanzados', included: true },
                { name: 'Modulos personalizados para tu negocio', included: true },
                { name: 'Editor de plantillas de email desde panel admin', included: true },
                { name: 'Comprobantes/vouchers PDF personalizados', included: true },
                { name: 'Dashboard de ventas avanzado con filtros personalizados', included: true },
                { name: 'Integraciones con herramientas comunes (pagos, envios, analitica)', included: true },
                { name: 'Sitio preparado para alto trafico + monitoreo', included: true },
                { name: 'Soporte prioritario', included: true },
                { name: 'Seguimiento estrategico mensual', included: true },
                { name: 'Iteraciones estrategicas de alcance', included: true },
                { name: 'Facturacion electronica legal con SII (cotizacion aparte)', included: false },
              ],
              cta: 'Elegir Empresa',
            },
          ],
        };

  const formatPrice = (price) => {
    const formatted = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);

    return lang === 'en' ? `${formatted} CLP` : formatted;
  };

  const whatsappDigits = (() => {
    const phoneDigits =
      typeof COMPANY.phone === 'string' && COMPANY.phone.trim() ? COMPANY.phone.replace(/[^0-9]/g, '') : '';
    if (phoneDigits) return phoneDigits;

    const linkMatch =
      typeof COMPANY.whatsappLink === 'string' ? COMPANY.whatsappLink.match(/wa\.me\/(\d+)/) : null;
    return linkMatch?.[1] || '';
  })();

  const buildPackageWhatsappHref = (pkg) => {
    if (!whatsappDigits) return null;

    const selectedPrice = formatPrice(billingCycle === 'monthly' ? pkg.priceMonthly : pkg.priceYearly);
    const selectedCycle = billingCycle === 'monthly' ? copy.monthlyLabel : copy.yearlyLabel;

    const message =
      lang === 'en'
        ? `Hi, I need more information about package "${pkg.name}". Option: ${selectedCycle}. Price: ${selectedPrice}.`
        : `Hola, necesito mas informacion sobre el paquete "${pkg.name}". Opcion: ${selectedCycle}. Precio: ${selectedPrice}.`;

    return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {copy.plans.map((pkg, index) => {
            const packageWhatsappHref = buildPackageWhatsappHref(pkg);

            return (
              <div
                key={index}
                className={`relative bg-base border-2 ${
                  pkg.popular ? 'border-secondary' : 'border-gray-200'
                } p-6 transition-all duration-300 hover:border-primary hover:shadow-lg flex flex-col h-full`}
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
                <div className="text-xs text-gray-500 mt-1">
                  {billingCycle === 'monthly' ? pkg.cycleNoteMonthly : pkg.cycleNoteYearly}
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-3 mb-4">
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

                {pkg.conditionNote && <p className="text-[11px] text-gray-500 mb-6">{pkg.conditionNote}</p>}
              </div>

              <Link
                to="/contacto"
                className={`w-full flex items-center justify-center py-3 font-bold text-sm transition-all duration-300 mt-auto ${
                  pkg.popular
                    ? 'bg-secondary text-white hover:bg-blue-900'
                    : 'bg-primary text-gray-900 hover:bg-amber-600'
                }`}
              >
                {pkg.cta}
                <ArrowRight size={18} className="ml-2" />
              </Link>

              {packageWhatsappHref && (
                <a
                  href={packageWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center justify-center text-sm font-bold text-secondary hover:text-primary transition-all duration-300"
                >
                  {copy.moreInfoCta}
                </a>
              )}
            </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <p className="text-[11px] text-gray-500">{copy.emailFootnote}</p>
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
