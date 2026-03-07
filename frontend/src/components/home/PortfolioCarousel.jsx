import { useState, useEffect, useCallback } from 'react';

import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';

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
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMockupIndex, setSelectedMockupIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 6,
  );
  const totalPages = Math.ceil(portfolio.length / itemsPerView);

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'Your next website could look like ',
          titleHighlight: 'this',
          subtitle:
            'Templates ready to launch your website quickly with the best quality/price ratio.',
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
          titlePrefix: 'Tu proxima web puede verse ',
          titleHighlight: 'asi',
          subtitle:
            'Plantillas listas para entregar tu web lo mas rapido posible y con la mejor calidad/precio del mercado.',
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
    setPortfolioIndex((prev) => prev % totalPages);
  }, [totalPages]);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        return;
      }

      if (event.key === 'ArrowRight') {
        setSelectedMockupIndex((prev) => (prev + 1) % selectedProject.mockupImages.length);
      }

      if (event.key === 'ArrowLeft') {
        setSelectedMockupIndex(
          (prev) =>
            (prev - 1 + selectedProject.mockupImages.length) % selectedProject.mockupImages.length,
        );
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setSelectedMockupIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const nextMockup = () => {
    if (!selectedProject) {
      return;
    }

    setSelectedMockupIndex((prev) => (prev + 1) % selectedProject.mockupImages.length);
  };

  const prevMockup = () => {
    if (!selectedProject) {
      return;
    }

    setSelectedMockupIndex(
      (prev) => (prev - 1 + selectedProject.mockupImages.length) % selectedProject.mockupImages.length,
    );
  };

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
                const hasMockups =
                  MOCKUP_PROJECT_IDS.has(project.id) && Array.isArray(project.mockupImages);

                const cardContent = (
                  <>
                    <div className="aspect-video bg-white overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-contain p-2 sm:p-3 group-hover:scale-[1.02] transition-transform duration-500"
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

                return (
                  <button
                    key={`${project.originalIndex}-${idx}`}
                    type="button"
                    onClick={() => (hasMockups ? openProjectModal(project) : undefined)}
                    className={`group relative overflow-hidden border border-gray-200 hover:border-primary transition-all duration-300 block w-full text-left ${
                      hasMockups ? 'cursor-pointer' : 'opacity-70 cursor-not-allowed'
                    }`}
                    disabled={!hasMockups}
                  >
                    {cardContent}
                  </button>
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

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-gray-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeProjectModal}
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'en' ? selectedProject.titleEn : selectedProject.titleEs}
        >
          <div
            className="w-full max-w-5xl bg-white shadow-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-wide">{copy.previewLabel}</p>
                <h3 className="text-gray-900 font-bold text-lg">
                  {lang === 'en' ? selectedProject.titleEn : selectedProject.titleEs}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-primary transition-colors"
                  >
                    {copy.viewProject} <ExternalLink size={14} />
                  </a>
                )}

                <button
                  type="button"
                  onClick={closeProjectModal}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={copy.closeModal}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="relative bg-gray-100">
              <button
                type="button"
                onClick={prevMockup}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white p-2 shadow-md transition-colors"
                aria-label={copy.previousMockup}
              >
                <ChevronLeft size={20} className="text-gray-800" />
              </button>

              <img
                src={selectedProject.mockupImages[selectedMockupIndex]}
                alt={`${lang === 'en' ? selectedProject.titleEn : selectedProject.titleEs} ${selectedMockupIndex + 1}`}
                className="w-full h-[56vh] object-contain p-3 sm:p-6"
              />

              <button
                type="button"
                onClick={nextMockup}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white p-2 shadow-md transition-colors"
                aria-label={copy.nextMockup}
              >
                <ChevronRight size={20} className="text-gray-800" />
              </button>
            </div>

            <div className="px-4 py-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {selectedProject.mockupImages.map((mockupSrc, index) => (
                  <button
                    key={`${selectedProject.id}-thumb-${index}`}
                    type="button"
                    onClick={() => setSelectedMockupIndex(index)}
                    className={`flex-shrink-0 border-2 transition-colors ${
                      index === selectedMockupIndex
                        ? 'border-primary'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    aria-label={`${copy.previewLabel} ${index + 1}`}
                  >
                    <img
                      src={mockupSrc}
                      alt={`${lang === 'en' ? selectedProject.titleEn : selectedProject.titleEs} thumb ${index + 1}`}
                      className="w-20 h-14 object-contain bg-gray-50"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioCarousel;
