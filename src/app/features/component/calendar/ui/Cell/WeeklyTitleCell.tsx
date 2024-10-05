import { useWeeklyCalendarContext } from '@/app/features/component/calendar/context';
import { getDayOfWeekTitle } from '@/app/features/component/calendar/lib';
import { DayOfWeek } from '@/app/features/component/calendar/model';
import { Flex, Typography } from 'antd';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/tailwind';

const { Text } = Typography;

interface TitleCellProps {
  dayOfWeek: DayOfWeek;
}

function WeeklyTitleCell({ dayOfWeek }: TitleCellProps) {
  const { i18n } = useTranslation();
  const { baseDate, onClickHeader } = useWeeklyCalendarContext();

  const title = useMemo(() => getDayOfWeekTitle(dayOfWeek), [dayOfWeek]);
  const isCurrentDay = dayOfWeek === dayjs().day();

  const formattedDate = useMemo(() => {
    if (i18n.language === 'vi') {
      const newBaseDate = dayjs(baseDate).subtract(1, 'day');

      if (dayOfWeek === DayOfWeek.Sunday) {
        return dayjs(newBaseDate).day(dayOfWeek).add(1, 'week');
      }

      return dayjs(newBaseDate).day(dayOfWeek);
    }

    return dayjs(baseDate).day(dayOfWeek);
  }, [baseDate, dayOfWeek, i18n.language]);

  return (
    <Flex
      align="end"
      className={cn(
        'h-full px-2 py-2',
        onClickHeader ? 'cursor-pointer hover:opacity-90' : 'cursor-default',
      )}
      justify="space-between"
      onClick={() => onClickHeader?.(formattedDate.startOf('day'))}
    >
      <Text className="line-clamp-1 text-xs font-semibold uppercase text-neutral-500">
        {title}
      </Text>
      <Text
        className={cn(
          'text-primaryText h-8 w-8 flex-shrink text-center text-lg font-semibold leading-8',
          isCurrentDay && 'rounded-full bg-primary text-secondary',
        )}
      >
        {formattedDate.format('DD')}
      </Text>
    </Flex>
  );
}

export default WeeklyTitleCell;
