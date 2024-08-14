import { Table } from 'antd';
import type { TableEntity } from '../model';
import { mockTableData, useTableColumns } from '../model';

function MyTable() {
  const { columns } = useTableColumns();

  return (
    <Table<TableEntity>
      columns={columns}
      dataSource={mockTableData}
      rowKey="id"
    />
  );
}

export default MyTable;
