import { getIcon } from './IconResolver';
import { useLanguage } from '../../i18n/index.jsx';

function Differentiators() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'Why choose ',
          titleBrand: 'syrtix',
          subtitle: 'Clear process, transparent pricing, and measurable outcomes.',
          cards: [
            {
              id: 'scope',
              icon: 'CheckCircle',
              title: 'Clear scope from day one',
              description:
                'We define deliverables and timelines in writing before development starts.',
            },
            {
              id: 'payments',
              icon: 'DollarSign',
              title: 'Milestone-based payments',
              description:
                'You pay by progress, with visibility on what is delivered at each stage.',
            },
            {
              id: 'ownership',
              icon: 'Lock',
              title: 'Full ownership and access',
              description:
                'Your website, assets, and project access stay in your control.',
            },
            {
              id: 'costs',
              icon: 'Shield',
              title: 'No hidden costs',
              description:
                'Transparent pricing with no surprise charges during the project.',
            },
            {
              id: 'infra',
              icon: 'Server',
              title: 'Usage-based infrastructure',
              description:
                'Hosting and provider licenses are quoted separately based on real usage.',
            },
            {
              id: 'results',
              icon: 'TrendingUp',
              title: 'Conversion-focused execution',
              description:
                'Design and development are focused on turning visits into leads and sales.',
            },
          ],
        }
      : {
          titlePrefix: 'Por que elegir ',
          titleBrand: 'syrtix',
          subtitle: 'Proceso claro, costos transparentes y resultados medibles.',
          cards: [
            {
              id: 'scope',
              icon: 'CheckCircle',
              title: 'Alcance claro desde el inicio',
              description:
                'Definimos entregables y plazos por escrito antes de comenzar.',
            },
            {
              id: 'payments',
              icon: 'DollarSign',
              title: 'Pagos por hitos',
              description:
                'Pagas por avance real, con visibilidad de cada etapa del proyecto.',
            },
            {
              id: 'ownership',
              icon: 'Lock',
              title: 'Propiedad y accesos para ti',
              description:
                'Tu sitio, recursos y accesos quedan bajo tu control.',
            },
            {
              id: 'costs',
              icon: 'Shield',
              title: 'Sin costos ocultos',
              description:
                'Cotizacion transparente, sin cobros sorpresa durante la implementacion.',
            },
            {
              id: 'infra',
              icon: 'Server',
              title: 'Infraestructura segun uso real',
              description:
                'Hosting y licencias de proveedores se cotizan por separado segun consumo.',
            },
            {
              id: 'results',
              icon: 'TrendingUp',
              title: 'Enfoque en conversion',
              description:
                'Disenamos y desarrollamos para transformar visitas en clientes.',
            },
          ],
        };

  return (
    <section className="py-16 px-4 sm:px-6 bg-base2">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleBrand}</span>?
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.cards.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-base p-6 border-2 border-gray-200 hover:border-primary transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-gray-800 transition-all duration-300">
                {getIcon(item.icon, 32)}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Differentiators;
