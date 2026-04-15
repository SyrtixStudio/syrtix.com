import { Link } from 'react-router-dom';

import {
  Phone,
  Mail,
  ChevronRight,
  Instagram,
  Facebook,
  MessageCircle,
  Linkedin,
  Youtube,
} from 'lucide-react';

import { COMPANY, SOCIAL } from '../../constants';
import { useLanguage } from '../../i18n/index.jsx';

function Footer() {
  const { lang } = useLanguage();
  const instagramUrl = SOCIAL.instagram;
  const facebookUrl = SOCIAL.facebook;

  const copy =
    lang === 'en'
      ? {
          tagline: 'Web Development',
          description:
            'Premium web development agency. We build websites that convert visitors into customers with modern technology and professional design.',
          quickLinks: 'Quick links',
          servicesTitle: 'Services',
          contact: 'Contact',
          links: [
            { to: '/', label: 'Home' },
            { to: '/paquetes', label: 'Packages and pricing' },
            { to: '/servicios', label: 'Services' },
            { to: '/nosotros', label: 'About us' },
            { to: '/blog', label: 'Blog' },
            { to: '/contacto', label: 'Contact' },
          ],
          services: [
            'Web design',
            'Custom development',
            'E-commerce',
            'SEO and marketing',
            'Website maintenance',
          ],
          workHours: 'Mon-Fri 9:00-19:00',
          responseTime: 'Reply within 24h',
          followUs: 'Follow us',
          rights: 'All rights reserved.',
          privacy: 'Privacy',
          terms: 'Terms',
          legal: 'Legal notice',
        }
      : {
          tagline: 'Desarrollo Web',
          description:
            'Agencia de desarrollo web premium. Creamos sitios web que convierten visitantes en clientes con tecnologia de vanguardia y Diseño profesional.',
          quickLinks: 'Enlaces rapidos',
          servicesTitle: 'Servicios',
          contact: 'Contacto',
          links: [
            { to: '/', label: 'Inicio' },
            { to: '/paquetes', label: 'Paquetes y precios' },
            { to: '/servicios', label: 'Servicios' },
            { to: '/nosotros', label: 'Nosotros' },
            { to: '/blog', label: 'Blog' },
            { to: '/contacto', label: 'Contacto' },
          ],
          services: [
            'Diseño web',
            'Desarrollo a medida',
            'E-commerce',
            'SEO y marketing',
            'Mantenimiento web',
          ],
          workHours: 'Lun-Vie 9:00-19:00',
          responseTime: 'Respuesta en 24h',
          followUs: 'Siguenos',
          rights: 'Todos los derechos reservados.',
          privacy: 'Privacidad',
          terms: 'Terminos',
          legal: 'Aviso legal',
        };

  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/img/logos/logo6.png"
                  alt="Syrtix Logo"
                  className="w-16 h-16 sm:w-16 sm:h-16 bg-primary object-contain p-1 border border-gray-700"
                  loading="lazy"
                />
                <div>
                  <div className="text-xl font-bold text-white">Syrtix</div>
                  <div className="text-sm text-gray-400">{copy.tagline}</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{copy.description}</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white pb-2 border-b border-gray-700">
              {copy.quickLinks}
            </h3>
            <ul className="space-y-3">
              {copy.links.map((link, index) => (
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

          <div>
            <h3 className="font-bold text-lg mb-6 text-white pb-2 border-b border-gray-700">
              {copy.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {copy.services.map((service, index) => (
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

          <div>
            <h3 className="font-bold text-lg mb-6 text-white pb-2 border-b border-gray-700">
              {copy.contact}
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
                  <div className="text-gray-500 text-xs">{copy.workHours}</div>
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
                  <div className="text-gray-500 text-xs">{copy.responseTime}</div>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-gray-500 text-xs mb-1">{copy.followUs}</p>
                <div className="flex items-center gap-3">
                  {[
                    { href: instagramUrl, label: 'Instagram', icon: <Instagram size={18} /> },
                    { href: facebookUrl, label: 'Facebook', icon: <Facebook size={18} /> },
                    {
                      href: COMPANY.whatsappLink,
                      label: 'WhatsApp',
                      icon: <MessageCircle size={18} />,
                    },
                    {
                      href: SOCIAL.linkedin,
                      label: 'LinkedIn',
                      icon: <Linkedin size={18} />,
                    },
                    {
                      href: SOCIAL.youtube,
                      label: 'YouTube',
                      icon: <Youtube size={18} />,
                    },
                  ].map(
                    (item) =>
                      item.href && (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.label}
                          className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-primary/20 text-gray-200 hover:text-primary transition duration-300 border border-gray-700 hover:border-primary/60"
                        >
                          {item.icon}
                        </a>
                      ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {COMPANY.name}. {copy.rights}
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                to="/politica-privacidad"
                className="text-gray-400 hover:text-primary transition duration-300"
              >
                {copy.privacy}
              </Link>
              <Link
                to="/terminos-condiciones"
                className="text-gray-400 hover:text-primary transition duration-300"
              >
                {copy.terms}
              </Link>
              <Link
                to="/aviso-legal"
                className="text-gray-400 hover:text-primary transition duration-300"
              >
                {copy.legal}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
