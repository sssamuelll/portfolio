import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa los JSON de traducciones
import es from './locales/es.json';
import en from './locales/en.json';

i18n
  .use(LanguageDetector)           // detecta ?lng=, localStorage, navigator
  .use(initReactI18next)
  .init({
    resources: { es: { translation: es }, en: { translation: en } },
    fallbackLng: 'en',
    supportedLngs: ['es', 'en'],
    detection: {
      order: ['querystring','localStorage','navigator'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
    returnEmptyString: false,
  });

export default i18n;
