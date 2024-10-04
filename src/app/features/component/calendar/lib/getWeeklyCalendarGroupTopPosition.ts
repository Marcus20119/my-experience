import type { Dayjs } from 'dayjs';
import type { Hour } from '../model';
import { getTimeInMinutes } from './getTimeInMinutes';

interface Props {
  endHour: Hour;
  hourCellHeight: number;
  startHour: Hour;
  startTime: Dayjs | string;
}

/**
 * Get weekly calendar group top position
 * @param startTime - start time
 * @param startHour - start hour
 * @param endHour - end hour
 * @param hourCellHeight - hour cell height
 * @returns weekly calendar group top position
 */

export const getWeeklyCalendarGroupTopPosition = ({
  endHour,
  hourCellHeight,
  startHour,
  startTime,
}: Props) => {
  const startTimeInMinutes = getTimeInMinutes(startTime);
  const rangeHourInMinutes = (endHour - startHour + 1) * 60;
  const weeklyWrapperCellHeight = hourCellHeight * (endHour - startHour + 1);

  return (
    ((startTimeInMinutes - startHour * 60) * weeklyWrapperCellHeight) /
    rangeHourInMinutes
  );
};
