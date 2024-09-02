import type { FormConfig } from 'antd/es/config-provider/context';

const enFormConfig: FormConfig = {
  scrollToFirstError: {
    behavior: 'smooth',
    block: 'center',
    scrollMode: 'always',
  },
  validateMessages: {
    required: 'This field is required',
    types: {
      email: 'Please enter a valid email',
    },
  },
};

const frFormConfig: FormConfig = {
  scrollToFirstError: {
    behavior: 'smooth',
    block: 'center',
    scrollMode: 'always',
  },
  validateMessages: {
    required: 'Ce champ est obligatoire',
    types: {
      email: 'Veuillez saisir un e-mail valide',
    },
  },
};

const viFormConfig: FormConfig = {
  scrollToFirstError: {
    behavior: 'smooth',
    block: 'center',
    scrollMode: 'always',
  },
  validateMessages: {
    required: 'Trường này là bắt buộc',
    types: {
      email: 'Vui lòng nhập một email hợp lệ',
    },
  },
};

export const i18nFormConfig = {
  en: enFormConfig,
  fr: frFormConfig,
  vi: viFormConfig,
};
