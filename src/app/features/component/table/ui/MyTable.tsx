import type { TableProps } from 'antd/lib';
import type { AnyObject } from 'antd/lib/_util/type';
import type { ResizableProps } from 'react-resizable';
import { Checkbox, Flex, Table, Typography } from 'antd';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { MyTableColumn } from '../model';
import { useTableStore } from '../store';
import Cell from './Cell';

const { Text } = Typography;

interface Props<T> extends Omit<TableProps<T>, 'columns'> {
  footerActions?: (selectedRowKeys: React.Key[]) => React.ReactNode;
  initialColumns?: MyTableColumn<T>[];
  showCustomizeTable?: boolean;
  showPagination?: boolean;
  showResizable?: boolean;
  showRowSelection?: boolean;
  tableName: string;
}

function MyTable<T extends AnyObject>({
  components,
  footerActions,
  initialColumns = [],
  showCustomizeTable,
  showPagination = true,
  showResizable,
  showRowSelection,
  tableName,
  ...props
}: Props<T>) {
  const { t } = useTranslation();
  const { getTable } = useTableStore();
  const { activeColumnKeys, orderColumnKeys } = getTable(tableName);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const [columns, setColumns] = useState<MyTableColumn<T>[]>(() => {
    if (showCustomizeTable) {
      return initialColumns.map((column, index) => {
        if (index === initialColumns.length - 1) {
          return {
            ...column,
            title: (
              <Cell.CustomizeTable
                initialColumns={initialColumns}
                tableName={tableName}
              />
            ),
          };
        }

        return column;
      });
    }

    return initialColumns;
  });

  const resizedColumns: MyTableColumn<T>[] = useMemo(
    () =>
      columns.map((column, index) => {
        const onResize: ResizableProps['onResize'] = (_, { size }) => {
          setColumns(prevColumns => {
            const nextColumns = [...prevColumns];
            nextColumns[index] = { ...nextColumns[index], width: size.width };
            return nextColumns;
          });
        };

        const onResetSize = () => {
          setColumns(prevColumns => {
            const defaultWidth = initialColumns[index].width;

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
      }),
    [columns, initialColumns],
  );

  const customizedColumns: MyTableColumn<T>[] = useMemo(() => {
    if (orderColumnKeys?.length) {
      return orderColumnKeys.map(key => {
        const column = resizedColumns.find(
          col => col.key === key,
        ) as MyTableColumn<T>;

        return {
          ...column,
          hidden: !activeColumnKeys.includes(column?.key),
        };
      });
    }

    return resizedColumns;
  }, [activeColumnKeys, orderColumnKeys, resizedColumns]);

  return (
    <div className="relative">
      <Table<T>
        columns={customizedColumns as TableProps<T>['columns']}
        components={{
          header: showResizable
            ? {
                cell: Cell.Header,
              }
            : undefined,
          ...components,
        }}
        pagination={
          showPagination
            ? {
                className: 'mb-0',
                defaultPageSize: 20,
                nextIcon: (
                  <button
                    className="ant-pagination-item-link flex items-center justify-center"
                    tabIndex={-1}
                    type="button"
                  >
                    <ArrowRight2 size="16" />
                  </button>
                ),
                prevIcon: (
                  <button
                    className="ant-pagination-item-link flex items-center justify-center"
                    tabIndex={-1}
                    type="button"
                  >
                    <ArrowLeft2 size="16" />
                  </button>
                ),
                showLessItems: true,
                showTotal: (total: number, range: [number, number]) =>
                  `${range[0]}-${range[1]}/${total} ${t('common.label.results').toLowerCase()}`,
              }
            : false
        }
        rowSelection={
          showRowSelection
            ? {
                onChange: rowKeys => {
                  setSelectedRowKeys(rowKeys);
                },
                type: 'checkbox',
              }
            : undefined
        }
        {...props}
      />

      {selectedRowKeys.length ? (
        <Flex className="absolute bottom-0 left-0 h-pagination pt-4">
          <Flex align="center" className="px-2" gap="0.75rem">
            <Flex align="center" gap="0.5rem">
              <Checkbox checked className="pointer-events-none" />
              <Text>{`${selectedRowKeys.length} ${t('component.label.selected')}`}</Text>
            </Flex>
            {footerActions?.(selectedRowKeys)}
          </Flex>
        </Flex>
      ) : null}
    </div>
  );
}

export default MyTable;
