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

// ----- WEEKLY CALENDAR -----
export interface WeeklyCalendarEntity {
  endTime: string;
  id: string;
  startTime: string;
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
  startTime: string;
}
