import { useState, useEffect } from 'react';

import { ExternalLink } from 'lucide-react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { useLanguage } from '../../i18n/index.jsx';

const ferreteriaMockups = [
  '/img/img-proyectos/mockups-ferreteria-maestro/mock-general.webp',
  '/img/img-proyectos/mockups-ferreteria-maestro/mock-imac.webp',
  '/img/img-proyectos/mockups-ferreteria-maestro/mock-macbook.webp',
  '/img/img-proyectos/mockups-ferreteria-maestro/mock-ipad.webp',
  '/img/img-proyectos/mockups-ferreteria-maestro/mock-iphone.webp',
];

const barberBlackMockups = [
  '/img/img-proyectos/mockup-barberblack/mock-general.webp',
  '/img/img-proyectos/mockup-barberblack/mock-imac.webp',
  '/img/img-proyectos/mockup-barberblack/mock-macbook.webp',
  '/img/img-proyectos/mockup-barberblack/mock-ipad.webp',
  '/img/img-proyectos/mockup-barberblack/mock.iphone.webp',
];

const clinicaDentMockups = [
  '/img/img-proyectos/mockups-clinicadent/mock-general.webp',
  '/img/img-proyectos/mockups-clinicadent/mock-imac.webp',
  '/img/img-proyectos/mockups-clinicadent/mock-macbook.webp',
  '/img/img-proyectos/mockups-clinicadent/mock-ipad.webp',
  '/img/img-proyectos/mockups-clinicadent/mock-iphone.webp',
];

const eatburgerMockups = [
  '/img/img-proyectos/mockups-eatburger/img-general.webp',
  '/img/img-proyectos/mockups-eatburger/mock-imac.webp',
  '/img/img-proyectos/mockups-eatburger/mock-macbook.webp',
  '/img/img-proyectos/mockups-eatburger/mock-ipad.webp',
  '/img/img-proyectos/mockups-eatburger/mock-iphone.webp',
];

const kuchenCafeMockups = [
  '/img/img-proyectos/mockups-kuchenycafe/mock-general.webp',
  '/img/img-proyectos/mockups-kuchenycafe/mock-imac.webp',
  '/img/img-proyectos/mockups-kuchenycafe/mock-macbook.webp',
  '/img/img-proyectos/mockups-kuchenycafe/mock-ipad.webp',
  '/img/img-proyectos/mockups-kuchenycafe/mock-iphone.webp',
];

const sushiHookMockups = [
  '/img/img-proyectos/mockups-sushi-hook/mock-general.webp',
  '/img/img-proyectos/mockups-sushi-hook/mock-imac.webp',
  '/img/img-proyectos/mockups-sushi-hook/mock-macbook.webp',
  '/img/img-proyectos/mockups-sushi-hook/mock-ipad.webp',
  '/img/img-proyectos/mockups-sushi-hook/mock-iphone.webp',
];

const MOCKUP_PROJECT_IDS = new Set([
  'ferreteria',
  'barberblack',
  'clinica',
  'burger',
  'kuchenycafe',
  'sushihook',
]);

const portfolio = [
  {
    id: 'burger',
    titleEs: 'EatBurger',
    titleEn: 'EatBurger',
    category: 'landing',
    image: eatburgerMockups[0],
    mockupImages: eatburgerMockups,
    url: 'https://eatburger-cl.vercel.app/',
  },
  {
    id: 'kuchenycafe',
    titleEs: 'Kuchen y Café',
    titleEn: 'Kuchen & Coffee',
    category: 'landing',
    image: kuchenCafeMockups[0],
    mockupImages: kuchenCafeMockups,
    url: 'https://kuchen-cafe-cl.vercel.app/',
  },
  {
    id: 'sushihook',
    titleEs: 'Sushi Hook',
    titleEn: 'Sushi Hook',
    category: 'landing',
    image: sushiHookMockups[0],
    mockupImages: sushiHookMockups,
    url: 'https://sushihook-cl.vercel.app/',
  },
  {
    id: 'clinica',
    titleEs: 'Clinica dental',
    titleEn: 'Dental clinic',
    category: 'corporate',
    image: clinicaDentMockups[0],
    mockupImages: clinicaDentMockups,
    url: 'https://clinicadent-cl.vercel.app/',
  },
  {
    id: 'ferreteria',
    titleEs: 'Ferreteria online',
    titleEn: 'Online hardware store',
    category: 'ecommerce',
    image: ferreteriaMockups[0],
    mockupImages: ferreteriaMockups,
  },
  {
    id: 'barberblack',
    titleEs: 'Barbería Black',
    titleEn: 'Barber Black',
    category: 'landing',
    image: barberBlackMockups[0],
    mockupImages: barberBlackMockups,
    url: 'https://barber-black-cl.vercel.app/',
  },
];

