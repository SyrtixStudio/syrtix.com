import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useLanguage } from '../../i18n/index.jsx';

const content = {
  es: {
    title: 'Ingeniería digital de ',
    titleHighlight: 'alto rendimiento',
    intro:
      'Desarrollamos sitios web a medida con foco en conversión, velocidad y seguridad. Cada línea de código está diseñada para que tu negocio facture más.',
    services: [
      'Landing Pages de alta conversión',
      'Sitios Corporativos multipágina con SEO técnico',
      'Tiendas Online con checkout seguro',
      'Identidad Visual y Branding estratégico',
      'Hosting seguro con 99.9% uptime',
      'Soporte técnico continuo 24/7',
    ],
    cta: 'Ver paquetes y precios',
    metrics: [
      { value: '800ms', label: 'carga promedio', desc: 'Tus visitas no esperan. Una plantilla tarda 5+ segundos.' },
      { value: '0', label: 'vulnerabilidades', desc: 'Código limpio sin las brechas de seguridad de WordPress.' },
      { value: '99.9%', label: 'uptime garantizado', desc: 'Tu web siempre online con infraestructura profesional.' },
    ],
  },
  en: {
    title: 'High-performance ',
    titleHighlight: 'digital engineering',
    intro:
      'We build custom websites focused on conversion, speed, and security. Every line of code is designed to make your business sell more.',
    services: [
      'High-conversion Landing Pages',
      'Multi-page Corporate Websites with technical SEO',
      'Online Stores with secure checkout',
      'Strategic Branding and Visual Identity',
      'Secure Hosting with 99.9% uptime',
      'Continuous 24/7 technical support',
    ],
    cta: 'View packages & pricing',
    metrics: [
      { value: '800ms', label: 'average load time', desc: 'Your visitors don\'t wait. A template takes 5+ seconds.' },
      { value: '0', label: 'vulnerabilities', desc: 'Clean code without the security gaps of WordPress plugins.' },
      { value: '99.9%', label: 'guaranteed uptime', desc: 'Your website always online with professional infrastructure.' },
    ],
  },
};

function WhatWeDoSection() {
  const { lang } = useLanguage();
  const t = content[lang] || content.es;

  return (
    <section className="bg-base2 py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* Grid principal: Texto + Imagen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda: Copy */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 leading-tight">
              {t.title}
              <span className="text-primary">{t.titleHighlight}</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              {t.intro}
            </p>

            <ul className="space-y-3 mb-8">
              {t.services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-primary/10 flex items-center justify-center">
                    <Check size={13} className="text-primary" strokeWidth={2.5} />
                  </div>
                  <span 
                    className="text-sm md:text-base font-medium leading-relaxed"
                    style={{ color: '#4b5563' }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/paquetes"
              className="inline-flex items-center bg-primary text-gray-800 font-bold px-6 py-3 hover:brightness-110 transition duration-300 text-sm uppercase tracking-wide group"
            >
              {t.cta}
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Columna derecha: Imagen real */}
          <div data-aos="fade-left" className="relative">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
              alt="Dashboard de analytics y métricas de rendimiento web"
              className="w-full aspect-[4/3] object-cover shadow-lg"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-white/75 backdrop-blur-sm px-4 py-2.5 shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">
                  {lang === 'en' ? 'Real-time performance' : 'Rendimiento en tiempo real'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
          {t.metrics.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="p-10 bg-white border-b md:border-b-0 md:border-r border-gray-200 last:border-r-0 last:border-b-0 hover:bg-gray-50 transition-colors duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
              <div className="text-4xl font-black text-secondary mb-1">{item.value}</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mb-4">
                {item.label}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
