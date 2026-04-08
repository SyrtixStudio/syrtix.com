import { CheckCircle } from 'lucide-react';

import { useLanguage } from '../../i18n/index.jsx';

function TransparencySection() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'Our focus: ',
          titleHighlight: 'transparency',
          subtitle: 'Clear scope, clear costs, and no misleading promises.',
          points: [
            'We do not sell WordPress templates as custom development.',
            'Scope, deliverables, and timelines are defined from day one.',
            'Infrastructure and licenses are quoted separately based on real usage.',
          ],
        }
      : {
          titlePrefix: 'Nuestro foco: ',
          titleHighlight: 'transparencia',
          subtitle: 'Alcance claro, costos claros y cero promesas engañosas.',
          points: [
            'No vendemos plantillas de WordPress como si fueran desarrollo a medida.',
            'Definimos alcance, entregables y plazos desde el inicio.',
            'Infraestructura y licencias se cotizan por separado segun uso real.',
          ],
        };

  return (
    <section className="py-16 px-4 sm:px-6 bg-base1">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.points.map((point, idx) => (
            <div
              key={point}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-base border-2 border-gray-200 p-6 hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TransparencySection;
