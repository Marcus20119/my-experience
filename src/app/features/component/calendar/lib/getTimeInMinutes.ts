import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

/**
 * Get time in minutes
 * @param time - time string
 * @returns time in minutes
 */

export const getTimeInMinutes = (time?: Dayjs | null | string | undefined) => {
  if (!time) {
    return 0;
  }

  const hour = dayjs(time).hour();
  const minute = dayjs(time).minute();

  return hour * 60 + minute;
};
