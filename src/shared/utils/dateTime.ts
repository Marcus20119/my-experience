import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(isBetween);
dayjs.extend(relativeTime);

/**
 * Formats a date string into the specified template format using dayjs.
 *
 * @param {string} date - The date string to format.
 * @param {string} [template='DD/MM/YYYY'] - The template string to format the date into.
 * @returns {string} The formatted date string.
 */
const formatDate = (date?: Dayjs | null | string, template = 'DD/MM/YYYY') =>
  date ? dayjs(date).format(template) : '';

/**
 * Formats a date range into a string.
 *
 * @param {string} startDate - the start date of the range
 * @param {string} endDate - the end date of the range
 * @return {string} the formatted date range string
 */
const formatDateRange = (
  startDate?: Dayjs | string,
  endDate?: Dayjs | string,
) => {
  const start = startDate ? dayjs(startDate).format('DD/MM/YYYY') : null;
  const end = endDate ? dayjs(endDate).format('DD/MM/YYYY') : null;

  const isSameDate = start === end;

  if (isSameDate) {
    return start;
  }

  const isSameYear = dayjs(startDate).isSame(dayjs(endDate), 'year');

  if (isSameYear) {
    const shortedStart = dayjs(startDate).format('DD/MM');

    return `${shortedStart} - ${end}`;
  }

  return `${start} - ${end}`;
};

/**
 * Merge the time from the second date into the first date.
 *
 * @param {dayjs.Dayjs} date - The date to merge the time into
 * @param {dayjs.Dayjs} time - The time to merge into the date
 * @return {dayjs.Dayjs} - The resulting date with merged time
 */
const mergeDateWithTime = (date: dayjs.Dayjs, time: dayjs.Dayjs) =>
  date.clone().set('hour', time.get('hour')).set('minute', time.get('minute'));

/**
 * Formats the time difference between two dates into a human-readable string.
 *
 * @param {dayjs.Dayjs} startDate - the starting date
 * @param {dayjs.Dayjs} endDate - the ending date
 * @return {string} the formatted time difference string
 */
const formatTimeAgo = (startDate: dayjs.Dayjs, endDate: dayjs.Dayjs) =>
  dayjs(endDate).from(startDate, true);

/**
 * Converts a date string to a Form Picker object using dayjs.
 *
 * @param {string | null} date - The date string to convert.
 * @return {dayjs.Dayjs | undefined} - The Form Picker object representing the date, or undefined if the input is falsy.
 */
const convertDateToFormPicker = (date?: null | string) =>
  date ? dayjs(date) : undefined;

/**
 * Converts a date string to an ISO string for form submission using dayjs.
 *
 * @param {string | null} date - The date string to convert.
 * @return {string | undefined} - The ISO string representing the date, or undefined if the input is falsy.
 */
const formatDateOnSubmitForm = (date?: null | string) =>
  date ? dayjs(date).toISOString() : undefined;

/**
 * Checks if the given date is today.
 *
 * @param {dayjs.Dayjs | string | string | undefined} date - The date to check.
 * @return {boolean} - True if the date is today, false otherwise.
 */

const checkIsToday = (date: Dayjs | string | string | undefined) =>
  dayjs(date).isSame(dayjs(), 'day');

export const DateTimeTool = {
  checkIsToday,
  convertDateToFormPicker,
  formatDate,
  formatDateOnSubmitForm,
  formatDateRange,
  formatTimeAgo,
  mergeDateWithTime,
};
