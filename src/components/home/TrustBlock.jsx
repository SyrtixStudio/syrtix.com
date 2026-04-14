import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Lock,
  Shield,
  Server,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

import { testimonials } from '../../data/testimonials.js';
import { useLanguage } from '../../i18n/index.jsx';

/* ─── Paleta de colores para avatares (Estilo Google) ─── */
const avatarPalette = [
  'bg-violet-600',
  'bg-sky-600',
  'bg-emerald-600',
  'bg-amber-600',
  'bg-rose-600',
  'bg-indigo-600'
];

/* ─── Imágenes de pasos del proceso ─── */
const stepImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=300&auto=format&fit=crop&q=80',
];

/* ─── Helpers ─── */
const formatRelativeReviewTime = (createdAt, lang) => {
  const parsed = new Date(createdAt);
  const now = new Date();
  if (Number.isNaN(parsed.getTime())) return lang === 'en' ? '3 hours ago' : 'hace 3 horas';

  let diffH = Math.max(0, Math.floor((now - parsed) / 36e5));
  if (diffH < 24) {
    const h = Math.max(1, diffH);
    return lang === 'en' ? `${h} ${h === 1 ? 'hour' : 'hours'} ago` : `hace ${h} ${h === 1 ? 'hora' : 'horas'}`;
  }
  const d = Math.floor(diffH / 24);
  const h = diffH % 24;
  if (h === 0) return lang === 'en' ? `${d} ${d === 1 ? 'day' : 'days'} ago` : `hace ${d} ${d === 1 ? 'dia' : 'dias'}`;
  return lang === 'en' ? `${d}d ${h}h ago` : `hace ${d} dias ${h} horas`;
};

