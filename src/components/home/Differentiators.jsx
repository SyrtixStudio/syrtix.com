import { getIcon } from './IconResolver';

const differentiators = [
  {
    id: 'ia',
    icon: 'Zap',
    title: 'Desarrollo con IA',
    description:
      'Utilizamos inteligencia artificial para acelerar el desarrollo y entregar tu sitio web en tiempo récord.',
  },
  {
    id: 'precios',
    icon: 'DollarSign',
    title: 'Precios accesibles',
    description:
      'Planes diseñados para cada presupuesto, sin sacrificar calidad ni funcionalidades.',
  },
  {
    id: 'soporte',
    icon: 'Clock',
    title: 'Soporte 24/7',
    description:
      'Estamos disponibles cuando nos necesites. Soporte técnico continuo para tu tranquilidad.',
  },
  {
    id: 'conversion',
    icon: 'TrendingUp',
    title: 'Enfoque en conversión',
    description:
      'Diseñamos pensando en resultados. Cada elemento optimizado para convertir visitantes en clientes.',
  },
];

function Differentiators() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            ¿Por qué elegir <span className="text-primary">syrtix</span>?
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">
            Combinamos tecnología de vanguardia con diseño centrado en resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, idx) => (
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