function PortfolioCarousel() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'Projects that deliver ',
          titleHighlight: 'results',
          subtitle: 'Every project is custom engineering. This is how Syrtix works.',
          prevProject: 'Previous project',
          nextProject: 'Next project',
          viewProject: 'View project',
          goToProject: 'Go to project',
          closeModal: 'Close modal',
          previousMockup: 'Previous mockup',
          nextMockup: 'Next mockup',
          previewLabel: 'Preview',
          categories: {
            ecommerce: 'E-commerce',
            corporate: 'Corporate website',
            landing: 'Landing page',
          },
        }
      : {
          titlePrefix: 'Proyectos que generan ',
          titleHighlight: 'resultados',
          subtitle: 'Cada proyecto es ingeniería a medida. Así trabaja Syrtix.',
          prevProject: 'Proyecto anterior',
          nextProject: 'Proyecto siguiente',
          viewProject: 'Ver proyecto',
          goToProject: 'Ir a proyecto',
          closeModal: 'Cerrar modal',
          previousMockup: 'Mockup anterior',
          nextMockup: 'Siguiente mockup',
          previewLabel: 'Vista previa',
          categories: {
            ecommerce: 'E-commerce',
            corporate: 'Sitio corporativo',
            landing: 'Landing page',
          },
        };

  return (
    <section className="py-16 bg-base">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="portfolio-swiper-wrapper">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            initialSlide={1}
            coverflowEffect={{
              rotate: 30,
              stretch: 10,
              depth: 120,
              modifier: 1.2,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="portfolio-swiper"
          >
            {portfolio.map((project) => {
              const title = lang === 'en' ? project.titleEn : project.titleEs;
              const category = copy.categories[project.category] || project.category;
              const hasMockups =
                MOCKUP_PROJECT_IDS.has(project.id) && Array.isArray(project.mockupImages);

              return (
                <SwiperSlide key={project.id} className="portfolio-slide">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block w-full h-full text-left cursor-pointer"
                    >
                      <div className="relative overflow-hidden bg-white">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image}
                            alt={title}
                            loading="lazy"
                            className="w-full h-full object-contain p-4 group-hover:scale-[1.05] transition-transform duration-500"
                          />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                          <span className="text-primary text-xs font-bold mb-1">{category}</span>
                          <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                          <span className="inline-flex items-center text-primary text-xs font-bold">
                            {copy.viewProject} <ExternalLink size={13} className="ml-1" />
                          </span>
                        </div>
                      </div>

                      <div className="py-3 px-1 bg-base text-center group-hover:bg-gray-50 transition-colors">
                        <span className="text-primary text-[11px] font-bold uppercase tracking-wide">
                          {category}
                        </span>
                        <h3 className="text-gray-800 font-bold text-sm mt-0.5">{title}</h3>
                      </div>
                    </a>
                  ) : (
                    <div className="group block w-full h-full text-left opacity-80">
                      <div className="relative overflow-hidden bg-white">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image}
                            alt={title}
                            loading="lazy"
                            className="w-full h-full object-contain p-4 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      <div className="py-3 px-1 bg-base text-center">
                        <span className="text-primary text-[11px] font-bold uppercase tracking-wide">
                          {category}
                        </span>
                        <h3 className="text-gray-800 font-bold text-sm mt-0.5">{title}</h3>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>



      <style>{`
        .portfolio-swiper-wrapper {
          position: relative;
          overflow: hidden;
        }
        .portfolio-swiper-wrapper::before,
        .portfolio-swiper-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 15%;
          z-index: 10;
          pointer-events: none;
        }
        .portfolio-swiper-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #fdfdfd 40%, transparent 100%);
        }
        .portfolio-swiper-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #fdfdfd 40%, transparent 100%);
        }
        @media (max-width: 768px) {
          .portfolio-swiper-wrapper::before,
          .portfolio-swiper-wrapper::after {
            width: 6%;
          }
        }
        .portfolio-swiper {
          width: 100%;
          padding: 30px 0 60px !important;
        }
        .portfolio-slide {
          width: 320px !important;
          border: 1px solid #f3f4f6;
          box-shadow: 0 8px 30px rgba(15,23,42,0.10);
          background: #fff;
        }
        @media (min-width: 640px) {
          .portfolio-slide { width: 380px !important; }
        }
        @media (min-width: 1024px) {
          .portfolio-slide { width: 420px !important; }
        }
        .portfolio-swiper .swiper-pagination-bullet {
          background: #9ca3af;
          opacity: 1;
        }
        .portfolio-swiper .swiper-pagination-bullet-active {
          background: #c8aa5a;
          width: 24px;
          border-radius: 4px;
        }
        .portfolio-swiper .swiper-slide-shadow-left,
        .portfolio-swiper .swiper-slide-shadow-right {
          border-radius: 0;
        }
      `}</style>
    </section>
  );
}

export default PortfolioCarousel;
