import type { Dayjs } from 'dayjs';

/* eslint-disable perfectionist/sort-union-types */
export type Hour =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23;

export enum DayOfWeek {
  Friday = 5,
  Monday = 1,
  Saturday = 6,
  Sunday = 0,
  Thursday = 4,
  Tuesday = 2,
  Wednesday = 3,
}

// ----- DAILY CALENDAR -----
export interface DailyCalendarEntity {
  endTime: Dayjs | string;
  id: string;
  startTime: Dayjs | string;
}

export interface DailyRow<T extends DailyCalendarEntity> {
  data: T[];
}

export interface DailyGroup<T extends DailyCalendarEntity> {
  items: T[];
  startTime: Dayjs | string;
}

export type DailyDisabledCell = (
  | {
      type: 'dayOfWeek';
      dayOfWeek: DayOfWeek;
      hours?: Hour[];
      minutes?: (hour: Hour) => (0 | 30)[];
    }
  | {
      type: 'rangeTime';
      startTime: Dayjs | string;
      endTime: Dayjs | string;
    }
)[];

// ----- WEEKLY CALENDAR -----
export interface WeeklyCalendarEntity {
  endTime: Dayjs | string;
  id: string;
  startTime: Dayjs | string;
}

export interface TimeRange {
  endHour: number;
  startHour: number;
}

export interface WeeklyRow<T extends WeeklyCalendarEntity> {
  friday: T[];
  monday: T[];
  saturday: T[];
  sunday: T[];
  thursday: T[];
  tuesday: T[];
  wednesday: T[];
}

export interface WeeklyGroup<T extends WeeklyCalendarEntity> {
  items: T[];
  startTime: Dayjs | string;
}

export type WeeklyDisabledCell = (
  | {
      type: 'dayOfWeek';
      dayOfWeek: DayOfWeek;
      hours?: Hour[];
      minutes?: (hour: Hour) => (0 | 30)[];
    }
  | {
      type: 'rangeTime';
      startTime: Dayjs | string;
      endTime: Dayjs | string;
    }
)[];

// ----- MONTHLY CALENDAR -----

export interface MonthlyCalendarEntity {
  endTime: Dayjs | string;
  id: string;
  startTime: Dayjs | string;
}

export interface MonthlyRow<T extends WeeklyCalendarEntity> {
  friday: {
    day: Dayjs;
    items: T[];
  };
  monday: {
    day: Dayjs;
    items: T[];
  };
  saturday: {
    day: Dayjs;
    items: T[];
  };
  sunday: {
    day: Dayjs;
    items: T[];
  };
  thursday: {
    day: Dayjs;
    items: T[];
  };
  tuesday: {
    day: Dayjs;
    items: T[];
  };
  wednesday: {
    day: Dayjs;
    items: T[];
  };
}

export interface MonthlyGroup<T extends WeeklyCalendarEntity> {
  items: T[];
  startTime: Dayjs | string;
}

export type MonthlyDisabledCell = (
  | {
      type: 'dayOfWeek';
      dayOfWeek: DayOfWeek;
    }
  | {
      type: 'rangeTime';
      startTime: Dayjs | string;
      endTime: Dayjs | string;
    }
)[];
