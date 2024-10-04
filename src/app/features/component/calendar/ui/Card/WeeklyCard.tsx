import type { WeeklyCalendarEntity } from '@/app/features/component/calendar/model';
import { useWeeklyCalendarContext } from '@/app/features/component/calendar/context';
import { getTimeInMinutes } from '@/app/features/component/calendar/lib';
import { Flex, Typography } from 'antd';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { cn } from '@/lib/tailwind';

const { Text } = Typography;

interface AppointmentCardProps<T extends WeeklyCalendarEntity> {
  groupCount: number;
  item: T;
}

function WeeklyCard<T extends WeeklyCalendarEntity>({
  groupCount,
  item,
}: AppointmentCardProps<T>) {
  const { hourCellHeight, itemRender, onClickItem } =
    useWeeklyCalendarContext();
  const { endTime, startTime } = item;

  const height = useMemo(() => {
    const rangeTimeInMinutes =
      getTimeInMinutes(endTime) - getTimeInMinutes(startTime);

    return (rangeTimeInMinutes * hourCellHeight) / 60;
  }, [endTime, hourCellHeight, startTime]);

  const passedItem = dayjs().isAfter(dayjs(endTime));

  return (
    <Flex
      className={cn(
        'relative px-[1px] py-0.5',
        onClickItem ? 'cursor-pointer' : '',
        passedItem ? 'opacity-80' : '',
      )}
      onClick={() => onClickItem?.(item)}
      style={{
        height,
      }}
    >
      {itemRender ? (
        itemRender(item, { groupCount, height })
      ) : (
        <Flex
          className="h-full w-full rounded-sm bg-primaryLight px-1 py-0.5 shadow-card"
          vertical
        >
          <Text>{dayjs(item.startTime).format('H:mm')}</Text>
        </Flex>
      )}
    </Flex>
  );
}

export default WeeklyCard;
