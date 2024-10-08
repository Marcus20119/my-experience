import type { Dayjs } from 'dayjs';
import { useDailyCalendarContext } from '@/app/features/component/calendar/context';
import { COLOR } from '@/shared/assets/styles/constants';
import { Flex } from 'antd';
import { Add } from 'iconsax-react';
import { cn } from '@/lib/tailwind';
import DisabledCell from './DisabledCell';

interface Props {
  disabled: boolean;
  startTime: Dayjs;
}

function DailyCreateNewItemCell({ disabled, startTime }: Props) {
  const { onCreateNewItem } = useDailyCalendarContext();

  return (
    <Flex
      align="center"
      className={cn(
        'group h-full',
        disabled ? 'cursor-default' : '',
        !disabled && onCreateNewItem ? 'cursor-pointer p-0.5' : '',
      )}
      justify="center"
      onClick={() => onCreateNewItem?.(startTime)}
    >
      {disabled ? (
        <DisabledCell />
      ) : (
        <Flex
          align="center"
          className={cn(
            'hidden h-full w-full rounded-md transition-all',
            onCreateNewItem
              ? 'group-hover:flex group-hover:bg-secondaryLight'
              : '',
          )}
          justify="center"
        >
          <Flex
            align="center"
            className="h-5 w-5 rounded-full bg-primary"
            justify="center"
          >
            <Add color={COLOR.secondary} size="16" />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default DailyCreateNewItemCell;
