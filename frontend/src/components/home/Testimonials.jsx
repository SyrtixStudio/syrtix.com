import { useEffect, useMemo, useState } from 'react';

import { Star } from 'lucide-react';

import { testimonials } from '../../data/testimonials.js';
import { useLanguage } from '../../i18n/index.jsx';

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
  const avatarPalette = ['bg-violet-500', 'bg-sky-500', 'bg-emerald-500', 'bg-amber-500', 'bg-rose-500'];

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
    <section className="py-16 px-4 sm:px-6 bg-base2">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
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
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all duration-300 min-h-[220px]"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                        avatarPalette[(testimonial.id - 1) % avatarPalette.length]
                      }`}
                    >
                      {testimonial.name.charAt(0).toLowerCase()}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-gray-900 leading-none">{testimonial.name}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        {formatRelativeReviewTime(testimonial.createdAt, lang)}
                      </p>
                    </div>
                  </div>
                  <img
                    src="/img/logo-google.webp"
                    alt="Google"
                    className="h-6 w-6 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="flex mb-3 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-800 text-sm leading-relaxed">
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
                  className="h-9 w-9 border border-gray-300 text-gray-700 hover:border-secondary hover:text-secondary transition"
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
                      className={`h-2.5 w-2.5 transition ${
                        idx === activeIndex ? 'bg-secondary' : 'bg-gray-300'
                      }`}
                      aria-label={`${copy.goToGroup} ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  className="h-9 w-9 border border-gray-300 text-gray-700 hover:border-secondary hover:text-secondary transition"
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
