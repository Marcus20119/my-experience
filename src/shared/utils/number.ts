import round from 'lodash-es/round';
import i18n from '@/lib/i18next';
import { DEFAULT_CURRENCY_UNIT } from '../constants';
import { useLocalStore } from '../stores';

/**
 * Formats the input number into a string with comma separated thousands.
 *
 * @param {number | string | null | undefined} num - the input number to be formatted
 * @return {string} the formatted number as a string
 */
const formatterInputNumber = (
  num: null | number | string | undefined,
): string => {
  if (!num || isNaN(Number(num))) return String(num);

  return `${num
    .toString()
    .replace(/^[+-]?\d+/, init =>
      init.replace(new RegExp(`(\\d)(?=(\\d{${3}})+$)`, 'g'), '$1,'),
    )}`;
};

/**
 * Parses the input number by removing any dollar signs and commas.
 *
 * @param {string | undefined} value - the input number to be parsed
 * @return {string} the parsed input number
 */
const parserInputNumber = (value: string | undefined): string =>
  value ? value.replace(/\$\s?|(,*)/g, '') : '';

/**
 * Formats a number to have a specified number of digits and commas.
 *
 * @param {number | string | null | undefined} num - the number to format
 * @param {number} [digits=3] - the number of digits to round the number to
 * @return {string} the formatted number as a string
 */
const formatNumber = (num: null | number | string | undefined, digits = 3) => {
  if (!num || isNaN(Number(num))) return '0';
  const fallbackDigits = isNaN(Number(digits)) ? 3 : digits;
  const roundNum = round(Number(num), 2);

  return `${roundNum
    .toString()
    .replace(/^[+-]?\d+/, init =>
      init.replace(
        new RegExp(`(\\d)(?=(\\d{${fallbackDigits}})+$)`, 'g'),
        '$1,',
      ),
    )}`;
};

/**
 * Formats the given money value.
 *
 * @param {null | number | string} value - the money value to format
 * @return {string} the formatted money value as a string
 */

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

/**
 * Rounds the given number to the specified number of digits.
 *
 * @param {null | number | string} value - the number to round
 * @param {number} digit - the number of digits to round to
 * @return {string} the rounded number as a string
 */

const roundedNumber = (
  value: null | number | string,
  digit: number,
): string => {
  if (!value || isNaN(Number(value))) return '0';

  return `${Math.round(Number(value) * Math.pow(10, digit)) / Math.pow(10, digit)}`;
};

/**
 * Rounds the given money value to the nearest thousand or million.
 *
 * @param {null | number | string} value - the money value to round
 * @return {string} the rounded money value as a string
 */

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

/**
 * Formats the given range of money values.
 *
 * @param {null | number | string} minValue - the minimum value of the range
 * @param {null | number | string} maxValue - the maximum value of the range
 * @return {string} the formatted range of money values
 *
 */

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

export const NumberTool = {
  formatMoney,
  formatNumber,
  formatRangeMoney,
  formatterInputNumber,
  parserInputNumber,
};
