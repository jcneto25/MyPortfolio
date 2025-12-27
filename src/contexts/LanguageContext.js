import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { translations, i18nConfig } from '../i18n';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(i18nConfig.defaultLanguage);
  const [isClient, setIsClient] = useState(false);

  // Initialize language on mount
  useEffect(() => {
    setIsClient(true);

    // Priority 1: URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get(i18nConfig.urlParamKey);

    // Priority 2: localStorage
    const storedLang = localStorage.getItem(i18nConfig.localStorageKey);

    // Determine initial language
    const initialLang = urlLang || storedLang || i18nConfig.defaultLanguage;

    // Validate language
    if (i18nConfig.languages.includes(initialLang)) {
      setLanguageState(initialLang);
    }
  }, []);

  // Update URL and localStorage when language changes
  const setLanguage = (newLanguage) => {
    if (!i18nConfig.languages.includes(newLanguage)) {
      console.warn(`Invalid language: ${newLanguage}`);
      return;
    }

    setLanguageState(newLanguage);

    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(i18nConfig.localStorageKey, newLanguage);

      // Update URL parameter without triggering navigation
      const url = new URL(window.location);
      url.searchParams.set(i18nConfig.urlParamKey, newLanguage);
      window.history.replaceState({}, '', url);
    }
  };

  const t = useMemo(() => {
    return (key) => {
      const keys = key.split('.');
      let value = translations[language];

      for (const k of keys) {
        if (value && typeof value === 'object') {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }

      return value || key;
    };
  }, [language]);

  const value = {
    language,
    setLanguage,
    t,
    isClient
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
