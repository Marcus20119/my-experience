import vi from '../shared/locales/vi/index';
import en from '../shared/locales/en/index';
import fr from '../shared/locales/fr/index';
import 'react-i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'vi';
    resources: {
      en: typeof en;
      vi: typeof vi;
      fr: typeof fr;
    };
  }
}
