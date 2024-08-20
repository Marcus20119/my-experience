import type { ColumnType } from 'antd/es/table';
import type { AnyObject } from 'antd/lib/_util/type';
import { Table, type TableProps } from 'antd';
import type { EditableColumnType } from '../model';
import Cell from './Cell';
import Row from './Row';

interface Props<T extends AnyObject> extends Omit<TableProps<T>, 'columns'> {
  columns: EditableColumnType<T>[];
}

function EditableTable<T extends AnyObject>({ columns, ...props }: Props<T>) {
  return (
    <Table<T>
      bordered
      className="editable-table"
      columns={columns as ColumnType<T>[]}
      components={{
        body: {
          cell: Cell.Editable<T>,
          row: Row.Editable,
        },
      }}
      rowClassName={() => 'editable-row'}
      {...props}
    />
  );
}

export default EditableTable;
