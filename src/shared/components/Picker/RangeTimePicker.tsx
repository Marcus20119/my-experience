import type { TimeRangePickerProps } from 'antd/es/time-picker';
import { COLOR } from '@/shared/assets/styles/constants';
import { DEFAULT_TIME_FORMAT } from '@/shared/constants';
import { TimePicker } from 'antd';
import { Clock, CloseCircle } from 'iconsax-react';
import { cn } from '@/lib/tailwind';

const { RangePicker } = TimePicker;

function RangeTimePicker({
  allowClear,
  className,
  ...props
}: TimeRangePickerProps) {
  return (
    <RangePicker
      allowClear={
        allowClear
          ? {
              clearIcon: (
                <CloseCircle
                  color={COLOR.neutral['400']}
                  size="20"
                  variant="Bold"
                />
              ),
            }
          : false
      }
      className={cn('w-full', className)}
      format={DEFAULT_TIME_FORMAT}
      inputReadOnly
      minuteStep={5}
      suffixIcon={<Clock className="text-neutral-700" size={20} />}
      {...props}
    />
  );
}

export default RangeTimePicker;
