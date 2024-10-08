import type { DailyCalendarEntity } from '@/app/features/component/calendar/model';
import { useDailyCalendarContext } from '@/app/features/component/calendar/context';
import { getTimeInMinutes } from '@/app/features/component/calendar/lib';
import { Flex, Typography } from 'antd';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { cn } from '@/lib/tailwind';

const { Text } = Typography;

interface DailyCardProps<T extends DailyCalendarEntity> {
  groupCount: number;
  item: T;
  mode: 'in-calendar' | 'in-popover';
}

function DailyCard<T extends DailyCalendarEntity>({
  groupCount,
  item,
  mode,
}: DailyCardProps<T>) {
  const { hourCellHeight, itemRender, onClickItem } = useDailyCalendarContext();
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
      )}
      onClick={() => onClickItem?.(item)}
      style={{
        height: mode === 'in-calendar' ? height : 'h-fit',
      }}
    >
      {itemRender ? (
        <div className="h-full w-full bg-neutral-0">
          <div
            className={cn(
              'h-full w-full',
              passedItem && mode === 'in-calendar' ? 'opacity-70' : '',
            )}
          >
            {itemRender(item, { groupCount, height, mode })}
          </div>
        </div>
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

export default DailyCard;
