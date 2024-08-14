import { round } from 'lodash-es';
import i18n from '@/lib/i18next';
import { DEFAULT_CURRENCY_UNIT, UNITS } from '../constants';
import { useLocalStore } from '../stores/local.store';

const invertHexColor = (hexColor: string): string => {
  // Remove the '#' character if present
  const hex = hexColor.replace('#', '');

  // Handle shorthand hex notation (e.g., #fff)
  const expandedHex =
    hex.length === 3
      ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      : hex;

  // Convert hex to decimal
  const r = parseInt(expandedHex.substring(0, 2), 16);
  const g = parseInt(expandedHex.substring(2, 4), 16);
  const b = parseInt(expandedHex.substring(4, 6), 16);
  // Invert colors
  const invertedR = 255 - r;
  const invertedG = 255 - g;
  const invertedB = 255 - b;

  // Convert back to hex and pad with zeros if necessary
  const invertedHexR = invertedR.toString(16).padStart(2, '0');
  const invertedHexG = invertedG.toString(16).padStart(2, '0');
  const invertedHexB = invertedB.toString(16).padStart(2, '0');

  return `#${invertedHexR}${invertedHexG}${invertedHexB}`;
};

function getTextColorByBgColor(hexColor: string): string {
  // Remove the '#' character if present
  const hex = hexColor.replace('#', '');

  // Handle shorthand hex notation (e.g., #fff)
  const expandedHex =
    hex.length === 3
      ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      : hex;

  // Convert hex to decimal
  const r = parseInt(expandedHex.substring(0, 2), 16);
  const g = parseInt(expandedHex.substring(2, 4), 16);
  const b = parseInt(expandedHex.substring(4, 6), 16);
  // Calculate luminance (perceptual brightness)
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  // Determine if color is darker or lighter than neutral
  return luminance < 0.5 ? '#ffffff' : '#000000';
}

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

const formatMoney = (value?: null | number | string): string => {
  const symbol = DEFAULT_CURRENCY_UNIT;
  const precision = 2;

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
  const symbol = DEFAULT_CURRENCY_UNIT;

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
  formatMoney,
  formatRangeMoney,
  formatUnit,
  getGoogleMapUrl,
  getMailToUrl,
  getPhoneCallUrl,
  getTextColorByBgColor,
  invertHexColor,
  truncateText,
};
