import { Lock, Shield, Server, CheckCircle } from 'lucide-react';

import { getIcon } from './IconResolver';
import { securityFeatures } from '../../data';

function SecuritySection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Tu seguridad es nuestra <span className="text-primary">prioridad</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            Todos nuestros sitios web incluyen las mejores prácticas de seguridad para proteger tu
            negocio y a tus clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, idx) => (
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
              <span className="text-sm">SSL Seguro</span>
            </div>
            <div className="flex items-center text-white/60">
              <Shield size={20} className="text-green-500 mr-2" />
              <span className="text-sm">Datos protegidos</span>
            </div>
            <div className="flex items-center text-white/60">
              <Server size={20} className="text-green-500 mr-2" />
              <span className="text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center text-white/60">
              <CheckCircle size={20} className="text-green-500 mr-2" />
              <span className="text-sm">OWASP Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;