function TrustBlock() {
  const { lang } = useLanguage();
  const [groupSize, setGroupSize] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ─── Copy i18n ─── */
  const t = lang === 'en' ? {
    testimonialsTitle: 'What our ',
    testimonialsHighlight: 'clients',
    testimonialsSuffix: ' say',
    prev: 'Previous', next: 'Next', goToGroup: 'Go to group',
    processTitle: 'Our ',
    processHighlight: 'process',
    processSubtitle: 'A proven method to deliver exceptional results',
    steps: [
      { step: '01', title: 'Discovery', desc: 'We understand your goals, audience, and competitive landscape' },
      { step: '02', title: 'Design', desc: 'We create mockups and prototypes tailored to your brand' },
      { step: '03', title: 'Development', desc: 'We build with clean, performant, and secure code' },
      { step: '04', title: 'Launch', desc: 'We publish, optimize, and guide you post-launch' },
    ],
    securityTitle: 'Your security is our ',
    securityHighlight: 'priority',
    securitySubtitle: 'All our websites include best security practices to protect your business.',
    securityFeatures: [
      { id: 'ssl', icon: Lock, title: 'SSL/HTTPS certificate', desc: 'Encrypted connections. The green lock that builds trust.' },
      { id: 'data', icon: Shield, title: 'Data protection', desc: 'We comply with privacy standards. Your data is protected.' },
      { id: 'hosting', icon: Server, title: 'Secure hosting', desc: 'High-availability servers with backups and DDoS protection.' },
      { id: 'code', icon: CheckCircle, title: 'Secure code', desc: 'OWASP best practices to prevent vulnerabilities.' },
    ],
    badges: ['Secure SSL', 'Protected data', '99.9% Uptime', 'OWASP Compliant'],
    ctaTitle: 'Request your free quote',
    ctaDesc: 'Tell us about your project and get a custom proposal. No commitments, no hidden fees.',
    ctaPackages: 'View packages',
    ctaQuote: 'Request quote',
  } : {
    testimonialsTitle: 'Lo que dicen nuestros ',
    testimonialsHighlight: 'clientes',
    testimonialsSuffix: '',
    prev: 'Anterior', next: 'Siguiente', goToGroup: 'Ir al grupo',
    processTitle: 'Nuestro ',
    processHighlight: 'proceso',
    processSubtitle: 'Un método probado para entregar resultados excepcionales',
    steps: [
      { step: '01', title: 'Descubrimiento', desc: 'Entendemos tus objetivos, audiencia y panorama competitivo' },
      { step: '02', title: 'Diseño', desc: 'Creamos mockups y prototipos a la medida de tu marca' },
      { step: '03', title: 'Desarrollo', desc: 'Construimos con código limpio, rápido y seguro' },
      { step: '04', title: 'Lanzamiento', desc: 'Publicamos, optimizamos y te acompañamos post-lanzamiento' },
    ],
    securityTitle: 'Tu seguridad es nuestra ',
    securityHighlight: 'prioridad',
    securitySubtitle: 'Todos nuestros sitios incluyen las mejores prácticas de seguridad.',
    securityFeatures: [
      { id: 'ssl', icon: Lock, title: 'Certificado SSL/HTTPS', desc: 'Conexión cifrada y segura. El candado que genera confianza.' },
      { id: 'data', icon: Shield, title: 'Protección de datos', desc: 'Cumplimos normativas de privacidad. Tus datos están protegidos.' },
      { id: 'hosting', icon: Server, title: 'Hosting seguro', desc: 'Servidores de alta disponibilidad con backups y protección DDoS.' },
      { id: 'code', icon: CheckCircle, title: 'Código seguro', desc: 'Mejores prácticas OWASP para prevenir vulnerabilidades.' },
    ],
    badges: ['SSL seguro', 'Datos protegidos', '99.9% Uptime', 'OWASP Compliant'],
    ctaTitle: 'Solicita tu cotización gratuita',
    ctaDesc: 'Cuéntanos sobre tu proyecto y recibe una propuesta personalizada. Sin compromisos, sin costos ocultos.',
    ctaPackages: 'Ver paquetes',
    ctaQuote: 'Solicitar cotización',
  };

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setGroupSize(mq.matches ? 3 : 1);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const groups = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < testimonials.length; i += groupSize) chunks.push(testimonials.slice(i, i + groupSize));
    return chunks;
  }, [groupSize]);

  useEffect(() => {
    if (groups.length <= 1) return undefined;
    const id = setInterval(() => setActiveIndex((p) => (p + 1) % groups.length), 6000);
    return () => clearInterval(id);
  }, [groups.length]);

  useEffect(() => { if (activeIndex >= groups.length) setActiveIndex(0); }, [activeIndex, groups.length]);

  const goPrev = () => setActiveIndex((p) => (p - 1 + groups.length) % groups.length);
  const goNext = () => setActiveIndex((p) => (p + 1) % groups.length);

  const badgeIcons = [Lock, Shield, Server, CheckCircle];

  return (
    <section className="bg-base2">
      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <div className="py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              {t.testimonialsTitle}
              <span className="text-primary">{t.testimonialsHighlight}</span>
              {t.testimonialsSuffix}
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto" />
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {groups[activeIndex]?.map((item, idx) => (
                <div
                  key={item.id}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 150}
                  className="bg-white p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300 min-h-[220px]"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {/* Avatar estilo Google (Inicial + Color) */}
                      <div className={`h-11 w-11 flex items-center justify-center text-white font-bold text-lg rounded-full shadow-sm ${avatarPalette[(item.id - 1) % avatarPalette.length]}`}>
                        {item.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-base font-semibold text-gray-800 leading-none">{item.name}</p>
                        <p className="mt-1 text-xs text-gray-500">{formatRelativeReviewTime(item.createdAt, lang)}</p>
                      </div>
                    </div>
                    <img src="/img/logo-google.webp" alt="Google" className="h-7 w-7 object-contain" loading="lazy" />
                  </div>
                  <div className="flex mb-3 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {lang === 'en' ? item.textEn : item.textEs}
                  </p>
                </div>
              ))}
            </div>

            {groups.length > 1 && (
              <div className="mt-8 flex items-center justify-center gap-3">
                <button type="button" onClick={goPrev} className="h-9 w-9 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors" aria-label={t.prev}>‹</button>
                <div className="flex items-center gap-2">
                  {groups.map((_, idx) => (
                    <button
                      key={idx} type="button" onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 transition ${idx === activeIndex ? 'bg-secondary w-6' : 'bg-gray-300 w-2.5'}`}
                      aria-label={`${t.goToGroup} ${idx + 1}`}
                    />
                  ))}
                </div>
                <button type="button" onClick={goNext} className="h-9 w-9 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors" aria-label={t.next}>›</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ═══════════ PROCESS ═══════════ */}
      <div className="py-20 lg:py-24 px-4 sm:px-6 bg-base">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              {t.processTitle}<span className="text-primary">{t.processHighlight}</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4" />
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">{t.processSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.steps.map((step, idx) => (
              <div
                key={step.step}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={stepImages[idx]} alt={step.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-3 left-3 bg-primary text-gray-800 font-black text-sm w-10 h-10 flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ SECURITY ═══════════ */}
      <div className="py-20 lg:py-24 px-4 sm:px-6 bg-secondary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=30)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t.securityTitle}<span className="text-primary">{t.securityHighlight}</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4" />
            <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">{t.securitySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.securityFeatures.map((f, idx) => {
              const Icon = f.icon;
              return (
                <div key={f.id} data-aos="fade-up" data-aos-delay={idx * 100} className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 text-center hover:bg-white/10 transition-colors duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 text-primary mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{f.title}</h3>
                  <p className="text-white/60 text-sm">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10" data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
              {t.badges.map((badge, i) => {
                const BadgeIcon = badgeIcons[i];
                return (
                  <div key={badge} className="flex items-center text-white/60">
                    {i > 0 && <div className="hidden sm:block w-px h-4 bg-white/20 mr-6 sm:mr-8" />}
                    <BadgeIcon size={18} className="text-green-400 mr-2" />
                    <span className="text-sm">{badge}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════ CTA FINAL ═══════════ */}
      <div className="py-20 lg:py-24 px-4 sm:px-6 bg-base">
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{t.ctaTitle}</h2>
          <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/paquetes"
              className="bg-primary text-gray-800 font-bold px-7 py-3.5 hover:brightness-110 transition duration-300 flex items-center justify-center text-sm uppercase tracking-wide group"
            >
              {t.ctaPackages}
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contacto"
              className="border border-secondary text-secondary font-bold px-7 py-3.5 hover:bg-secondary hover:text-white transition duration-300 flex items-center justify-center text-sm uppercase tracking-wide"
            >
              {t.ctaQuote}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustBlock;
