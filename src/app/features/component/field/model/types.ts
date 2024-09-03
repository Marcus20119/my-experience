import type { Dayjs } from 'dayjs';

export interface OriginalFieldForm {
  autocomplete?: string;
  cascader?: string[];
  datePicker?: Dayjs;
  multiSelect?: string[];
  number?: number;
  otp?: string;
  password?: string;
  presetPicker?: [Dayjs, Dayjs];
  rangeDatePicker?: [Dayjs, Dayjs];
  rangeTimePicker?: [Dayjs, Dayjs];
  singleSelect?: string;
  text?: string;
  textarea?: string;
  timePicker?: Dayjs;
  treeSelect?: string;
  weekPicker?: Dayjs;
}
