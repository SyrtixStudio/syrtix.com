import { useLanguage } from '../../i18n/index.jsx';

const cardImages = [
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80',
];

function Differentiators() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'Why choose ',
          titleBrand: 'Syrtix',
          subtitle: 'Clear process, transparent pricing, and measurable outcomes.',
          cards: [
            {
              id: 'scope',
              title: 'Scope defined in writing',
              description:
                'Before writing a single line of code, we define every deliverable and timeline with you in writing.',
            },
            {
              id: 'payments',
              title: 'Pay by real progress',
              description:
                'You only pay when you see results. No blind advances, no surprise charges along the way.',
            },
            {
              id: 'ownership',
              title: 'Your website is yours',
              description:
                'Source code, domain, and access stay 100% under your control. No vendor lock-in.',
            },
            {
              id: 'results',
              title: 'Designed to sell',
              description:
                'Every design and development decision is oriented towards converting visits into paying customers.',
            },
          ],
        }
      : {
          titlePrefix: 'Por qué elegir ',
          titleBrand: 'Syrtix',
          subtitle: 'Proceso claro, costos transparentes y resultados medibles.',
          cards: [
            {
              id: 'scope',
              title: 'Alcance definido por escrito',
              description:
                'Antes de escribir una línea de código, definimos contigo cada entregable y plazo por escrito.',
            },
            {
              id: 'payments',
              title: 'Pagos por avance real',
              description:
                'Solo pagas cuando ves resultados. Sin anticipos ciegos ni cobros sorpresa durante el proyecto.',
            },
            {
              id: 'ownership',
              title: 'Tu web es tuya',
              description:
                'Código fuente, dominio y accesos quedan 100% bajo tu control. Sin dependencia tecnológica.',
            },
            {
              id: 'results',
              title: 'Diseñado para vender',
              description:
                'Cada decisión de diseño y desarrollo está orientada a convertir visitas en clientes que pagan.',
            },
          ],
        };

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 bg-base2">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleBrand}</span>?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.cards.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={cardImages[idx]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Differentiators;
