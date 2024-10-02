import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { createContext, useContext } from 'react';
import type { Hour } from '../model';
import {
  DEFAULT_HOUR_CELL_HEIGHT,
  DEFAULT_WEEKLY_CALENDAR_END_TIME,
  DEFAULT_WEEKLY_CALENDAR_START_TIME,
} from '../model';

export interface WeeklyContextProps {
  baseDate: Dayjs | string;
  endHour: Hour;
  hourCellHeight: number;
  startHour: Hour;
}

const WeeklyCalendarContext = createContext<WeeklyContextProps>({
  baseDate: dayjs(),
  endHour: DEFAULT_WEEKLY_CALENDAR_END_TIME,
  hourCellHeight: DEFAULT_HOUR_CELL_HEIGHT,
  startHour: DEFAULT_WEEKLY_CALENDAR_START_TIME,
});

interface ProviderProps extends WeeklyContextProps {
  children: React.ReactNode;
}

export function WeeklyCalendarProvider({ children, ...props }: ProviderProps) {
  return (
    <WeeklyCalendarContext.Provider value={props}>
      {children}
    </WeeklyCalendarContext.Provider>
  );
}

export function useWeeklyCalendarContext() {
  const context = useContext(WeeklyCalendarContext);

  if (typeof context === 'undefined') {
    throw new Error(
      'useWeeklyCalendarContext must be used within WeeklyCalendarContext',
    );
  }

  return context;
}
