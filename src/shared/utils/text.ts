import { round } from 'lodash-es';
import i18n from '@/lib/i18next';
import type { Scalars } from '../api/public/schemas';
import { Currency } from '../api/private/schemas';
import { DEFAULT_CURRENCY_UNIT, UNITS } from '../constants';
import { useBusinessStore } from '../stores/businessStore';
import { useLocalStore } from '../stores/localStore';

/**
 * Truncates the given text if it exceeds the specified limit.
 *
 * @param {string} text - the text to truncate
 * @param {number} limit - the character limit to truncate the text
 * @return {string} the truncated text
 */
const truncateText = (text: string, limit = 255) => {
  if (text.length <= limit) return text;
  return `${text.substring(0, limit)}...`;
};

/**
 * Capitalizes the first letter of the input text.
 *
 * @param {string} text - The input text to be capitalized.
 * @return {string} The text with the first letter capitalized.
 */
const capitalizeFirstLetter = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

/**
 * Formats the display name based on the given displayName.
 * The display name is based on the language set in the local store.
 *
 * @param {Scalars['JSON']['input']} displayName - The displayName to format the display name.
 * @return {string} The formatted display name.
 */

const formatDisplayName = (
  displayName?: Scalars['JSON']['input'] | null,
  name?: null | string,
): string => {
  if (!displayName) return name ?? '';

  const language = useLocalStore.getState().language ?? 'vi';

  if (displayName[language]) {
    return displayName[language] as string;
  }

  return (displayName.vi as string) ?? '';
};

const formatMoney = (value?: null | number | string): string => {
  const { currencySymbol, currency } = useBusinessStore.getState();

  const symbol = currencySymbol ?? DEFAULT_CURRENCY_UNIT;
  const precision = currency === Currency.Vnd ? 0 : 2;

  if (!value || isNaN(Number(value))) return `${symbol} 0`;
  const fallbackDigits = 3;
  const roundNum = round(Number(value), precision);

  return `${symbol} ${roundNum
    .toString()
    .replace(/^[+-]?\d+/, init =>
      init.replace(
        new RegExp(`(\\d)(?=(\\d{${fallbackDigits}})+$)`, 'g'),
        '$1,',
      ),
    )}`;
};

const roundedNumber = (
  value: null | number | string,
  digit: number,
): string => {
  if (!value || isNaN(Number(value))) return '0';

  return `${Math.round(Number(value) * Math.pow(10, digit)) / Math.pow(10, digit)}`;
};

const roundedMoney = (value?: null | number | string): string => {
  if (Number(value) > 1000000) {
    return `${roundedNumber(Number(value) / 1000000, 1)}${i18n.t(
      'common.unit.million',
      {
        lng: useLocalStore.getState().language ?? 'vi',
      },
    )}`;
  }

  if (Number(value) > 1000) {
    return `${roundedNumber(Number(value) / 1000, 1)}${i18n.t(
      'common.unit.thousand',
      {
        lng: useLocalStore.getState().language ?? 'vi',
      },
    )}`;
  }

  return String(value ?? 0);
};

const formatRangeMoney = (
  minValue?: null | number | string,
  maxValue?: null | number | string,
): string => {
  const { currencySymbol } = useBusinessStore.getState();
  const symbol = currencySymbol ?? DEFAULT_CURRENCY_UNIT;

  if (minValue === maxValue) return formatMoney(minValue);

  const formattedMinValue = roundedMoney(minValue);
  const formattedMaxValue = roundedMoney(maxValue);

  return `${symbol} ${formattedMinValue} - ${formattedMaxValue}`;
};

const formatUnit = (unit?: null | string): string => {
  if (!unit) return '';

  const unitData = UNITS.find(item => item.name === unit);

  if (!unitData) return '';

  const language = useLocalStore.getState().language ?? 'vi';

  return `/${i18n
    .t(unitData?.nameKey, {
      lng: language,
    })
    .toLowerCase()}`;
};

const getGoogleMapUrl = (
  latitude?: null | number,
  longitude?: null | number,
) => {
  if (latitude && longitude) {
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
  }

  return '';
};

const getMailToUrl = (email?: null | string) => {
  if (!email) return '';

  return `mailto:${email}`;
};

const getPhoneCallUrl = (phoneNumber?: null | string) => {
  if (!phoneNumber) return '';

  return `tel:${phoneNumber}`;
};

export const TextTool = {
  capitalizeFirstLetter,
  truncateText,
  formatDisplayName,
  formatMoney,
  formatUnit,
  formatRangeMoney,
  getGoogleMapUrl,
  getMailToUrl,
  getPhoneCallUrl,
};
