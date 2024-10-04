import type { Dayjs } from 'dayjs';
import { COLOR } from '@/shared/assets/styles/constants';
import dayjs from 'dayjs';
import { createContext, useContext } from 'react';
import type { Hour, WeeklyCalendarEntity, WeeklyDisabledCell } from '../model';
import {
  DEFAULT_HOUR_CELL_HEIGHT,
  DEFAULT_WEEKLY_CALENDAR_END_TIME,
  DEFAULT_WEEKLY_CALENDAR_START_TIME,
} from '../model';

export interface WeeklyContextProps<
  T extends WeeklyCalendarEntity = WeeklyCalendarEntity,
> {
  baseDate: Dayjs | string;
  disabledCell?: WeeklyDisabledCell;
  endHour: Hour;
  hourCellHeight: number;
  itemRender?: (
    item: T,
    additionalData: {
      groupCount: number;
      height: number;
    },
  ) => React.ReactNode;
  onClickItem?: (item: T) => void;
  onCreateNewItem?: (startTime: Dayjs) => void;
  startHour: Hour;
  timeFormat: 'h:mm A' | 'H:mm';
  trackLine:
    | {
        color?: string;
      }
    | false;
}

const WeeklyCalendarContext = createContext<WeeklyContextProps>({
  baseDate: dayjs(),
  endHour: DEFAULT_WEEKLY_CALENDAR_END_TIME,
  hourCellHeight: DEFAULT_HOUR_CELL_HEIGHT,
  startHour: DEFAULT_WEEKLY_CALENDAR_START_TIME,
  timeFormat: 'H:mm',
  trackLine: {
    color: COLOR.primary,
  },
});

interface ProviderProps<T extends WeeklyCalendarEntity>
  extends WeeklyContextProps<T> {
  children: React.ReactNode;
}

export function WeeklyCalendarProvider<T extends WeeklyCalendarEntity>({
  children,
  ...props
}: ProviderProps<T>) {
  return (
    <WeeklyCalendarContext.Provider value={props as WeeklyContextProps}>
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
