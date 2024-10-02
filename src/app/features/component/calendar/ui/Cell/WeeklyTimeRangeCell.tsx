import { useWeeklyCalendarContext } from '@/app/features/component/calendar/context';
import { Flex, Typography } from 'antd';
import dayjs from 'dayjs';
import { cn } from '@/lib/tailwind';

const { Text } = Typography;

function WeeklyTimeRangeCell() {
  const { endHour, hourCellHeight, startHour } = useWeeklyCalendarContext();

  return (
    <Flex className="time-range" vertical>
      {Array(endHour - startHour + 1)
        .fill(0)
        .map((_, index) => (
          <Flex
            className="pr-2"
            justify="end"
            key={index}
            style={{
              height: hourCellHeight,
            }}
          >
            <Text
              className={cn(
                'text-xs',
                index === 0 ? 'hidden' : '-translate-y-2',
              )}
            >
              {dayjs()
                .startOf('date')
                .add(startHour + index, 'hour')
                .format('HH:mm')}
            </Text>
          </Flex>
        ))}
    </Flex>
  );
}

export default WeeklyTimeRangeCell;
