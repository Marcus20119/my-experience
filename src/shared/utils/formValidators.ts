import type { Rule } from 'antd/lib/form';
import i18next from 'i18next';
import { useLocalStore } from '../stores/localStore';

const validateRegex = {
  email: /^[^@]+@[^@]+\.[^@.]{2,}$/,
  fullName: /^[a-z0-9 ]{3,100}$/iu,
  nonSpecialCharacters: /^[a-zA-Z0-9_]+$/g,
  number: /^[0-9]+$/iu,
  password:
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%()*#?&^<>])[A-Za-z\d@$!%()*#?&^<> ]{8,}$/,
  phoneNumber: /^[0-9\-+]{9,20}$/,
  url: /(https?:\/\/[^\s]+)/g,
};

interface FieldRules {
  [key: string]: Rule[];
}

export const sharedRules = {
  email: [
    {
      message: i18next.t('common.error.email', {
        lng: useLocalStore.getState().language,
      }),
      pattern: validateRegex.email,
    },
  ],
  phoneNumber: [
    {
      message: i18next.t('common.error.phoneNumber', {
        lng: useLocalStore.getState().language,
      }),
      pattern: validateRegex.phoneNumber,
    },
  ],
} satisfies FieldRules;
