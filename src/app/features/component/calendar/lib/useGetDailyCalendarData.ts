import dayjs from 'dayjs';
import { useMemo } from 'react';
import { type DailyCalendarEntity, type DailyRow } from '../model';

interface Props<T extends DailyCalendarEntity> {
  dataSource?: T[];
}

export const useGetDailyCalendarData = <T extends DailyCalendarEntity>({
  dataSource,
}: Props<T>) => {
  const calendarData: DailyRow<T>[] = useMemo(() => {
    const formattedDataSource: T[] =
      dataSource?.map(item => ({
        ...item,
        endTime: dayjs(item.endTime).second(0).millisecond(0),
        startTime: dayjs(item.startTime).second(0).millisecond(0),
      })) ?? [];

    return [{ data: formattedDataSource }];
  }, [dataSource]);

  return { calendarData };
};
