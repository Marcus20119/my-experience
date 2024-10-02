import type { Dayjs } from 'dayjs';

export interface MockWeeklyCalendarEntity {
  endTime: string;
  id: string;
  startTime: string;
}

export interface MockWeeklyFilterEntity {
  baseDate: Dayjs;
}
