import { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { defaultLang, translations } from './translations';

const LanguageContext = createContext(null);

const getStoredLang = () => {
  if (typeof window === 'undefined') {
    return defaultLang;
  }
  const stored = window.localStorage.getItem('syrtix_lang');
  return stored === 'en' ? 'en' : defaultLang;
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getStoredLang);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('syrtix_lang', lang);
    }
  }, [lang]);

  const t = useMemo(() => {
    return (key) => {
      const langTable = translations[lang] || translations[defaultLang];
      const fallbackTable = translations[defaultLang] || {};
      return (langTable && langTable[key]) || fallbackTable[key] || key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
