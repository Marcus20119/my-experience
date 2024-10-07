import type { MonthlyCalendarEntity } from '@/app/features/component/calendar/model';
import type { Dayjs } from 'dayjs';
import { useMonthlyCalendarContext } from '@/app/features/component/calendar/context';
import { Flex } from 'antd';
import dayjs from 'dayjs';
import { cn } from '@/lib/tailwind';
import MonthlyGroupCell from './MonthlyGroupCell';

interface Props<T extends MonthlyCalendarEntity> {
  day: Dayjs;
  items: T[];
}

function MonthlyWrapperCell<T extends MonthlyCalendarEntity>({
  day,
  items,
}: Props<T>) {
  const { baseDate, dayCellHeight } = useMonthlyCalendarContext();

  const isCurrentDay =
    dayjs().startOf('day').toISOString() === day.startOf('day').toISOString();
  const isCurrentMonth =
    dayjs(baseDate).startOf('month').toISOString() ===
    day.startOf('month').toISOString();

  return (
    <Flex
      className={cn(
        'px-[1px] py-0.5',
        isCurrentMonth ? 'bg-neutral-0' : 'bg-neutral-50 opacity-50',
      )}
      style={{
        height: dayCellHeight,
      }}
    >
      <Flex className="w-full" vertical>
        <Flex align="center" className="p-2" justify="end">
          <Flex
            align="center"
            className={cn(
              'h-8 w-8 flex-shrink-0 text-center text-lg font-semibold leading-8',
              isCurrentDay && 'rounded-full bg-primary text-secondary',
            )}
            justify="center"
          >
            {day.format('DD')}
          </Flex>
        </Flex>

        <MonthlyGroupCell
          group={{
            items,
            startTime: day.startOf('day'),
          }}
        />
      </Flex>
    </Flex>
  );
}

export default MonthlyWrapperCell;
