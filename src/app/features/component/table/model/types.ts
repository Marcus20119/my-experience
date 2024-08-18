import type { ColumnType } from 'antd/lib/table';
import type { ParseKeys } from 'i18next';
import type { DetailedHTMLProps, ThHTMLAttributes } from 'react';
import type { ResizableProps } from 'react-resizable';

export interface OriginalTableEntity {
  address: string;
  bio: string;
  city: string;
  gallery: string[];
  gender: string;
  id: string;
  job: string;
  nationality: string;
  phoneNumber: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  zodiacSign: string;
}

export interface PaginationEntity {
  currentPage?: number;
  pageSize?: number;
  total?: number;
}

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
