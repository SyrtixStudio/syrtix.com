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

import { useLanguage } from '../../../i18n/index.jsx';
import { landingData } from '../landing.data.js';

function WhatWeDoSection() {
  const { lang } = useLanguage();
  const t = landingData.whatWeDo[lang] || landingData.whatWeDo.es;
  
  const icons = [
    Code, Brush, ShoppingCart, Search, Monitor, Smartphone, RefreshCw, 
    ShieldCheck, Wrench, MessageCircle, QrCode, Gauge, Layout, 
    BarChart, GraduationCap, Youtube, LifeBuoy, Mail, Image, PenTool,
  ];

  // Datos para el carrusel infinito (repetimos para el efecto marquee)
  const servicesList = [
    "Desarrollo de Landing Pages de alta conversión",
    "Desarrollo de Sitios Web Corporativos Pro",
    "Desarrollo de Tiendas Online (E-commerce)",
    "SEO de alta autoridad y arquitectura técnica",
    "Branding, Logotipos e Identidad Visual",
    "Auditorías de Perfomance, Seguridad y UX",
    "Hosting de alta velocidad y correo Pro",
    "Soporte técnico y mantenimiento 24/7"
  ];
  
  const repeatedServices = [...servicesList, ...servicesList];

  return (
    <section className="bg-base2 py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t.title} <span className="text-primary">{t.company}</span>?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">{t.intro}</p>
        
        <div className="text-base md:text-lg text-gray-700 mb-4">
          <div className="font-semibold text-gray-800 mb-4">{t.servicesTitle}</div>
          <div className="marquee">
            <div className="marquee-track" style={{ '--marquee-duration': '45s' }}>
              {repeatedServices.map((item, i) => {
                const Icon = icons[i % servicesList.length];
                const isDuplicate = i >= servicesList.length;

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
        
        <p className="text-gray-700 md:text-lg mt-4">{t.closing}</p>

        {/* Sección de Valor: Ingeniería vs Plantillas */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
            {t.whyEngineeringTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {t.whyEngineeringItems.map((item, i) => (
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
