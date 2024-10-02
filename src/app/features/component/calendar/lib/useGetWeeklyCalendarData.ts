import dayjs from 'dayjs';
import type { WeeklyCalendarEntity, WeeklyRow } from '../model';

interface Props<T extends WeeklyCalendarEntity> {
  dataSource?: T[];
}

export const useGetWeeklyCalendarData = <T extends WeeklyCalendarEntity>({
  dataSource,
}: Props<T>) => {
  const appointmentResponse: T[] = dataSource ?? [];

  const calendarData: WeeklyRow<T>[] = [
    {
      friday:
        appointmentResponse?.filter(
          appointment =>
            appointment.startTime && dayjs(appointment.startTime).day() === 5,
        ) ?? [],
      monday:
        appointmentResponse?.filter(
          appointment =>
            appointment.startTime && dayjs(appointment.startTime).day() === 1,
        ) ?? [],
      saturday:
        appointmentResponse?.filter(
          appointment =>
            appointment.startTime && dayjs(appointment.startTime).day() === 6,
        ) ?? [],
      sunday:
        appointmentResponse?.filter(
          appointment =>
            appointment.startTime && dayjs(appointment.startTime).day() === 0,
        ) ?? [],
      thursday:
        appointmentResponse?.filter(
          appointment =>
            appointment.startTime && dayjs(appointment.startTime).day() === 4,
        ) ?? [],
      tuesday:
        appointmentResponse?.filter(
          appointment =>
            appointment.startTime && dayjs(appointment.startTime).day() === 2,
        ) ?? [],
      wednesday:
        appointmentResponse?.filter(
          appointment =>
            appointment.startTime && dayjs(appointment.startTime).day() === 3,
        ) ?? [],
    },
  ];

  return { calendarData };
};
