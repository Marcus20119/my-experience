import dayjs from 'dayjs';
import type { MockWeeklyCalendarEntity } from './mockTypes';
import { CALENDAR_COLORS } from './calendarColors';

export const mockWeeklyData: MockWeeklyCalendarEntity[] = [
  {
    color: CALENDAR_COLORS[1],
    description: 'Sprint planning',
    endTime: dayjs().day(1).hour(8).minute(0).toISOString(),
    id: '1',
    startTime: dayjs().day(1).hour(7).minute(0).toISOString(),
    title: 'Meeting',
  },
  {
    color: CALENDAR_COLORS[4],
    description: 'Share the progress of the week',
    endTime: dayjs().day(1).hour(10).minute(15).toISOString(),
    id: '2',
    startTime: dayjs().day(1).hour(7).minute(0).toISOString(),
    title: 'Weekly sharing',
  },
  {
    color: CALENDAR_COLORS[0],
    description: 'Discuss the family vacation plan',
    endTime: dayjs().day(1).hour(9).minute(30).toISOString(),
    id: '3',
    startTime: dayjs().day(1).hour(7).minute(0).toISOString(),
    title: 'Family meeting',
  },
  {
    color: CALENDAR_COLORS[0],
    description: 'Watch the new movie',
    endTime: dayjs().day(1).hour(7).minute(45).toISOString(),
    id: '4',
    startTime: dayjs().day(1).hour(7).minute(0).toISOString(),
    title: 'Movie time',
  },
  {
    color: CALENDAR_COLORS[2],
    endTime: dayjs().day(1).hour(11).minute(30).toISOString(),
    id: '5',
    startTime: dayjs().day(1).hour(9).minute(0).toISOString(),
    title: 'Check on the kids',
  },
  {
    color: CALENDAR_COLORS[3],
    description: 'Interview with the new candidate',
    endTime: dayjs().day(3).hour(14).minute(30).toISOString(),
    id: '6',
    startTime: dayjs().day(3).hour(12).minute(0).toISOString(),
    title: 'Interview',
  },
  {
    color: CALENDAR_COLORS[1],
    description: 'Go to the market to buy food',
    endTime: dayjs().day(6).hour(11).minute(30).toISOString(),
    id: '7',
    startTime: dayjs().day(6).hour(9).minute(0).toISOString(),
    title: 'Buy groceries',
  },
];
