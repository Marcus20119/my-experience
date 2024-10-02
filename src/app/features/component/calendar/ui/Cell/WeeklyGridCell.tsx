import { useWeeklyCalendarContext } from '@/app/features/component/calendar/context';
import { Divider, Flex } from 'antd';
import { cn } from '@/lib/tailwind';
import WeeklyCreateNewItemCell from './WeeklyCreateNewItemCell';

function WeeklyGridCell() {
  const { endHour, hourCellHeight, startHour } = useWeeklyCalendarContext();

  return (
    <Flex vertical>
      {Array(endHour - startHour + 1)
        .fill(0)
        .map((_, index) => (
          <Flex
            className={cn(
              'box-border border-0 border-solid border-neutral-300',
              index !== 0 ? 'border-t' : '',
            )}
            key={index}
            style={{
              height: hourCellHeight,
            }}
            vertical
          >
            <WeeklyCreateNewItemCell hour={hourCellHeight + index} minute={0} />
            <Divider className="m-0 border-dashed border-neutral-200" />
            <WeeklyCreateNewItemCell
              hour={hourCellHeight + index}
              minute={30}
            />
          </Flex>
        ))}
    </Flex>
  );
}

export default WeeklyGridCell;
