/* eslint-disable perfectionist/sort-interfaces */
import type { Dayjs } from 'dayjs';

export interface MockWeeklyCalendarEntity {
  // Required for the calendar to work
  endTime: Dayjs | string;
  id: string;
  startTime: Dayjs | string;

  // Additional fields
  description?: string;
  title: string;
  color: string;
}

export interface MockWeeklyFilterEntity {
  baseDate: Dayjs;
}
