import { getIcon } from './IconResolver';
import { useLanguage } from '../../i18n/index.jsx';

function Differentiators() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'Why choose ',
          titleBrand: 'syrtix',
          subtitle: 'We combine cutting-edge technology with results-driven design',
          cards: [
            {
              id: 'ia',
              icon: 'Zap',
              title: 'AI-powered development',
              description:
                'We use artificial intelligence to speed up development and deliver your website in record time.',
            },
            {
              id: 'pricing',
              icon: 'DollarSign',
              title: 'Affordable pricing',
              description:
                'Plans for every budget without sacrificing quality or key features.',
            },
            {
              id: 'support',
              icon: 'Clock',
              title: '24/7 support',
              description:
                'We are available when you need us. Ongoing technical support for your peace of mind.',
            },
            {
              id: 'conversion',
              icon: 'TrendingUp',
              title: 'Conversion focus',
              description:
                'We design for outcomes. Every element is optimized to turn visitors into customers.',
            },
          ],
        }
      : {
          titlePrefix: 'Por que elegir ',
          titleBrand: 'syrtix',
          subtitle: 'Combinamos tecnologia de vanguardia con diseno centrado en resultados',
          cards: [
            {
              id: 'ia',
              icon: 'Zap',
              title: 'Desarrollo con IA',
              description:
                'Utilizamos inteligencia artificial para acelerar el desarrollo y entregar tu sitio web en tiempo record.',
            },
            {
              id: 'pricing',
              icon: 'DollarSign',
              title: 'Precios accesibles',
              description:
                'Planes disenados para cada presupuesto, sin sacrificar calidad ni funcionalidades.',
            },
            {
              id: 'support',
              icon: 'Clock',
              title: 'Soporte 24/7',
              description:
                'Estamos disponibles cuando nos necesites. Soporte tecnico continuo para tu tranquilidad.',
            },
            {
              id: 'conversion',
              icon: 'TrendingUp',
              title: 'Enfoque en conversion',
              description:
                'Disenamos pensando en resultados. Cada elemento optimizado para convertir visitantes en clientes.',
            },
          ],
        };

  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleBrand}</span>?
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.cards.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-base p-6 border-2 border-gray-200 hover:border-primary transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-gray-900 transition-all duration-300">
                {getIcon(item.icon, 32)}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Differentiators;
