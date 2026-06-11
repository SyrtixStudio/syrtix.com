import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ArrowRight, Check, X } from 'lucide-react';

import { getIcon } from './IconResolver';
import { useLanguage } from '../../i18n/index.jsx';
import PackageDetailModal from '../pricing/PackageDetailModal.jsx';
import { packagesEN, packagesES } from '../../data/plansData.js';
import { usePlans } from '../../hooks/usePlans';

const USD_REFERENCE_RATE = 950;

function PricingSection() {
  const [selectedDetailPackage, setSelectedDetailPackage] = useState(null);
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'Packages & ',
          titleHighlight: 'Pricing',
          subtitle: 'Choose the package that fits your project type and current business stage.',
          helper:
            'Complete solutions for service SMBs: planning, design, development, launch, and post-launch guidance.',
          growthTip: 'Want ongoing growth? We recommend a monthly maintenance plan.',
          fromLabel: 'From',
          emailFootnote: '',
          viewDetails: 'View full package details',
          enterpriseBadge: 'Custom quote',
          enterpriseTitle: 'Need a custom solution?',
          enterpriseDescription:
            'Tell us what you need and we will send a tailored proposal for your project.',
          enterprisePrimaryCta: 'Go to form',
          detailToggleShow: 'View details',
          detailSubtitle: 'Package scope',
          detailClose: 'Close details',
          detailLabels: {
            audience: 'For whom',
            objective: 'Objective',
            focus: 'Focus',
            includes: 'Includes',
            excludes: 'Excludes (scope)',
            webTypes: 'Web Types That Fit',
          },
          packages: packagesEN,
        }
      : {
          titlePrefix: 'Paquetes y ',
          titleHighlight: 'Precios',
          subtitle: 'Elige el paquete que mejor se adapta al tipo de proyecto que necesitas.',
          helper:
            'Soluciones completas para pymes de servicios: planificación, diseño, desarrollo, publicación y acompañamiento post-lanzamiento.',
          growthTip:
            '¿Quieres crecimiento continuo? Recomendamos un plan mensual de mantenimiento.',
          fromLabel: 'Desde',
          emailFootnote: '',
          viewDetails: 'Ver todos los detalles de cada paquete',
          enterpriseBadge: 'Cotización personalizada',
          enterpriseTitle: '¿Necesitas una solución a medida?',
          enterpriseDescription:
            'Cuéntanos qué necesitas y te enviamos una propuesta hecha para tu proyecto.',
          enterprisePrimaryCta: 'Ir al formulario',
          detailToggleShow: 'Ver detalle',
          detailSubtitle: 'Alcance del paquete',
          detailClose: 'Cerrar detalle',
          detailLabels: {
            audience: 'Dirigido a',
            objective: 'Objetivo',
            focus: 'Enfoque',
            includes: 'Incluye',
            excludes: 'No incluye (alcance)',
            webTypes: 'Tipos de webs que sí calzan',
          },
          packages: packagesES,
        };

  const formatPrice = (price) => {
    const formatted = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);

    return lang === 'en' ? `${formatted} CLP` : formatted;
  };

  const formatUsdPrice = (price) => {
    const usdValue = Math.round(price / USD_REFERENCE_RATE);
    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(usdValue);

    return `US$${formatted}`;
  };

  const { plans } = usePlans();

  const visiblePackages = copy.packages.map((pkg) => {
    let dbKey = '';
    if (pkg.id === 'landing-starter') dbKey = 'web-start';
    else if (pkg.id === 'corporate-web') dbKey = 'web-pro';
    else if (pkg.id === 'ecommerce-standard') dbKey = 'web-enterprise';

    const dbPlan = plans[dbKey];

    if (dbPlan) {
      return {
        ...pkg,
        price: dbPlan.isOnOffer ? dbPlan.priceOffer : dbPlan.priceNormal,
        oldPrice: dbPlan.isOnOffer ? dbPlan.priceNormal : null,
        deliveryTime: dbPlan.deliveryTime,
      };
    }

    return {
      ...pkg,
      oldPrice: pkg.price,
      price: pkg.price - 100000,
    };
  });

  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-800 text-gray-800 max-w-2xl mx-auto">
            {copy.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto mt-2">{copy.helper}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {visiblePackages.map((pkg, idx) => {
            const hasOffer = typeof pkg.oldPrice === 'number' && pkg.oldPrice > pkg.price;
            const discountPercent = hasOffer
              ? Math.round(((pkg.oldPrice - pkg.price) / pkg.oldPrice) * 100)
              : null;
            const hasScopeDetails = Boolean(pkg.scopeDetails);

            return (
              <div
                key={pkg.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`relative bg-base border p-6 transition-shadow duration-300 hover:shadow-lg flex flex-col h-full ${
                  pkg.featured ? 'border-secondary' : 'border-gray-200'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-white text-xs font-bold px-4 py-1">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-4 ${
                      pkg.featured ? 'bg-secondary text-white' : 'bg-primary text-gray-800'
                    }`}
                  >
                    {getIcon(pkg.icon, 32)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                </div>

                <div className="text-center mb-6">
                  {hasOffer && (
                    <div className="mb-2 flex flex-col items-center gap-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-secondary bg-secondary/10 border border-secondary/30 rounded-full">
                          {lang === 'en' ? 'OFFER PRICE' : 'PRECIO OFERTA'}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold text-white bg-secondary rounded-full">
                          -{discountPercent}%
                        </span>
                      </div>
                      <span className="text-xs text-gray-600">
                        {lang === 'en' ? 'Before' : 'Antes'}{' '}
                        <span className="line-through decoration-gray-400">
                          {formatPrice(pkg.oldPrice)}
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
                      {copy.fromLabel}
                    </span>
                    <span className="align-middle">{formatPrice(pkg.price)}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">~ {formatUsdPrice(pkg.price)}</div>
                  <div className="text-sm text-gray-600 mt-1">{pkg.paymentType}</div>
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
                        <span className={feature.included ? 'text-gray-800' : 'text-gray-600'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="min-h-[44px] mb-4">
                    {pkg.conditionNote && (
                      <p className="text-[11px] text-gray-600">{pkg.conditionNote}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  {hasScopeDetails && (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedDetailPackage({ name: pkg.name, details: pkg.scopeDetails })
                      }
                      className="w-full inline-flex items-center justify-center py-2 text-xs font-semibold text-gray-800 bg-base2/70 border border-gray-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
                    >
                      {copy.detailToggleShow}
                    </button>
                  )}

                  <Link
                    to={pkg.ctaLink}
                    className={`w-full flex items-center justify-center py-3 font-bold text-sm transition-all duration-300 ${
                      pkg.featured
                        ? 'bg-secondary text-white hover:bg-blue-900'
                        : 'bg-primary text-gray-800 hover:bg-amber-600'
                    }`}
                  >
                    {pkg.ctaText} <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8" data-aos="fade-up">
          <p className="text-xs sm:text-sm text-gray-600 mb-3">{copy.growthTip}</p>
          {copy.emailFootnote && (
            <p className="text-[11px] text-gray-600 mb-3">{copy.emailFootnote}</p>
          )}
          <Link
            to="/paquetes"
            className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors"
          >
            {copy.viewDetails}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>

      <PackageDetailModal
        isOpen={Boolean(selectedDetailPackage)}
        onClose={() => setSelectedDetailPackage(null)}
        title={selectedDetailPackage?.name || ''}
        subtitle={copy.detailSubtitle}
        details={selectedDetailPackage?.details || null}
        labels={copy.detailLabels}
        closeLabel={copy.detailClose}
      />
    </section>
  );
}

export default PricingSection;
