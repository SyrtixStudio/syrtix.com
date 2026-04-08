import { Lock, Shield, Server, CheckCircle } from 'lucide-react';

import { getIcon } from './IconResolver';
import { useLanguage } from '../../i18n/index.jsx';

function SecuritySection() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'Your security is our ',
          titleHighlight: 'priority',
          subtitle:
            'All our websites include best security practices to protect your business and your customers.',
          features: [
            {
              id: 'ssl',
              icon: 'Lock',
              title: 'SSL/HTTPS certificate',
              description:
                'Encrypted and secure connection. The green lock that builds trust with your visitors.',
            },
            {
              id: 'data',
              icon: 'Shield',
              title: 'Data protection',
              description:
                'We comply with privacy standards. Your data and your customer data are protected.',
            },
            {
              id: 'hosting',
              icon: 'Server',
              title: 'Secure hosting',
              description: 'High-availability servers with automatic backups and DDoS protection.',
            },
            {
              id: 'code',
              icon: 'CheckCircle',
              title: 'Secure code',
              description: 'Development with OWASP best practices to prevent vulnerabilities.',
            },
          ],
          badges: ['Secure SSL', 'Protected data', '99.9% Uptime', 'OWASP Compliant'],
        }
      : {
          titlePrefix: 'Tu seguridad es nuestra ',
          titleHighlight: 'prioridad',
          subtitle:
            'Todos nuestros sitios web incluyen las mejores practicas de seguridad para proteger tu negocio y a tus clientes.',
          features: [
            {
              id: 'ssl',
              icon: 'Lock',
              title: 'Certificado SSL/HTTPS',
              description:
                'Conexion cifrada y segura. El candado verde que genera confianza en tus visitantes.',
            },
            {
              id: 'data',
              icon: 'Shield',
              title: 'Proteccion de datos',
              description:
                'Cumplimos con normativas de privacidad. Tus datos y los de tus clientes estan protegidos.',
            },
            {
              id: 'hosting',
              icon: 'Server',
              title: 'Hosting seguro',
              description: 'Servidores de alta disponibilidad con backups automaticos y proteccion DDoS.',
            },
            {
              id: 'code',
              icon: 'CheckCircle',
              title: 'Codigo seguro',
              description: 'Desarrollo con mejores practicas OWASP para prevenir vulnerabilidades.',
            },
          ],
          badges: ['SSL seguro', 'Datos protegidos', '99.9% Uptime', 'OWASP Compliant'],
        };

  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.features.map((feature, idx) => (
            <div
              key={feature.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white/5 backdrop-blur-sm p-6 border border-white/10 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 text-primary mb-4 rounded-full">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10" data-aos="fade-up" data-aos-delay="400">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center text-white/60">
              <Lock size={20} className="text-green-500 mr-2" />
              <span className="text-sm">{copy.badges[0]}</span>
            </div>
            <div className="flex items-center text-white/60">
              <Shield size={20} className="text-green-500 mr-2" />
              <span className="text-sm">{copy.badges[1]}</span>
            </div>
            <div className="flex items-center text-white/60">
              <Server size={20} className="text-green-500 mr-2" />
              <span className="text-sm">{copy.badges[2]}</span>
            </div>
            <div className="flex items-center text-white/60">
              <CheckCircle size={20} className="text-green-500 mr-2" />
              <span className="text-sm">{copy.badges[3]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;
