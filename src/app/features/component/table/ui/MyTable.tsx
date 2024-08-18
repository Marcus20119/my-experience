import type { TableProps } from 'antd/lib';
import type { ResizableProps } from 'react-resizable';
import { useHeaderStore } from '@/app/features/header';
import { useSidebarStore } from '@/app/features/sidebar';
import { HEIGHT } from '@/shared/assets/styles/constants/height';
import { SPACING } from '@/shared/assets/styles/constants/spacing';
import { useCalculateElementSize } from '@/shared/hooks';
import { Table } from 'antd';
import { useState } from 'react';
import type { TableEntity, TableWrapperColumn } from '../model';
import { mockTableData, useTableColumns } from '../model';
import Cell from './Cell';

function MyTable() {
  const { columns: c } = useTableColumns();
  const { getHeaderHeight } = useHeaderStore();
  const { getSidebarWidth } = useSidebarStore();
  const { height, width } = useCalculateElementSize({
    heightOffset:
      getHeaderHeight() +
      SPACING.contentPadding * 2 +
      HEIGHT.tableHeader +
      HEIGHT.pagination,
    widthOffset: getSidebarWidth() + SPACING.contentPadding * 2,
  });

  const [columns, setColumns] = useState<TableWrapperColumn<TableEntity>[]>(c);

  const tableColumns: TableWrapperColumn<TableEntity>[] = columns.map(
    (column, index) => {
      const onResize: ResizableProps['onResize'] = (_, { size }) => {
        setColumns(prevColumns => {
          const nextColumns = [...prevColumns];
          nextColumns[index] = { ...nextColumns[index], width: size.width };
          return nextColumns;
        });
      };

      const onResetSize = () => {
        setColumns(prevColumns => {
          const defaultWidth = c[index].width;

          const nextColumns = [...prevColumns];
          nextColumns[index] = { ...nextColumns[index], width: defaultWidth };
          return nextColumns;
        });
      };

      return {
        ...column,
        onHeaderCell: column => ({
          onResetSize,
          onResize,
          width: column.width,
        }),
      };
    },
  );

  return (
    <Table<TableEntity>
      columns={tableColumns as TableProps<TableEntity>['columns']}
      components={{
        header: {
          cell: Cell.Header,
        },
      }}
      dataSource={mockTableData}
      pagination={{
        className: 'mb-0',
      }}
      rowKey="id"
      scroll={{ x: width, y: height }}
    />
  );
}

export default MyTable;
