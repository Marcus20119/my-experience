import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { DEFAULT_DATE_FORMAT, DEFAULT_DAY_MONTH_FORMAT } from '../constants';

/**
 * Formats a date string into the specified template format using dayjs.
 *
 * @param {string} date - The date string to format.
 * @returns {string} The formatted date string.
 */
const formatDate = (date?: Dayjs | null | string) =>
  date ? dayjs(date).format(DEFAULT_DATE_FORMAT) : '';

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
  const start = startDate ? dayjs(startDate).format(DEFAULT_DATE_FORMAT) : null;
  const end = endDate ? dayjs(endDate).format(DEFAULT_DATE_FORMAT) : null;

  const isSameDate = start === end;

  if (isSameDate) {
    return start;
  }

  const isSameYear = dayjs(startDate).isSame(dayjs(endDate), 'year');

  if (isSameYear) {
    const shortedStart = dayjs(startDate).format(DEFAULT_DAY_MONTH_FORMAT);

    return `${shortedStart} - ${end}`;
  }

  return `${start} - ${end}`;
};

export const DateTimeTool = {
  formatDate,
  formatDateRange,
};
