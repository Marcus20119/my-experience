import type { TableProps } from 'antd/lib';
import { COLOR } from '@/shared/assets/styles/constants';
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

interface WeeklyTableProps<T> extends Pick<TableProps, 'loading' | 'scroll'> {
  dataSource?: T[];
}

function WeeklyTable<T extends WeeklyCalendarEntity>({
  dataSource,
  ...props
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
        {...props}
      />
    </AppointmentsCalendarStyled>
  );
}

interface WeeklyCalendarProps<T extends WeeklyCalendarEntity>
  extends WeeklyTableProps<T>,
    Partial<WeeklyContextProps<T>> {}

function WeeklyCalendar<T extends WeeklyCalendarEntity>({
  baseDate = dayjs(),
  dataSource,
  disabledCell,
  endHour = DEFAULT_WEEKLY_CALENDAR_END_TIME,
  hourCellHeight = DEFAULT_HOUR_CELL_HEIGHT,
  itemRender,
  loading,
  onClickItem,
  onCreateNewItem,
  scroll,
  startHour = DEFAULT_WEEKLY_CALENDAR_START_TIME,
  timeFormat = 'H:mm',
  trackLine = {
    color: COLOR.primary,
  },
}: WeeklyCalendarProps<T>) {
  return (
    <WeeklyCalendarProvider<T>
      baseDate={baseDate}
      disabledCell={disabledCell}
      endHour={endHour}
      hourCellHeight={hourCellHeight}
      itemRender={itemRender}
      onClickItem={onClickItem}
      onCreateNewItem={onCreateNewItem}
      startHour={startHour}
      timeFormat={timeFormat}
      trackLine={trackLine}
    >
      <WeeklyTable dataSource={dataSource} loading={loading} scroll={scroll} />
    </WeeklyCalendarProvider>
  );
}

export default WeeklyCalendar;
