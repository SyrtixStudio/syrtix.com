import {
  BarChart,
  Brush,
  Code,
  Gauge,
  GraduationCap,
  Layout,
  LifeBuoy,
  Mail,
  MessageCircle,
  Monitor,
  PenTool,
  QrCode,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Wrench,
  Youtube,
  Image,
} from 'lucide-react';

import { useLanguage } from '../../i18n/index.jsx';

const content = {
  es: {
    title: '¿Buscas comprar o contratar un sitio web en',
    company: 'syrtix',
    intro:
      'Somos una agencia de ingeniería dedicada al desarrollo de experiencias digitales de alto rendimiento. Diseñamos soluciones a medida que garantizan resultados comerciales reales.',
    servicesTitle: 'Nuestra ingeniería de software incluye:',
    services: [
      'Desarrollo de Landing Pages de alta conversión',
      'Desarrollo de Sitios Web Corporativos Pro',
      'Desarrollo de Tiendas Online (E-commerce)',
      'SEO de alta autoridad y arquitectura técnica',
      'Branding, Logotipos e Identidad Visual',
      'Auditorías de Perfomance, Seguridad y UX',
      'Hosting de alta velocidad y correo Pro',
      'Soporte técnico y mantenimiento 24/7',
    ],
    closing:
      'Dile adiós a las plantillas genéricas. Aplicamos ingeniería y diseño estratégico para que tu marca domine el mercado digital.',
    whyEngineering: {
      title: '¿Por qué Ingeniería y no Plantillas?',
      items: [
        { title: 'Velocidad Extrema', desc: 'Nuestros sitios cargan en ms, no segundos. Una plantilla genérica suele pesar 10 veces más.' },
        { title: 'Seguridad Blindada', desc: 'El código a medida no tiene las vulnerabilidades públicas de los plugins de WordPress.' },
        { title: 'Escalabilidad Real', desc: 'Tu web crece contigo. Sin límites técnicos impuestos por un tema pre-hecho.' }
      ]
    }
  },
  en: {
    title: 'Looking to buy or contract a website at',
    company: 'syrtix',
    intro:
      'We are an engineering agency dedicated to developing high-performance digital experiences. We design custom solutions that guarantee real business results.',
    servicesTitle: 'Our software engineering includes:',
    services: [
      'Develop high-conversion Landing Pages',
      'Professional Corporate Web Development',
      'Online Store Development (E-commerce)',
      'High-authority SEO and technical architecture',
      'Branding, Logos and Visual Identity',
      'Performance, Security and UX Audits',
      'High-speed Hosting and Business Email',
      '24/7 Technical Support and Maintenance',
    ],
    closing:
      'Say goodbye to generic templates. We apply engineering and strategic design so your brand dominates the digital market.',
    whyEngineering: {
      title: 'Why Engineering and not Templates?',
      items: [
        { title: 'Extreme Speed', desc: 'Our sites load in ms, not seconds. Generic templates usually weigh 10 times more.' },
        { title: 'Shielded Security', desc: 'Custom code doesn’t have the public vulnerabilities of common WordPress plugins.' },
        { title: 'Real Scalability', desc: 'Your web grows with you. No technical limits imposed by a pre-made theme.' }
      ]
    }
  },
};

function WhatWeDoSection() {
  const { lang } = useLanguage();
  const t = content[lang] || content.es;
  const icons = [
    Code,
    Brush,
    ShoppingCart,
    Search,
    Monitor,
    Smartphone,
    RefreshCw,
    ShieldCheck,
    Wrench,
    MessageCircle,
    QrCode,
    Gauge,
    Layout,
    BarChart,
    GraduationCap,
    Youtube,
    LifeBuoy,
    Mail,
    Image,
    PenTool,
  ];
  const repeatedServices = [...t.services, ...t.services];

  return (
    <section className="bg-base2 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t.title} <span className="text-primary">{t.company}</span>?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">{t.intro}</p>
        <div className="text-base md:text-lg text-gray-700 mb-4">
          <div className="font-semibold text-gray-900 mb-4">{t.servicesTitle}</div>
          <div className="marquee">
            <div className="marquee-track" style={{ '--marquee-duration': '45s' }}>
              {repeatedServices.map((item, i) => {
                const Icon = icons[i % t.services.length];
                const isDuplicate = i >= t.services.length;

                return (
                  <div
                    key={`${item}-${i}`}
                    className="marquee-card bg-base border border-gray-300 px-4 py-3 shadow-sm hover:border-primary hover:shadow-md transition"
                    aria-hidden={isDuplicate ? 'true' : undefined}
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary">
                        <Icon size={18} />
                      </span>
                      <div className="text-sm md:text-gray-500 text-gray-500 font-semibold">{item}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <p className="text-gray-700 md:text-lg text-gray-700 mt-4">{t.closing}</p>

        {/* Sección de Valor: Ingeniería vs Plantillas */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            {t.whyEngineering.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {t.whyEngineering.items.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-primary font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck size={20} />
                  {item.title}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
