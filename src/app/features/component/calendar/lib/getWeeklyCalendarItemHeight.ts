import type { Hour } from '../model';
import { getTimeInMinutes } from './getTimeInMinutes';

interface Props {
  endHour: Hour;
  endTime: string;
  hourCellHeight: number;
  startHour: Hour;
  startTime: string;
}

/**
 * Get weekly calendar item height
 * @param startTime - start time
 * @param endTime - end time
 * @param startHour - start hour
 * @param endHour - end hour
 * @param hourCellHeight - hour cell height
 * @returns weekly calendar item height
 */

export const getWeeklyCalendarItemHeight = ({
  endHour,
  endTime,
  hourCellHeight,
  startHour,
  startTime,
}: Props) => {
  const startMinutes = getTimeInMinutes(startTime);
  const endMinutes = getTimeInMinutes(endTime);
  const rangeTimeInMinutes = (endHour - startHour + 1) * 60;
  const weeklyWrapperCellHeight = hourCellHeight * (endHour - startHour + 1);

  return (
    ((endMinutes - startMinutes) * weeklyWrapperCellHeight) / rangeTimeInMinutes
  );
};
