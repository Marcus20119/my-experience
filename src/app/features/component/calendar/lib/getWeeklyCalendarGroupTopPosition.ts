import type { Hour } from '../model';
import { getTimeInMinutes } from './getTimeInMinutes';

interface Props {
  endHour: Hour;
  hourCellHeight: number;
  startHour: Hour;
  startTime: string;
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
  const rangeTimeInMinutes = (endHour - startHour + 1) * 60;
  const weeklyWrapperCellHeight = hourCellHeight * (endHour - startHour + 1);

  return (
    ((startTimeInMinutes - startHour * 60) * weeklyWrapperCellHeight) /
    rangeTimeInMinutes
  );
};
