import { useMonthlyCalendarContext } from '@/app/features/component/calendar/context';
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

function MonthlyTitleCell({ dayOfWeek }: TitleCellProps) {
  const { i18n } = useTranslation();
  const { baseDate, onClickHeader } = useMonthlyCalendarContext();

  const dayOfWeekTitle = useMemo(
    () => getDayOfWeekTitle(dayOfWeek),
    [dayOfWeek],
  );

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
      align="center"
      className={cn(
        'h-full px-2 py-2',
        onClickHeader ? 'cursor-pointer hover:opacity-90' : 'cursor-default',
      )}
      justify="end"
      onClick={() => onClickHeader?.(dayOfWeek, formattedDate.startOf('day'))}
    >
      <Text className="line-clamp-1 text-base font-semibold uppercase">
        {dayOfWeekTitle}
      </Text>
    </Flex>
  );
}

export default MonthlyTitleCell;
