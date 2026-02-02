import { useState, useEffect, useCallback } from 'react';

import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const portfolio = [
  {
    id: 'bikes',
    title: 'Tienda de Bicicletas',
    category: 'E-commerce',
    image: '/img/img-proyectos/bikes.png',
  },
  {
    id: 'build',
    title: 'Constructora Premium',
    category: 'Sitio Corporativo',
    image: '/img/img-proyectos/buid.png',
  },
  {
    id: 'burger',
    title: 'Burger House',
    category: 'Landing Page',
    image: '/img/img-proyectos/burger.png',
  },
  {
    id: 'cafe',
    title: 'Cafetería Gourmet',
    category: 'Landing Page',
    image: '/img/img-proyectos/cafe.png',
  },
  {
    id: 'cars',
    title: 'Concesionario Autos',
    category: 'E-commerce',
    image: '/img/img-proyectos/cars.png',
  },
  {
    id: 'clinica',
    title: 'Clínica Dental',
    category: 'Sitio Corporativo',
    image: '/img/img-proyectos/clinica.png',
  },
  {
    id: 'clothes',
    title: 'Boutique de Moda',
    category: 'E-commerce',
    image: '/img/img-proyectos/clothes.png',
  },
  {
    id: 'constructora',
    title: 'Constructora Élite',
    category: 'Sitio Corporativo',
    image: '/img/img-proyectos/constructora.png',
  },
  {
    id: 'ferreteria',
    title: 'Ferretería Online',
    category: 'E-commerce',
    image: '/img/img-proyectos/ferreteria.png',
  },
  {
    id: 'fishes',
    title: 'Acuario & Peces',
    category: 'Landing Page',
    image: '/img/img-proyectos/fishes.png',
  },
  {
    id: 'mascotas',
    title: 'Pet Shop',
    category: 'E-commerce',
    image: '/img/img-proyectos/mascotas.png',
  },
  {
    id: 'notebooks',
    title: 'Tech Store',
    category: 'E-commerce',
    image: '/img/img-proyectos/notebooks.png',
  },
  {
    id: 'pasteles',
    title: 'Pastelería Artesanal',
    category: 'Landing Page',
    image: '/img/img-proyectos/pasteles.png',
  },
  {
    id: 'pizzeria',
    title: 'Pizzería Italiana',
    category: 'Landing Page',
    image: '/img/img-proyectos/pizzeria.png',
  },
  {
    id: 'veterinaria',
    title: 'Clínica Veterinaria',
    category: 'Sitio Corporativo',
    image: '/img/img-proyectos/verinaria.png',
  },
];

function PortfolioCarousel() {
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const itemsPerView = 6;
  const totalPages = Math.ceil(portfolio.length / itemsPerView);

  const nextPortfolio = useCallback(() => {
    setPortfolioIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPortfolio = useCallback(() => {
    setPortfolioIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const interval = setInterval(nextPortfolio, 5000);
    return () => clearInterval(interval);
  }, [nextPortfolio]);

  const getVisibleItems = () => {
    const startIndex = portfolioIndex * itemsPerView;
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (startIndex + i) % portfolio.length;
      items.push({ ...portfolio[index], originalIndex: index });
    }
    return items;
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Revisa nuestros mockups para <span className="text-primary">tu web</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">
            Plantillas listas para entregar tu web lo más rápido posible y con la mejor calidad/precio del
            mercado.
          </p>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <button
            onClick={prevPortfolio}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-primary p-3 transition duration-300 group -ml-8"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft size={24} className="text-gray-900 group-hover:text-white" />
          </button>

          <button
            onClick={nextPortfolio}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-primary p-3 transition duration-300 group -mr-8"
            aria-label="Proyecto siguiente"
          >
            <ChevronRight size={24} className="text-gray-900 group-hover:text-white" />
          </button>

          <div className="overflow-hidden mx-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleItems().map((project, idx) => (
                <div
                  key={`${project.originalIndex}-${idx}`}
                  className="group relative overflow-hidden border border-gray-200 hover:border-primary transition-all duration-300"
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary text-xs font-bold mb-1">{project.category}</span>
                    <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                    <button className="inline-flex items-center text-primary text-sm font-bold">
                      Ver proyecto <ExternalLink size={14} className="ml-1" />
                    </button>
                  </div>

                  <div className="p-4 bg-base">
                    <span className="text-primary text-xs font-bold">{project.category}</span>
                    <h3 className="text-gray-900 font-bold">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {portfolio.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPortfolioIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === portfolioIndex ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a proyecto ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCarousel;
