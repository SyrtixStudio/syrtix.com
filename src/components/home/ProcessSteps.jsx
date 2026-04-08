import { useLanguage } from '../../i18n/index.jsx';

function ProcessSteps() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          title: 'Our process',
          highlight: 'process',
          subtitle: 'A proven method to deliver exceptional results',
          steps: [
            { step: '01', title: 'Discovery', desc: 'We understand your goals and needs' },
            { step: '02', title: 'Design', desc: 'We create mockups and prototypes' },
            {
              step: '03',
              title: 'Development',
              desc: 'We build your website with top technologies',
            },
            { step: '04', title: 'Launch', desc: 'We publish and optimize your website' },
          ],
        }
      : {
          title: 'Nuestro proceso',
          highlight: 'proceso',
          subtitle: 'Un metodo probado para entregar resultados excepcionales',
          steps: [
            { step: '01', title: 'Descubrimiento', desc: 'Entendemos tus objetivos y necesidades' },
            { step: '02', title: 'Diseño', desc: 'Creamos mockups y prototipos' },
            {
              step: '03',
              title: 'Desarrollo',
              desc: 'Construimos tu sitio con las mejores tecnologias',
            },
            { step: '04', title: 'Lanzamiento', desc: 'Publicamos y optimizamos tu sitio' },
          ],
        };

  const [prefix, suffix = ''] = copy.title.split(copy.highlight);

  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {prefix}
            <span className="text-primary">{copy.highlight}</span>
            {suffix}
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {copy.steps.map((item, idx) => (
            <div
              key={item.step}
              data-aos="flip-up"
              data-aos-delay={idx * 100}
              className="text-center border border-gray-200 bg-white transition-colors duration-300 hover:border-primary hover:bg-primary/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-gray-800 font-bold text-xl mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSteps;
