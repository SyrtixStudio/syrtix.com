import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';

import { getIcon } from './IconResolver';
import { services } from '../../data';

function ServicesGrid() {
  const upgradePlans = [
    {
      id: 'start',
      title: 'Sitio pequeño',
      subtitle: 'Hasta 5 páginas o secciones',
      price: 'Diagnóstico desde $49.000',
      description:
        'Revisamos tu web actual y definimos el plan exacto de mejora antes de intervenir.',
      includes: [
        'Auditoría técnica y de performance',
        'Detección de riesgos en legacy',
        'Propuesta de mejoras priorizadas',
        'Cotización final según alcance',
      ],
    },
    {
      id: 'grow',
      title: 'Sitio mediano',
      subtitle: '6–15 páginas + módulos',
      price: 'Diagnóstico desde $99.000',
      description:
        'Para sitios con integraciones y flujos críticos que requieren una revisión completa.',
      includes: [
        'Auditoría técnica + UX',
        'Mapa de integraciones y dependencias',
        'Plan de mejoras y fases',
        'Cotización final según alcance',
      ],
      featured: true,
      badge: 'MÁS PEDIDO',
    },
    {
      id: 'pro',
      title: 'Sitio grande',
      subtitle: 'Más de 15 páginas o ecommerce',
      price: 'Diagnóstico desde $149.000',
      description:
        'Para proyectos complejos: ecommerce, multi‑sitio o plataformas con lógica avanzada.',
      includes: [
        'Auditoría técnica profunda',
        'Evaluación de seguridad avanzada',
        'Roadmap de mejoras escalables',
        'Cotización final según alcance',
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-base2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Servicios <span className="text-primary">a la carta</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">
            Elige exactamente lo que necesitas. Servicios individuales o combinados según tu
            proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
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
                    Ver servicio <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16" data-aos="fade-up">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              ¿Ya tienes una web? <span className="text-primary">Mejórala</span> con nosotros
            </h3>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-3xl mx-auto">
              Tomamos tu sitio actual y lo llevamos a su mejor versión: rendimiento, seguridad,
              nuevas funcionalidades y una experiencia que convierta visitantes en clientes.
              Primero hacemos un diagnóstico pagado y luego entregamos la cotización final.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upgradePlans.map((plan, idx) => (
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
                  Solicitar diagnóstico
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
            Ver todos los servicios
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
