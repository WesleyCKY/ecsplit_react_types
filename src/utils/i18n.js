import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      "paragraph": "react-i18next is a powerful internationalization framework for React / React Native which is based on i18next."
    }
  },
 
  zh : {
    translation: {
      "paragraph": "react-i18next est un puissant framework d'internationalisation pour React / React Native basé sur i18next."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;