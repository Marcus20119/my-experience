import { LATIN_LETTER } from '../constants';

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
 * Returns the Google Maps URL for the given latitude and longitude.
 *
 * @param {null | number} latitude - the latitude of the location
 * @param {null | number} longitude - the longitude of the location
 * @return {string} the Google Maps URL for the location
 */

const getGoogleMapUrl = (
  latitude?: null | number,
  longitude?: null | number,
) => {
  if (latitude && longitude) {
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
  }

  return '';
};

/**
 * Returns the mailto URL for the given email address.
 *
 * @param {null | string} email - the email address to create the mailto URL for
 * @return {string} the mailto URL for the email address
 */

const getMailToUrl = (email?: null | string) => {
  if (!email) return '';

  return `mailto:${email}`;
};

/**
 * Returns the tel URL for the given phone number.
 *
 * @param {null | string} phoneNumber - the phone number to create the tel URL for
 * @return {string} the tel URL for the phone number
 */

const getPhoneCallUrl = (phoneNumber?: null | string) => {
  if (!phoneNumber) return '';

  return `tel:${phoneNumber}`;
};

/**
 * Returns the latinized version of the given string.
 *
 * @param str - the string to latinize
 * @returns the latinized string
 */

const latinize = (str?: null | string) => {
  if (!str) return '';

  return str.replace(/[^A-Za-z0-9[\] ]/g, a => LATIN_LETTER[a] || a);
};

export const TextTool = {
  capitalizeFirstLetter,
  getGoogleMapUrl,
  getMailToUrl,
  getPhoneCallUrl,
  latinize,
  truncateText,
};
