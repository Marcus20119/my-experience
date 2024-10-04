import { useWeeklyCalendarContext } from '@/app/features/component/calendar/context';
import { getTimeInMinutes } from '@/app/features/component/calendar/lib';
import {
  type WeeklyCalendarEntity,
  type WeeklyGroup,
} from '@/app/features/component/calendar/model';
import { Flex, Typography } from 'antd';
import { useMemo } from 'react';
import { WeeklyCard } from '../Card';

const { Text } = Typography;

interface Props<T extends WeeklyCalendarEntity> {
  group: WeeklyGroup<T>;
  order: number;
}

function WeeklyGroupCell<T extends WeeklyCalendarEntity>({
  group,
  order,
}: Props<T>) {
  const { hourCellHeight, startHour } = useWeeklyCalendarContext();

  const { items, startTime } = group;

  const sortedItems: T[] = useMemo(
    () =>
      items.sort((a, b) => {
        const aRangeTime =
          getTimeInMinutes(a.startTime) - getTimeInMinutes(a.endTime);
        const bRangeTime =
          getTimeInMinutes(b.startTime) - getTimeInMinutes(b.endTime);

        return aRangeTime - bRangeTime;
      }),
    [items],
  );

  const showItems = sortedItems.slice(0, 3);
  const restItems = sortedItems.slice(3);

  const top = useMemo(() => {
    const startTimeInMinutes = getTimeInMinutes(startTime);
    const startHourInMinutes = startHour * 60;

    return ((startTimeInMinutes - startHourInMinutes) * hourCellHeight) / 60;
  }, [hourCellHeight, startHour, startTime]);

  if (!group.startTime || !group.items.length) return null;

  return (
    <>
      {showItems.map((item, index, array) => {
        const left = restItems?.length
          ? `calc(${(index / array.length) * 100}% - ${(index / array.length) * 28}px)`
          : `${(index / array.length) * 100}%`;

        const width = restItems?.length
          ? `calc(${(1 / array.length) * 100}%  - ${28 / array.length}px)`
          : `${(1 / array.length) * 100}%`;

        return (
          <div
            className="calendar-item absolute"
            key={item.id}
            style={{
              left,
              top,
              width,
              zIndex: order,
            }}
          >
            <WeeklyCard groupCount={array.length} item={item} key={item.id} />
          </div>
        );
      })}
      {restItems?.length ? (
        <Flex
          className="absolute right-0 h-8 w-7 cursor-pointer px-[1px] py-0.5"
          style={{
            top,
          }}
        >
          <Flex
            align="center"
            className="aspect-square w-full rounded-sm bg-primaryLight px-1 py-0.5 shadow-card"
            justify="center"
          >
            <Text>+{restItems.length}</Text>
          </Flex>
        </Flex>
      ) : null}
    </>
  );
}

export default WeeklyGroupCell;
