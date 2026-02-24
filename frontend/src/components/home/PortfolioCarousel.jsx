import { useState, useEffect, useCallback } from 'react';

import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

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

const MOCKUP_PROJECT_IDS = new Set(['ferreteria', 'barberblack', 'clinica', 'burger']);

const portfolio = [
  {
    id: 'bikes',
    titleEs: 'Tienda de bicicletas',
    titleEn: 'Bicycle store',
    category: 'ecommerce',
    image: '/img/img-proyectos/bikes.png',
  },
  {
    id: 'build',
    titleEs: 'Constructora premium',
    titleEn: 'Premium construction company',
    category: 'corporate',
    image: '/img/img-proyectos/buid.png',
  },
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
    image: '/img/img-proyectos/mockup-cafeykuchen.webp',
    url: 'https://kuchen-cafe-cl.vercel.app/',
  },
  {
    id: 'cars',
    titleEs: 'Concesionario de autos',
    titleEn: 'Car dealership',
    category: 'ecommerce',
    image: '/img/img-proyectos/cars.png',
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
    id: 'clothes',
    titleEs: 'Boutique de moda',
    titleEn: 'Fashion boutique',
    category: 'ecommerce',
    image: '/img/img-proyectos/clothes.png',
  },
  {
    id: 'constructora',
    titleEs: 'Constructora elite',
    titleEn: 'Elite construction company',
    category: 'corporate',
    image: '/img/img-proyectos/constructora.png',
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
  {
    id: 'mascotas',
    titleEs: 'Pet shop',
    titleEn: 'Pet shop',
    category: 'ecommerce',
    image: '/img/img-proyectos/mascotas.png',
  },
  {
    id: 'notebooks',
    titleEs: 'Tech store',
    titleEn: 'Tech store',
    category: 'ecommerce',
    image: '/img/img-proyectos/notebooks.png',
  },
  {
    id: 'pasteles',
    titleEs: 'Pasteleria artesanal',
    titleEn: 'Artisan bakery',
    category: 'landing',
    image: '/img/img-proyectos/pasteles.png',
  },
  {
    id: 'pizzeria',
    titleEs: 'Pizzeria italiana',
    titleEn: 'Italian pizzeria',
    category: 'landing',
    image: '/img/img-proyectos/pizzeria.png',
  },
  {
    id: 'veterinaria',
    titleEs: 'Clinica veterinaria',
    titleEn: 'Veterinary clinic',
    category: 'corporate',
    image: '/img/img-proyectos/verinaria.png',
  },
];

function PortfolioCarousel() {
  const { lang } = useLanguage();
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [sharedMockupIndex, setSharedMockupIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 6,
  );
  const totalPages = Math.ceil(portfolio.length / itemsPerView);
  const sharedMockupCount = Math.min(
    ferreteriaMockups.length,
    barberBlackMockups.length,
    clinicaDentMockups.length,
    eatburgerMockups.length,
  );

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'Check our mockups for ',
          titleHighlight: 'your website',
          subtitle:
            'Templates ready to launch your website quickly with the best quality/price ratio.',
          prevProject: 'Previous project',
          nextProject: 'Next project',
          viewProject: 'View project',
          goToProject: 'Go to project',
          categories: {
            ecommerce: 'E-commerce',
            corporate: 'Corporate website',
            landing: 'Landing page',
          },
        }
      : {
          titlePrefix: 'Revisa nuestros mockups para ',
          titleHighlight: 'tu web',
          subtitle:
            'Plantillas listas para entregar tu web lo mas rapido posible y con la mejor calidad/precio del mercado.',
          prevProject: 'Proyecto anterior',
          nextProject: 'Proyecto siguiente',
          viewProject: 'Ver proyecto',
          goToProject: 'Ir a proyecto',
          categories: {
            ecommerce: 'E-commerce',
            corporate: 'Sitio corporativo',
            landing: 'Landing page',
          },
        };

  const nextPortfolio = useCallback(() => {
    setPortfolioIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPortfolio = useCallback(() => {
    setPortfolioIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleMediaChange = (event) => {
      setItemsPerView(event.matches ? 1 : 6);
    };

    setItemsPerView(mediaQuery.matches ? 1 : 6);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
      return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }

    mediaQuery.addListener(handleMediaChange);
    return () => mediaQuery.removeListener(handleMediaChange);
  }, []);

  useEffect(() => {
    const sharedInterval = setInterval(() => {
      setSharedMockupIndex((prev) => (prev + 1) % sharedMockupCount);
    }, 3000);

    return () => clearInterval(sharedInterval);
  }, [sharedMockupCount]);

  useEffect(() => {
    setPortfolioIndex((prev) => prev % totalPages);
  }, [totalPages]);

  const getVisibleItems = () => {
    const startIndex = portfolioIndex * itemsPerView;
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (startIndex + i) % portfolio.length;
      items.push({ ...portfolio[index], originalIndex: index });
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <button
            onClick={prevPortfolio}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-primary p-2 sm:p-3 transition duration-300 group sm:-ml-8"
            aria-label={copy.prevProject}
          >
            <ChevronLeft size={24} className="text-gray-900 group-hover:text-white" />
          </button>

          <button
            onClick={nextPortfolio}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-primary p-2 sm:p-3 transition duration-300 group sm:-mr-8"
            aria-label={copy.nextProject}
          >
            <ChevronRight size={24} className="text-gray-900 group-hover:text-white" />
          </button>

          <div className="overflow-hidden mx-0 sm:mx-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleItems.map((project, idx) => {
                const title = lang === 'en' ? project.titleEn : project.titleEs;
                const category = copy.categories[project.category] || project.category;
                const hasMockupRotation = MOCKUP_PROJECT_IDS.has(project.id);
                const projectMockupIndex = hasMockupRotation ? sharedMockupIndex : 0;
                const projectImage = hasMockupRotation
                  ? project.mockupImages?.[projectMockupIndex] || project.image
                  : project.image;
                const isPortraitMockup =
                  hasMockupRotation &&
                  /mock[-.](ipad|iphone)\.webp$/i.test(projectImage);

                const cardContent = (
                  <>
                    <div className="aspect-video bg-base overflow-hidden">
                      <img
                        src={projectImage}
                        alt={title}
                        className={`w-full h-full ${
                          isPortraitMockup ? 'object-contain' : 'object-cover'
                        } group-hover:scale-105 transition-transform duration-500`}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <span className="text-primary text-xs font-bold mb-1">{category}</span>
                      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                      <span
                        className={`inline-flex items-center text-primary text-sm font-bold ${
                          project.url ? '' : 'opacity-50 cursor-not-allowed'
                        }`}
                      >
                        {copy.viewProject} <ExternalLink size={14} className="ml-1" />
                      </span>
                    </div>

                    <div className="p-4 bg-base">
                      <span className="text-primary text-xs font-bold">{category}</span>
                      <h3 className="text-gray-900 font-bold">{title}</h3>
                    </div>
                  </>
                );

                return project.url ? (
                  <a
                    key={`${project.originalIndex}-${idx}`}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden border border-gray-200 hover:border-primary transition-all duration-300 block"
                    style={{ textDecoration: 'none' }}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div
                    key={`${project.originalIndex}-${idx}`}
                    className="group relative overflow-hidden border border-gray-200 transition-all duration-300 opacity-70 cursor-not-allowed"
                  >
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden sm:flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPortfolioIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === portfolioIndex ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`${copy.goToProject} ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCarousel;
