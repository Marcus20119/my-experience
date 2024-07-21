import enKeys from './en';
import frKeys from './fr';
import viKeys from './vi';

type I18n = typeof enKeys & typeof frKeys & typeof viKeys;

export const en: I18n = enKeys;

export const fr: I18n = frKeys;

export const vi: I18n = viKeys;
