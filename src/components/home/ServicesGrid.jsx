import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { getIcon } from './IconResolver';
import { useLanguage } from '../../i18n/index.jsx';

function ServicesGrid() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          sectionTitlePrefix: 'Services ',
          sectionTitleHighlight: 'on demand',
          sectionSubtitle:
            'Choose exactly what you need. Standalone services or bundled solutions for your project.',
          viewService: 'View service',
          upgradeTitlePrefix: 'Already have a website? ',
          upgradeTitleHighlight: 'Improve it',
          upgradeTitleSuffix: ' with us',
          upgradeSubtitle:
            'We take your current website to the next level: performance, security, new features, and a conversion-focused experience. We start with a paid diagnostic and then deliver the final quote.',
          requestDiagnostic: 'Request diagnostic',
          viewAllServices: 'View all services',
          services: [
            {
              id: 'design',
              icon: 'Palette',
              title: 'Web design',
              description: 'Unique custom designs that reflect your brand identity.',
              price: 'From $99.990 CLP',
            },
            {
              id: 'development',
              icon: 'Code',
              title: 'Custom development',
              description: 'Custom solutions with the latest technologies.',
              price: 'From $199.990 CLP',
            },
            {
              id: 'ecommerce',
              icon: 'ShoppingCart',
              title: 'E-commerce',
              description: 'Basic online stores with payments and inventory management.',
              price: 'From $299.990 CLP',
            },
            {
              id: 'seo',
              icon: 'Search',
              title: 'SEO',
              description: 'Search optimization to improve your visibility on Google.',
              price: 'From $79.990 CLP/month',
            },
            {
              id: 'apps',
              icon: 'Smartphone',
              title: 'Mobile apps',
              description: 'Native apps and PWAs for iOS and Android.',
              price: 'From $499.990 CLP',
            },
            {
              id: 'maintenance',
              icon: 'Settings',
              title: 'Maintenance',
              description: 'Updates, backups, and ongoing technical support.',
              price: 'From $49.990 CLP/month',
            },
          ],
          plans: [
            {
              id: 'start',
              title: 'SMB Website',
              subtitle: 'Up to 5 pages or sections',
              price: 'Diagnostic from $49.990 CLP',
              description:
                'We audit your current website and define the exact improvement plan before implementation.',
              includes: [
                'Technical and performance audit',
                'Legacy risk assessment',
                'Prioritized improvement proposal',
                'Final quote based on scope',
              ],
            },
            {
              id: 'grow',
              title: 'SMB Plus Website',
              subtitle: '6-15 pages + modules',
              price: 'Diagnostic from $99.990 CLP',
              description:
                'For websites with integrations and critical flows that need a complete review.',
              includes: [
                'Technical + UX audit',
                'Integration and dependency map',
                'Phased improvement plan',
                'Final quote based on scope',
              ],
              featured: true,
              badge: 'MOST REQUESTED',
            },
            {
              id: 'pro',
              title: 'Enterprise Website',
              subtitle: 'More than 15 pages or ecommerce',
              price: 'Diagnostic from $149.990 CLP',
              description:
                'For complex projects: ecommerce, multi-site platforms, or advanced business logic.',
              includes: [
                'Deep technical audit',
                'Advanced security assessment',
                'Scalable roadmap',
                'Final quote based on scope',
              ],
            },
          ],
        }
      : {
          sectionTitlePrefix: 'Servicios ',
          sectionTitleHighlight: 'a la carta',
          sectionSubtitle:
            'Elige exactamente lo que necesitas. Servicios individuales o combinados segun tu proyecto.',
          viewService: 'Ver servicio',
          upgradeTitlePrefix: 'Ya tienes una web? ',
          upgradeTitleHighlight: 'Mejorala',
          upgradeTitleSuffix: ' con nosotros',
          upgradeSubtitle:
            'Tomamos tu sitio actual y lo llevamos a su mejor version: rendimiento, seguridad, nuevas funcionalidades y una experiencia que convierta visitantes en clientes. Primero hacemos un diagnostico pagado y luego entregamos la cotizacion final.',
          requestDiagnostic: 'Solicitar diagnostico',
          viewAllServices: 'Ver todos los servicios',
          services: [
            {
              id: 'design',
              icon: 'Palette',
              title: 'Diseño web',
              description: 'Diseños unicos y personalizados que reflejan la identidad de tu marca.',
              price: 'Desde $99.990',
            },
            {
              id: 'development',
              icon: 'Code',
              title: 'Desarrollo a medida',
              description: 'Soluciones personalizadas con las ultimas tecnologias del mercado.',
              price: 'Desde $199.990',
            },
            {
              id: 'ecommerce',
              icon: 'ShoppingCart',
              title: 'E-commerce',
              description: 'Tiendas online basicas con pasarelas de pago y gestion de inventario.',
              price: 'Desde $299.990',
            },
            {
              id: 'seo',
              icon: 'Search',
              title: 'SEO',
              description: 'Optimizacion para buscadores que mejora tu visibilidad en Google.',
              price: 'Desde $79.990/mes',
            },
            {
              id: 'apps',
              icon: 'Smartphone',
              title: 'Apps moviles',
              description: 'Aplicaciones nativas y PWA para iOS y Android.',
              price: 'Desde $499.990',
            },
            {
              id: 'maintenance',
              icon: 'Settings',
              title: 'Mantenimiento',
              description: 'Actualizaciones, backups y soporte tecnico continuo.',
              price: 'Desde $49.990/mes',
            },
          ],
          plans: [
            {
              id: 'start',
              title: 'Sitio Pyme',
              subtitle: 'Hasta 5 paginas o secciones',
              price: 'Diagnostico desde $49.990',
              description:
                'Revisamos tu web actual y definimos el plan exacto de mejora antes de intervenir.',
              includes: [
                'Auditoria tecnica y de performance',
                'Deteccion de riesgos en legacy',
                'Propuesta de mejoras priorizadas',
                'Cotizacion final segun alcance',
              ],
            },
            {
              id: 'grow',
              title: 'Sitio Pyme Plus',
              subtitle: '6-15 paginas + modulos',
              price: 'Diagnostico desde $99.990',
              description:
                'Para sitios con integraciones y flujos criticos que requieren una revision completa.',
              includes: [
                'Auditoria tecnica + UX',
                'Mapa de integraciones y dependencias',
                'Plan de mejoras y fases',
                'Cotizacion final segun alcance',
              ],
              featured: true,
              badge: 'MAS PEDIDO',
            },
            {
              id: 'pro',
              title: 'Sitio Empresa',
              subtitle: 'Mas de 15 paginas o ecommerce',
              price: 'Diagnostico desde $149.990',
              description:
                'Para proyectos complejos: ecommerce, multi-sitio o plataformas con logica avanzada.',
              includes: [
                'Auditoria tecnica profunda',
                'Evaluacion de seguridad avanzada',
                'Roadmap de mejoras escalables',
                'Cotizacion final segun alcance',
              ],
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
              to="/servicios"
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

        <div className="mt-16" data-aos="fade-up">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {copy.upgradeTitlePrefix}
              <span className="text-primary">{copy.upgradeTitleHighlight}</span>
              {copy.upgradeTitleSuffix}
            </h3>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-3xl mx-auto">{copy.upgradeSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {copy.plans.map((plan, idx) => (
              <div
                key={plan.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`border-2 p-6 bg-base transition-all duration-300 hover:shadow-lg ${
                  plan.featured
                    ? 'border-primary shadow-md relative'
                    : 'border-gray-200 hover:border-primary'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-6 bg-primary text-gray-900 text-xs font-bold px-3 py-1">
                    {plan.badge}
                  </span>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{plan.title}</h4>
                    <p className="text-xs text-gray-500">{plan.subtitle}</p>
                  </div>
                  <span className="text-primary font-bold text-sm">{plan.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {plan.includes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary font-bold mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contacto"
                  className={`inline-flex items-center text-sm font-bold transition-all duration-300 ${
                    plan.featured
                      ? 'bg-secondary text-white px-4 py-2 hover:bg-primary'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {copy.requestDiagnostic}
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/servicios"
            className="inline-flex items-center bg-secondary text-white font-bold px-6 py-3 hover:bg-primary transition duration-300"
          >
            {copy.viewAllServices}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
