import { Link } from 'react-router-dom';

import { MessageCircle, Phone, Mail, ChevronRight } from 'lucide-react';

import { COMPANY } from '../../constants';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo y Descripción */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/img/logos/logo6.png"
                  alt="syrtix Logo"
                  className="w-16 h-16 sm:w-16 sm:h-16 bg-primary object-contain p-1 border border-gray-700"
                  loading="lazy"
                />
                <div>
                  <div className="text-xl font-bold text-white">syrtix</div>
                  <div className="text-sm text-gray-400">Desarrollo Web</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Agencia de desarrollo web premium. Creamos sitios web que convierten visitantes en
                clientes con tecnología de vanguardia y diseño profesional.
              </p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white pb-2 border-b border-gray-700">
              Enlaces rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Inicio' },
                { to: '/paquetes', label: 'Paquetes y Precios' },
                { to: '/servicios', label: 'Servicios' },
                { to: '/nosotros', label: 'Nosotros' },
                { to: '/contacto', label: 'Contacto' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="flex items-center text-gray-400 hover:text-primary transition duration-300 group text-sm"
                  >
                    <ChevronRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white pb-2 border-b border-gray-700">
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                'Diseño Web',
                'Desarrollo a Medida',
                'E-commerce',
                'SEO y Marketing',
                'Mantenimiento Web',
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="/servicios"
                    className="flex items-center text-gray-400 hover:text-primary transition duration-300 group text-sm"
                  >
                    <ChevronRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white pb-2 border-b border-gray-700">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gray-800 p-2 mr-3">
                  <Phone size={16} className="text-primary" />
                </div>
                <div>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-gray-400 hover:text-primary transition duration-300 text-sm"
                  >
                    {COMPANY.phone}
                  </a>
                  <div className="text-gray-500 text-xs">Lun-Vie 9:00-19:00</div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 p-2 mr-3">
                  <Mail size={16} className="text-primary" />
                </div>
                <div>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-gray-400 hover:text-primary transition duration-300 text-sm"
                  >
                    {COMPANY.email}
                  </a>
                  <div className="text-gray-500 text-xs">Respuesta en 24h</div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="pt-4">
                <p className="text-gray-500 text-xs mb-3">Escríbenos</p>
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 hover:bg-primary hover:text-gray-900 transition duration-300 inline-block"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {COMPANY.name}. Todos los derechos reservados.
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                to="/politica-privacidad"
                className="text-gray-400 hover:text-primary transition duration-300"
              >
                Privacidad
              </Link>
              <Link
                to="/terminos-condiciones"
                className="text-gray-400 hover:text-primary transition duration-300"
              >
                Términos
              </Link>
              <Link
                to="/aviso-legal"
                className="text-gray-400 hover:text-primary transition duration-300"
              >
                Aviso legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
