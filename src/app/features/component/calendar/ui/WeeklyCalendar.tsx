import type { TableProps } from 'antd/lib';
import { Table } from 'antd';
import dayjs from 'dayjs';
import type { WeeklyContextProps } from '../context';
import { WeeklyCalendarProvider } from '../context';
import { useGetWeeklyCalendarData, useWeeklyCalendarColumns } from '../lib';
import {
  DEFAULT_HOUR_CELL_HEIGHT,
  DEFAULT_WEEKLY_CALENDAR_END_TIME,
  DEFAULT_WEEKLY_CALENDAR_START_TIME,
  type WeeklyCalendarEntity,
  type WeeklyRow,
} from '../model';
import { AppointmentsCalendarStyled } from './styles';

interface WeeklyTableProps<T> extends Pick<TableProps, 'scroll'> {
  dataSource?: T[];
}

function WeeklyTable<T extends WeeklyCalendarEntity>({
  dataSource,
  scroll,
}: WeeklyTableProps<T>) {
  const { calendarData } = useGetWeeklyCalendarData<T>({
    dataSource,
  });
  const columns = useWeeklyCalendarColumns<T>();

  return (
    <AppointmentsCalendarStyled>
      <Table<WeeklyRow<T>>
        bordered
        columns={columns}
        dataSource={calendarData}
        pagination={false}
        scroll={scroll}
      />
    </AppointmentsCalendarStyled>
  );
}

interface WeeklyCalendarProps<T>
  extends WeeklyTableProps<T>,
    Partial<WeeklyContextProps> {}

function WeeklyCalendar<T extends WeeklyCalendarEntity>({
  baseDate = dayjs(),
  dataSource,
  endHour = DEFAULT_WEEKLY_CALENDAR_END_TIME,
  hourCellHeight = DEFAULT_HOUR_CELL_HEIGHT,
  scroll,
  startHour = DEFAULT_WEEKLY_CALENDAR_START_TIME,
}: WeeklyCalendarProps<T>) {
  return (
    <WeeklyCalendarProvider
      baseDate={baseDate}
      endHour={endHour}
      hourCellHeight={hourCellHeight}
      startHour={startHour}
    >
      <WeeklyTable dataSource={dataSource} scroll={scroll} />
    </WeeklyCalendarProvider>
  );
}

export default WeeklyCalendar;
