import type { TimePickerProps } from 'antd/lib';
import { DEFAULT_TIME_FORMAT } from '@/shared/constants';
import { TimePicker } from 'antd';
import { Clock } from 'iconsax-react';

function TimePickerUI(props: TimePickerProps) {
  return (
    <TimePicker
      className="w-full"
      format={DEFAULT_TIME_FORMAT}
      inputReadOnly
      minuteStep={5}
      needConfirm={false}
      suffixIcon={<Clock className="text-neutral-700" size={20} />}
      {...props}
    />
  );
}

export default TimePickerUI;
