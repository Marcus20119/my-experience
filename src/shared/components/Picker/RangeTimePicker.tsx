import type { TimeRangePickerProps } from 'antd/es/time-picker';
import { DEFAULT_TIME_FORMAT } from '@/shared/constants';
import { TimePicker } from 'antd';
import { Clock } from 'iconsax-react';

const { RangePicker } = TimePicker;

function RangeTimePicker(props: TimeRangePickerProps) {
  return (
    <RangePicker
      className="w-full"
      format={DEFAULT_TIME_FORMAT}
      inputReadOnly
      minuteStep={5}
      suffixIcon={<Clock className="text-neutral-700" size={20} />}
      {...props}
    />
  );
}

export default RangeTimePicker;
