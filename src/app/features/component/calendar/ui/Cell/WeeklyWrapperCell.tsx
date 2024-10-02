import type {
  WeeklyCalendarEntity,
  WeeklyGroup,
} from '@/app/features/component/calendar/model';
import { Flex } from 'antd';
import { useMemo } from 'react';
import WeeklyGridCell from './WeeklyGridCell';
import WeeklyGroupCell from './WeeklyGroupCell';

interface Props<T extends WeeklyCalendarEntity> {
  items: T[];
}

function WeeklyWrapperCell<T extends WeeklyCalendarEntity>({
  items,
}: Props<T>) {
  const itemGroups: WeeklyGroup<T>[] = useMemo(() => {
    const itemGroups: WeeklyGroup<T>[] = [];

    items.forEach(item => {
      const { startTime } = item;

      const dailyAppointment = itemGroups.find(
        dailyAppointment => dailyAppointment.startTime === startTime,
      );

      if (dailyAppointment) {
        dailyAppointment.items.push(item);
      } else {
        itemGroups.push({
          items: [item],
          startTime,
        });
      }
    });

    return itemGroups;
  }, [items]);

  return (
    <Flex className="relative" vertical>
      <WeeklyGridCell />

      {itemGroups.map((group, index) => (
        <WeeklyGroupCell group={group} index={index} key={group.startTime} />
      ))}
    </Flex>
  );
}

export default WeeklyWrapperCell;
