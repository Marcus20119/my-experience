import i18n from '@/lib/i18next';
import { UNITS } from '../constants';
import { useLocalStore } from '../stores/local.store';

/**
 * Inverts the given hex color.
 *
 * @param {string} hexColor - the hex color to invert
 * @return {string} the inverted hex color
 */

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

/**
 * Determines the text color (black or white) that contrasts best with the given background color.
 *
 * @param {string} hexColor - the hex color to determine the text color for
 * @return {string} the text color that contrasts best with the given background color
 */

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

export const TextTool = {
  capitalizeFirstLetter,
  formatUnit,
  getGoogleMapUrl,
  getMailToUrl,
  getPhoneCallUrl,
  getTextColorByBgColor,
  invertHexColor,
  truncateText,
};
