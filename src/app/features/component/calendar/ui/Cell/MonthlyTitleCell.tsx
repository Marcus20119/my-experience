import type { DayOfWeek } from '@/app/features/component/calendar/model';
import { getDayOfWeekTitle } from '@/app/features/component/calendar/lib';
import { Flex, Typography } from 'antd';
import { useMemo } from 'react';

const { Text } = Typography;

interface TitleCellProps {
  dayOfWeek: DayOfWeek;
}

function MonthlyTitleCell({ dayOfWeek }: TitleCellProps) {
  const dayOfWeekTitle = useMemo(
    () => getDayOfWeekTitle(dayOfWeek),
    [dayOfWeek],
  );

  return (
    <Flex align="center" className="h-full px-2 py-2" justify="end">
      <Text className="line-clamp-1 text-base font-semibold uppercase">
        {dayOfWeekTitle}
      </Text>
    </Flex>
  );
}

export default MonthlyTitleCell;
