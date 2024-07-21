import round from 'lodash-es/round';

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
    .replace(/^[+-]?\d+/, (init) =>
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
    .replace(/^[+-]?\d+/, (init) =>
      init.replace(
        new RegExp(`(\\d)(?=(\\d{${fallbackDigits}})+$)`, 'g'),
        '$1,',
      ),
    )}`;
};

export { formatNumber, formatterInputNumber, parserInputNumber };
