import type { InputProps, Table, TableProps } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import type { DatePickerProps, InputNumberProps } from 'antd/lib';
import type { AnyObject } from 'antd/lib/_util/type';
import type { TextAreaProps } from 'antd/lib/input';
import type { ColumnType } from 'antd/lib/table';
import type { Dayjs } from 'dayjs';
import type { ParseKeys } from 'i18next';
import type { DetailedHTMLProps, ThHTMLAttributes } from 'react';
import type { ResizableProps } from 'react-resizable';

export enum Gender {
  Male = 'male',
  Female = 'female',
  NonBinary = 'non binary',
}

export interface UserTableEntity {
  address: string;
  bio: string;
  city: string;
  gender: string;
  id: string;
  job: string;
  nationality: string;
  phoneNumber: string;
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  vehicle: string;
  zodiacSign: string;
}

export interface StudentTableEntity {
  age?: number;
  applyDate?: [Dayjs, Dayjs];
  birthDate?: Dayjs;
  gender?: Gender;
  name?: string;
  note?: string;
  scores?: {
    name: string;
    key: string;
    score?: number;
  }[];
}

export interface StudentFormEntity {
  students: StudentTableEntity[];
}

export interface PaginationEntity {
  currentPage?: number;
  pageSize?: number;
  total?: number;
}

// Resizable Table
export type HeaderCellProps = DetailedHTMLProps<
  Omit<ThHTMLAttributes<HTMLTableCellElement>, 'onResize'>,
  HTMLTableCellElement
> & {
  onResize: ResizableProps['onResize'];
  onResetSize: () => void;
  width: number;
};

export type CustomOnHeaderCell<T> = (
  column: MyTableColumn<T>,
) => HeaderCellProps;

export interface MyTableColumn<T>
  extends Omit<ColumnType<T>, 'key' | 'onHeaderCell' | 'width'> {
  key: string;
  onHeaderCell?: CustomOnHeaderCell<T>;
  titleI18Key: ParseKeys;
  width: number;
}

// Editable Table
export type InputType = 'number' | 'rangeDate' | 'text' | 'date' | 'textarea';

export type EditableTableProps<T extends AnyObject> = Parameters<
  typeof Table<T>
>[0];

export interface AdditionalEditableTableProps<T extends AnyObject> {
  dataIndex?: keyof T;
  disabled?: boolean | ((record: T) => boolean); // used to disabled the editable cell
  editable?: boolean;
  inputDateProps?: DatePickerProps;
  inputNumberProps?: Omit<InputNumberProps, 'min' | 'max'> & {
    min?: number | ((record: T) => number);
    max?: number | ((record: T) => number);
  };
  inputRangeDateProps?: RangePickerProps;
  inputTextAreaProps?: TextAreaProps;
  inputTextProps?: InputProps;
  inputType?: InputType;
}

export interface EditableColumnType<T extends AnyObject>
  extends Omit<
      NonNullable<TableProps<T>['columns']>[number],
      'columns' | 'dataIndex'
    >,
    AdditionalEditableTableProps<T> {}

export type EditableTableRow<T extends AnyObject> = {
  key?: React.Key;
} & T;
