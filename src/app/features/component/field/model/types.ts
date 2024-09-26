import type { PhoneNumberValue } from '@/shared/components/Field/PhoneNumberField';
import type { Dayjs } from 'dayjs';

export interface OriginalFieldForm {
  autocomplete?: string;
  cascader?: string[];
  checkbox?: boolean;
  checkboxGroup?: string[];
  colorPicker?: string;
  datePicker?: Dayjs;
  multiSelect?: string[];
  number?: number;
  otp?: string;
  password?: string;
  presetPicker?: [Dayjs, Dayjs];
  radioGroup?: string;
  rangeDatePicker?: [Dayjs, Dayjs];
  rangeTimePicker?: [Dayjs, Dayjs];
  rate?: number;
  singleSelect?: string;
  slider?: number;
  sliderRange?: [number, number];
  switch?: boolean;
  text?: string;
  textarea?: string;
  timePicker?: Dayjs;
  treeSelect?: string;
  weekPicker?: Dayjs;
}

export interface SpecialFieldForm {
  google?: string;
  nationalityOffline?: string;
  nationalityOnline?: string;
  phoneNumberOffline?: PhoneNumberValue;
  phoneNumberOnline?: PhoneNumberValue;
}
