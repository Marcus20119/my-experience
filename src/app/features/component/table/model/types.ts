import type { ColumnType } from 'antd/lib/table';

export interface TableEntity {
  address: string;
  gallery: string[];
  id: string;
  phoneNumber: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

export type TableWrapperColumn<T> = Omit<ColumnType<T>, 'key'> & {
  customizeTitle?: string;
  customizeKey?: string;
  key: string;
};
