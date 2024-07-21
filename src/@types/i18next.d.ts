import vi from '../shared/locales/vi/index';
import en from '../shared/locales/en/index';
import 'react-i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof en;
      vi: typeof vi;
    };
  }
}
