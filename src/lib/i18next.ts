import enLocales from '@/shared/locales/en';
import viLocales from '@/shared/locales/vi';
import { useLocalStore } from '@/shared/stores/local.store';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: enLocales,
  },
  vi: {
    translation: viLocales,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  lng: useLocalStore.getState().language,
  resources,
});

export default i18n;
