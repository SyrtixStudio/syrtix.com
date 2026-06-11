import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Check, X, Zap, Star, ArrowRight, Building2, ShoppingCart, Bot, MessageSquare } from 'lucide-react';

import PackageDetailModal from '../components/pricing/PackageDetailModal.jsx';
import SEOHead from '../components/seo/SEOHead';
import { seoData } from '../components/seo/seoData';
import { COMPANY } from '../constants/index.js';
import { useLanguage } from '../i18n/index.jsx';
import { packagesEN, packagesES } from '../data/plansData.js';

const USD_REFERENCE_RATE = 950;

const iconMap = {
  Zap: <Zap size={32} />,
  Code: <Building2 size={32} />,
  ShoppingCart: <ShoppingCart size={32} />,
  Bot: <Bot size={32} />,
  MessageSquare: <MessageSquare size={32} />,
};

const yearlyPrices = {
  'landing-starter': 899000,
  'corporate-web': 1299000,
  'ecommerce-standard': 2499000,
  'ai-chatbot-start': 449000,
  'ai-chatbot-pro': 990000,
  'ai-chatbot-enterprise': 1890000,
};

function Packages() {
  const [selectedDetailPlan, setSelectedDetailPlan] = useState(null);
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          heroBadge: 'Packages and pricing',
          heroTitlePrefix: 'Packages and ',
          heroTitleHighlight: 'Pricing',
          heroDescription:
            'Built for service SMBs in Chile: start lean, then scale to business and enterprise operations.',
          monthlyLabel: 'Setup only',
          yearlyLabel: 'Setup + 12 months maintenance',
          fromLabel: 'From',
          badgePopular: 'MOST POPULAR',
          paymentMonthly: 'single setup payment',
          paymentYearly: 'single payment including annual maintenance',
          emailFootnote: '',
          customTitle: 'Need something more custom?',
          customDescription:
            'Every project is unique. If you need special requirements or additional features, contact us for a tailored quote.',
          customCta: 'Request custom quote',
          moreInfoCta: 'Need more information?',
          fromTag: 'FROM',
          detailToggleShow: 'View details',
          detailSubtitle: 'Package scope',
          detailClose: 'Close details',
          enterpriseBadge: 'Free consultation',
          enterpriseTitle: 'Not sure which package fits your needs?',
          enterpriseDescription:
            "Let's schedule a call to analyze your business model and recommend the most effective digital solution for you.",
          enterprisePrimaryCta: 'Talk to an expert',
          enterpriseSecondaryCta: 'View services',
          detailLabels: {
            audience: 'For whom',
            objective: 'Objective',
            focus: 'Focus',
            includes: 'Includes',
            excludes: 'Excludes (scope)',
            webTypes: 'Web Types That Fit',
          },
          saasOffer: {
            badge: 'NEW SAAS',
            title: 'SaaS Home Page',
            subtitle:
              'A multi-tenant subscription platform for businesses that need a professional home page they can manage themselves without commissioning a separate project.',
            setupLabel: 'Initial setup',
            monthlyLabel: 'Base monthly plan',
            setupNote: 'Includes onboarding, tenant setup, initial branding, and publishing.',
            monthlyNote: 'Includes platform access, operation, and service continuity.',
            includesTitle: 'Includes',
            includes: [
              'Self-manageable home page',
              'Editable colors, images, titles, and descriptions',
              'Self-manageable menú or catalog',
              'Contact form',
              '3 content sections',
              'Initial launch and configuration',
            ],
            primaryCta: 'Request SaaS demo',
            secondaryCta: 'Talk to sales',
          },
          saasSection: {
            title: 'SaaS Services',
            description:
              'Subscription-based products built on a shared platform. You do not buy a separate codebase: you access and manage your business space within our system.',
          },
          customSection: {
            title: 'Custom Services',
            description:
              'These 3 solutions are custom implementation services. We define scope, build the project for your business, and launch it according to the package level you need.',
          },
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
              description:
                'All plans include post-launch guidance to resolve questions and small adjustments.',
            },
          ],
          plans: [
            ...packagesEN.map(p => ({
              ...p,
              icon: iconMap[p.icon] || <Zap size={32} />,
              priceMonthly: p.price,
              oldPriceMonthly: p.oldPrice,
              priceYearly: yearlyPrices[p.id] || Math.round(p.price * 2.5),
              popular: p.featured || false,
              cycleNoteMonthly: p.paymentType,
              cycleNoteYearly: '',
              features: p.features.map(f => ({ name: f.text, included: f.included })),
              cta: p.ctaText,
            })),
          ],
        }
      : {
          heroBadge: 'Paquetes y precios',
          heroTitlePrefix: 'Paquetes y ',
          heroTitleHighlight: 'Precios',
          heroDescription:
            'Hecho para pymes de servicios en Chile: empieza ligero y escala a operaciones de negocio y empresa.',
          monthlyLabel: 'Solo implementación',
          yearlyLabel: 'Implementación + 12 meses mantenimiento',
          fromLabel: 'Desde',
          badgePopular: 'MÁS POPULAR',
          paymentMonthly: 'pago único de implementación',
          paymentYearly: 'pago único incluye mantenimiento anual',
          emailFootnote: '',
          customTitle: '¿Necesitas algo más personalizado?',
          customDescription:
            'Cada proyecto es único. Si necesitas funcionalidades especiales, contáctanos para una cotización a medida.',
          customCta: 'Solicitar cotización personalizada',
          moreInfoCta: '¿Necesitas más información?',
          fromTag: 'DESDE',
          detailToggleShow: 'Ver detalle',
          detailSubtitle: 'Alcance del paquete',
          detailClose: 'Cerrar detalle',
          enterpriseBadge: 'Asesoría gratuita',
          enterpriseTitle: '¿No estás seguro de cuál es tu mejor opción?',
          enterpriseDescription:
            'Hablemos para entender tu modelo de negocio y recomendarte la solución digital más efectiva para ti, sin compromiso.',
          enterprisePrimaryCta: 'Conversar con un experto',
          enterpriseSecondaryCta: 'Ver servicios',
          detailLabels: {
            audience: 'Dirigido a',
            objective: 'Objetivo',
            focus: 'Enfoque',
            includes: 'Incluye',
            excludes: 'No incluye (alcance)',
            webTypes: 'Tipos de webs que sí calzan',
          },
          saasOffer: {
            badge: 'NUEVO SAAS',
            title: 'SaaS Home Page',
            subtitle:
              'Plataforma multi-tenant por suscripción para negocios que necesitan una home page profesional autogestionable sin encargar un proyecto separado.',
            setupLabel: 'Setup inicial',
            monthlyLabel: 'Plan mensual base',
            setupNote: 'Incluye onboarding, configuración del tenant, branding inicial y publicación.',
            monthlyNote: 'Incluye acceso a la plataforma, operación y continuidad del servicio.',
            includesTitle: 'Incluye',
            includes: [
              'Home page autogestionable',
              'Colores, imágenes, títulos y descripciones editables',
              'Menú o catálogo autogestionable',
              'Formulario de contacto',
              '3 secciones de contenido',
              'Lanzamiento y configuración inicial',
            ],
            primaryCta: 'Solicitar demo SaaS',
            secondaryCta: 'Hablar con ventas',
          },
          saasSection: {
            title: 'Servicios SaaS',
            description:
              'Productos por suscripción sobre una plataforma compartida. No compras código: accedes y gestionas tu espacio de negocio dentro de nuestro sistema.',
          },
          customSection: {
            title: 'Servicios a Medida',
            description:
              'Estas 3 soluciones son servicios de implementación personalizada. Definimos alcance, construimos el proyecto para tu negocio y lo lanzamos según el nivel de paquete que necesites.',
          },
          guarantees: [
            {
              title: 'Garantía de satisfacción',
              description: 'Se incluyen iteraciones estratégicas hasta el cierre del alcance acordado.',
            },
            {
              title: 'Entrega rápida',
              description: 'Tu sitio web listo en tiempo récord con nuestro flujo potenciado por IA.',
            },
            {
              title: 'Acompañamiento post-lanzamiento incluido',
              description:
                'Todos los planes incluyen acompañamiento post-lanzamiento para resolver dudas y ajustes menores.',
            },
          ],
          plans: [
            ...packagesES.map(p => ({
              ...p,
              icon: iconMap[p.icon] || <Zap size={32} />,
              priceMonthly: p.price,
              oldPriceMonthly: p.oldPrice,
              priceYearly: yearlyPrices[p.id] || Math.round(p.price * 2.5),
              popular: p.featured || false,
              cycleNoteMonthly: p.paymentType,
              cycleNoteYearly: '',
              features: p.features.map(f => ({ name: f.text, included: f.included })),
              cta: p.ctaText,
            })),
          ],
        };

  const enterprisePlan = copy.plans.find((pkg) => pkg.enterpriseOnly);
  const visiblePlans = copy.plans.filter((pkg) => !pkg.enterpriseOnly);

  const formatPrice = (price) => {
    const discountedPrice = price - 100;
    const formatted = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(discountedPrice);

    return lang === 'en' ? `${formatted} CLP` : formatted;
  };

  const formatUsdPrice = (price) => {
    const discountedPrice = price - 100;
    const usdValue = Math.round(discountedPrice / USD_REFERENCE_RATE);
    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(usdValue);

    return `US$${formatted}`;
  };

  const whatsappDigits = (() => {
    const phoneDigits =
      typeof COMPANY.phone === 'string' && COMPANY.phone.trim()
        ? COMPANY.phone.replace(/[^0-9]/g, '')
        : '';
    if (phoneDigits) return phoneDigits;

    const linkMatch =
      typeof COMPANY.whatsappLink === 'string' ? COMPANY.whatsappLink.match(/wa\.me\/(\d+)/) : null;
    return linkMatch?.[1] || '';
  })();

  const buildPackageWhatsappHref = (pkg) => {
    if (!whatsappDigits) return null;

    const selectedPrice = formatPrice(pkg.priceMonthly);
    const selectedCycle = copy.monthlyLabel;

    const message =
      lang === 'en'
        ? `Hi, I need more information about package "${pkg.name}". Option: ${selectedCycle}. Price: ${selectedPrice}.`
        : `Hola, necesito mas informacion sobre el paquete "${pkg.name}". Opcion: ${selectedCycle}. Precio: ${selectedPrice}.`;

    return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="min-h-screen bg-base">
      <SEOHead
        title={(seoData.paquetes[lang] || seoData.paquetes.es).title}
        description={(seoData.paquetes[lang] || seoData.paquetes.es).description}
        canonical="/paquetes"
        jsonLd={(seoData.paquetes[lang] || seoData.paquetes.es).jsonLd}
      />
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900 mt-20 lg:mt-28">
        <div className="absolute inset-0">
          <img
            src="/img/acuerdo.avif"
            alt="packages background"
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        </div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
            <Zap size={16} className="text-primary mr-2" />
            <span className="text-primary text-xs sm:text-sm font-medium">{copy.heroBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {copy.heroTitlePrefix}
            <span className="text-primary">{copy.heroTitleHighlight}</span>
          </h1>
          <p className="text-gray-300 sm:text-lg mb-8 max-w-2xl mx-auto">{copy.heroDescription}</p>
        </div>
      </section>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 p-8">

        <div className="mb-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {copy.customSection.title}
          </h2>
          <p className="mt-3 text-sm sm:text-gray-700 leading-7 text-gray-800">
            {copy.customSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {visiblePlans.map((pkg, index) => {
            const selectedPrice = pkg.priceMonthly;
            const hasMonthlyOffer =
              typeof pkg.oldPriceMonthly === 'number' && pkg.oldPriceMonthly > selectedPrice;
            const discountPercent = hasMonthlyOffer
              ? Math.round(((pkg.oldPriceMonthly - selectedPrice) / pkg.oldPriceMonthly) * 100)
              : null;
            const hasScopeDetails = Boolean(pkg.scopeDetails);
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
                      pkg.popular ? 'bg-secondary text-white' : 'bg-primary text-gray-800'
                    }`}
                  >
                    {pkg.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                </div>

                <div className="text-center mb-6">
                  {hasMonthlyOffer && (
                    <div className="mb-2 flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-secondary bg-secondary/10 border border-secondary/30 rounded-full">
                          {lang === 'en' ? 'CYBER DAY OFFER' : 'OFERTA CYBER DAY'}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold text-white bg-secondary rounded-full">
                          -{discountPercent}%
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {lang === 'en' ? 'Before' : 'Antes'}{' '}
                        <span className="line-through decoration-gray-400">
                          {formatPrice(pkg.oldPriceMonthly)}
                        </span>
                      </span>
                      {pkg.offerMeta && (
                        <span className="text-[11px] text-secondary font-semibold">
                          {pkg.offerMeta}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="text-3xl sm:text-4xl font-bold text-gray-800">
                    <span className="mr-2 text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-secondary align-middle">
                      {copy.fromTag}
                    </span>
                    <span className="align-middle">{formatPrice(selectedPrice)}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    ~ {formatUsdPrice(selectedPrice)}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{copy.paymentMonthly}</div>
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

                  <div className="min-h-[44px] mb-4">
                    {pkg.conditionNote && (
                      <p className="text-[11px] text-gray-500">{pkg.conditionNote}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  {hasScopeDetails && (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedDetailPlan({ name: pkg.name, details: pkg.scopeDetails })
                      }
                      className="w-full inline-flex items-center justify-center py-2 text-xs font-semibold text-gray-800 bg-base2/70 border border-gray-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
                    >
                      {copy.detailToggleShow}
                    </button>
                  )}

                  <Link
                    to="/contacto"
                    className={`w-full flex items-center justify-center py-3 font-bold text-sm transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-secondary text-white hover:bg-blue-900'
                        : 'bg-primary text-gray-800 hover:bg-amber-600'
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>

                {packageWhatsappHref && (
                  <a
                    href={packageWhatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center justify-center text-sm font-bold text-secondary hover:text-primary transition-all duration-300"
                    onClick={() => {
                      if (window.fbq) {
                        window.fbq('track', 'Contact');
                      }
                    }}
                  >
                    {copy.moreInfoCta}
                  </a>
                )}
              </div>
            );
          })}
        </div>



        <div className="mt-0 pt-8 border-t border-gray-100 mb-8 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{copy.saasSection.title}</h2>
          <p className="mt-3 text-sm sm:text-gray-700 leading-7 text-gray-800">
            {copy.saasSection.description}
          </p>
        </div>

        <div className="relative mb-10 border-2 border-secondary/20 bg-gradient-to-br from-base via-white to-base2/70 p-6 sm:p-8 shadow-sm overflow-hidden group">
          {/* Ribbon "Muy Pronto" */}
          <div className="absolute top-10 -right-12 w-48 bg-amber-500 text-white text-[10px] font-bold py-1.5 uppercase tracking-[0.2em] text-center rotate-45 z-10 shadow-lg border-y border-white/20">
            {lang === 'en' ? 'Coming Soon' : 'Muy pronto'}
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between opacity-60 grayscale-[0.3]">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-secondary bg-secondary/10 border border-secondary/30 rounded-full mb-4">
                {copy.saasOffer.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {copy.saasOffer.title}
              </h2>
              <p className="mt-3 text-sm sm:text-gray-700 leading-7 text-gray-800 max-w-2xl">
                {copy.saasOffer.subtitle}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <div className="border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                    {copy.saasOffer.setupLabel}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-800">{formatPrice(149000)}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{copy.saasOffer.setupNote}</p>
                </div>
                <div className="border border-secondary/30 bg-secondary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                    {copy.saasOffer.monthlyLabel}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-800">{formatPrice(39900)}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {copy.saasOffer.monthlyNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[420px] border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800 mb-4">
                {copy.saasOffer.includesTitle}
              </h3>
              <ul className="space-y-3">
                {copy.saasOffer.includes.map((item) => (
                  <li key={item} className="flex items-start text-sm text-gray-700">
                    <Check size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <div
                  className="inline-flex items-center justify-center bg-gray-400 text-white font-bold px-5 py-3 cursor-not-allowed opacity-70"
                >
                  {copy.saasOffer.primaryCta}
                  <ArrowRight size={18} className="ml-2" />
                </div>
                <div
                  className="inline-flex items-center justify-center border border-gray-300 text-gray-400 font-bold px-5 py-3 cursor-not-allowed opacity-70"
                >
                  {copy.saasOffer.secondaryCta}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-2 border-secondary/30 bg-gradient-to-r from-secondary/10 via-base to-secondary/10 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-secondary bg-secondary/10 border border-secondary/30 rounded-full mb-3">
                {copy.enterpriseBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                {copy.enterpriseTitle}
              </h3>
              <p className="text-sm text-gray-700 mt-2">{copy.enterpriseDescription}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center bg-secondary text-white font-bold px-6 py-3 hover:bg-blue-900 transition-all duration-300"
              >
                {copy.enterprisePrimaryCta}
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.guarantees.map((item) => (
            <div key={item.title} className="text-center p-6">
              <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <PackageDetailModal
        isOpen={Boolean(selectedDetailPlan)}
        onClose={() => setSelectedDetailPlan(null)}
        title={selectedDetailPlan?.name || ''}
        subtitle={copy.detailSubtitle}
        details={selectedDetailPlan?.details || null}
        labels={copy.detailLabels}
        closeLabel={copy.detailClose}
      />
    </main>
  );
}

export default Packages;
