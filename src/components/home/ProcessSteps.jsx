import { useLanguage } from '../../i18n/index.jsx';

const stepImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=300&auto=format&fit=crop&q=80',
];

function ProcessSteps() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          title: 'Our ',
          highlight: 'process',
          subtitle: 'A proven method to deliver exceptional results',
          steps: [
            { step: '01', title: 'Discovery', desc: 'We understand your goals, audience, and competitive landscape' },
            { step: '02', title: 'Design', desc: 'We create mockups and prototypes tailored to your brand' },
            {
              step: '03',
              title: 'Development',
              desc: 'We build with clean, performant, and secure code',
            },
            { step: '04', title: 'Launch', desc: 'We publish, optimize, and guide you post-launch' },
          ],
        }
      : {
          title: 'Nuestro ',
          highlight: 'proceso',
          subtitle: 'Un método probado para entregar resultados excepcionales',
          steps: [
            { step: '01', title: 'Descubrimiento', desc: 'Entendemos tus objetivos, audiencia y panorama competitivo' },
            { step: '02', title: 'Diseño', desc: 'Creamos mockups y prototipos a la medida de tu marca' },
            {
              step: '03',
              title: 'Desarrollo',
              desc: 'Construimos con código limpio, rápido y seguro',
            },
            { step: '04', title: 'Lanzamiento', desc: 'Publicamos, optimizamos y te acompañamos post-lanzamiento' },
          ],
        };

  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 bg-base">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {copy.title}
            <span className="text-primary">{copy.highlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.steps.map((item, idx) => (
            <div
              key={item.step}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={stepImages[idx]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-primary text-gray-800 font-black text-sm w-10 h-10 flex items-center justify-center">
                  {item.step}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
