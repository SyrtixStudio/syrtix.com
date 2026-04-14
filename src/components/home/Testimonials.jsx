import { useEffect, useMemo, useState } from 'react';

import { Star } from 'lucide-react';

import { testimonials } from '../../data/testimonials.js';
import { useLanguage } from '../../i18n/index.jsx';

const avatarImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80',
];

const formatRelativeReviewTime = (createdAt, lang) => {
  const parsed = new Date(createdAt);
  const referenceDate = new Date();
  if (Number.isNaN(parsed.getTime())) {
    return lang === 'en' ? '3 hours ago' : 'hace 3 horas';
  }

  let diffHours = Math.floor((referenceDate.getTime() - parsed.getTime()) / (1000 * 60 * 60));
  if (diffHours < 0) diffHours = 0;

  if (diffHours < 24) {
    const hours = Math.max(1, diffHours);
    return lang === 'en'
      ? `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`
      : `hace ${hours} ${hours === 1 ? 'hora' : 'horas'}`;
  }

  const days = Math.floor(diffHours / 24);
  const hours = diffHours % 24;

  if (hours === 0) {
    return lang === 'en'
      ? `${days} ${days === 1 ? 'day' : 'days'} ago`
      : `hace ${days} ${days === 1 ? 'dia' : 'dias'}`;
  }

  return lang === 'en' ? `${days}d ${hours}h ago` : `hace ${days} dias ${hours} horas`;
};

function Testimonials() {
  const { lang } = useLanguage();
  const [groupSize, setGroupSize] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'What our ',
          titleHighlight: 'clients',
          titleSuffix: ' say',
          prev: 'Previous',
          next: 'Next',
          goToGroup: 'Go to group',
        }
      : {
          titlePrefix: 'Lo que dicen nuestros ',
          titleHighlight: 'clientes',
          titleSuffix: '',
          prev: 'Anterior',
          next: 'Siguiente',
          goToGroup: 'Ir al grupo',
        };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateGroupSize = () => setGroupSize(mediaQuery.matches ? 3 : 1);
    updateGroupSize();
    mediaQuery.addEventListener('change', updateGroupSize);
    return () => mediaQuery.removeEventListener('change', updateGroupSize);
  }, []);

  const groups = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < testimonials.length; i += groupSize) {
      chunks.push(testimonials.slice(i, i + groupSize));
    }
    return chunks;
  }, [groupSize]);

  useEffect(() => {
    if (groups.length <= 1) return undefined;
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % groups.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [groups.length]);

  useEffect(() => {
    if (activeIndex >= groups.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, groups.length]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + groups.length) % groups.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % groups.length);
  };

  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 bg-base2">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleHighlight}</span>
            {copy.titleSuffix}
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groups[activeIndex]?.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
                className="bg-white p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300 min-h-[220px]"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={avatarImages[(testimonial.id - 1) % avatarImages.length]}
                      alt={testimonial.name}
                      className="h-11 w-11 object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-800 leading-none">{testimonial.name}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        {formatRelativeReviewTime(testimonial.createdAt, lang)}
                      </p>
                    </div>
                  </div>
                  <img
                    src="/img/logo-google.webp"
                    alt="Google"
                    className="h-7 w-7 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="flex mb-3 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {lang === 'en' ? testimonial.textEn : testimonial.textEs}
                </p>
              </div>
            ))}
          </div>

          {groups.length > 1 && (
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  className="h-9 w-9 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label={copy.prev}
                >
                  ‹
                </button>
                <div className="flex items-center gap-2">
                  {groups.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 transition ${
                        idx === activeIndex ? 'bg-secondary w-6' : 'bg-gray-300 w-2.5'
                      }`}
                      aria-label={`${copy.goToGroup} ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  className="h-9 w-9 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                  aria-label={copy.next}
                >
                  ›
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
