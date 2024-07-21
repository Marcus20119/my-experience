import enKeys from './en';
import viKeys from './vi';

type I18n = typeof enKeys & typeof viKeys;

export const en: I18n = enKeys;

export const vi: I18n = viKeys;
