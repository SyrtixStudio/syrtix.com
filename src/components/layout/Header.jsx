import { useEffect, useRef, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Home, Package, Users, Briefcase, Mail, Phone, BookOpen } from 'lucide-react';

import { COMPANY } from '../../constants';
import { useLanguage } from '../../i18n/index.jsx';

function Header() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollingDown = useRef(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const toggleLang = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const languageShortLabel =
    lang === 'es' ? t('language.englishShort') : t('language.spanishShort');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        scrollingDown.current = false;
        return;
      }

      const difference = Math.abs(currentScrollY - lastScrollY.current);

      if (difference < 20) {
        return;
      }

      if (currentScrollY > lastScrollY.current + 20) {
        if (!scrollingDown.current) {
          scrollingDown.current = true;
          setHidden(true);
          lastScrollY.current = currentScrollY;
        }
      } else if (currentScrollY < lastScrollY.current - 20) {
        if (scrollingDown.current) {
          scrollingDown.current = false;
          setHidden(false);
          lastScrollY.current = currentScrollY;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    if (path === '/paquetes') {
      return location.pathname.startsWith('/paquetes');
    }
    if (path === '/servicios') {
      return location.pathname.startsWith('/servicios');
    }
    return location.pathname === path;
  };

  const getLinkClasses = (path) => {
    const baseClasses =
      'px-3 md:px-4 py-2 md:py-2.5 font-medium transition-all duration-300 flex items-center text-sm';
    const activeClasses = 'text-primary border-b-2 border-[var(--color-primary)]';
    const inactiveClasses =
      'text-gray-800 hover:text-primary hover:border-b-2 hover:border-[var(--color-primary)]';
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const navItems = [
    { path: '/', labelKey: 'nav.home', icon: <Home size={20} /> },
    { path: '/paquetes', labelKey: 'nav.packages', icon: <Package size={20} /> },
    { path: '/servicios', labelKey: 'nav.services', icon: <Briefcase size={20} /> },
    { path: '/nosotros', labelKey: 'nav.about', icon: <Users size={20} /> },
    { path: '/blog', labelKey: 'nav.blog', icon: <BookOpen size={20} /> },
    { path: '/contacto', labelKey: 'nav.contact', icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* Header Desktop */}
      <header
        className={`hidden lg:block w-full fixed top-0 left-0 z-50 bg-base border-b-4 border-primary transition-transform duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Barra superior */}
        <div className="bg-secondary text-white py-2 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3 text-sm">
              <div className="flex items-center">
                <Phone size={14} className="mr-1.5" />
                <span>{COMPANY.phoneFormatted || COMPANY.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-1.5" />
                <span className="text-xs">contacto@syrtix.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <span>Syrtix.com</span>
              <button
                type="button"
                onClick={toggleLang}
                className="border border-white/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide hover:bg-white hover:text-secondary transition-colors"
                aria-label={t('language.toggle')}
              >
                {languageShortLabel}
              </button>
            </div>
          </div>
        </div>

        {/* Navegación principal */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-16 h-16 flex items-center justify-center p-1 rounded-none border border-base2 bg-primary">
                <img
                  src="/img/logos/logo6.png"
                  alt="syrtix.com"
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-800">Syrtix</div>
                <div className="text-sm text-gray-600">{t('brand.tagline')}</div>
              </div>
            </Link>

            {/* Navegación desktop */}
            <nav className="flex items-center space-x-0.5">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className={getLinkClasses(item.path)}>
                  <span className="mr-1.5">{item.icon}</span>
                  {t(item.labelKey)}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Header Mobile */}
      <header className="lg:hidden w-full fixed top-0 left-0 z-50 border-b-2 border-primary">
        {/* Barra superior móvil */}
        <div className="bg-secondary text-white py-2 px-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Phone size={14} className="mr-1.5" />
              <span className="text-xs">{COMPANY.phoneFormatted || COMPANY.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <span>Syrtix.com</span>
              <button
                type="button"
                onClick={toggleLang}
                className="border border-white/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide hover:bg-white hover:text-secondary transition-colors"
                aria-label={t('language.toggle')}
              >
                {languageShortLabel}
              </button>
            </div>
          </div>
        </div>

        {/* Barra de navegación móvil con logo e iconos */}
        <div className="bg-base border-t border-gray-200">
          <div className="flex items-center">
            {/* Logo móvil */}
            <Link
              to="/"
              className="flex items-center justify-center px-3 py-2 border-r border-primary"
            >
              <img
                src="/img/logos/logo6.png"
                alt="syrtix.com"
                className="h-16 w-16 object-contain bg-primary p-1"
                draggable="false"
              />
            </Link>

            {/* Navegación móvil */}
            <nav className="flex justify-around items-center flex-1 bg-base/50">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center justify-center py-2 px-1 flex-1 transition-colors ${
                    isActive(item.path) ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  <span className="mb-1">{item.icon}</span>
                  <span className="text-[10px] font-medium">{t(item.labelKey)}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
