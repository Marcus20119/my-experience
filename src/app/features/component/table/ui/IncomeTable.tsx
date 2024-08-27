/* eslint-disable react/no-unstable-nested-components */
import { useHeaderStore } from '@/app/features/header';
import { useSidebarStore } from '@/app/features/sidebar';
import { HEIGHT } from '@/shared/assets/styles/constants/height';
import { SPACING } from '@/shared/assets/styles/constants/spacing';
import { WIDTH } from '@/shared/assets/styles/constants/width';
import { useCalculateElementSize } from '@/shared/hooks';
import { NumberTool } from '@/shared/utils';
import { Table } from 'antd';
import { useTranslation } from 'react-i18next';
import type { IncomeTableEntity } from '../model';
import { mockIncomeTable, useIncomeTableColumns } from '../model';
import MyTable from './MyTable';

function IncomeTable() {
  const { t } = useTranslation();
  const { columns } = useIncomeTableColumns();
  const { getHeaderHeight } = useHeaderStore();
  const { getSidebarWidth } = useSidebarStore();
  const { height, width } = useCalculateElementSize({
    heightOffset:
      getHeaderHeight() +
      SPACING.contentPadding * 2 +
      HEIGHT.tableHeader * 2 +
      40 * 2, // Summary row height
    widthOffset:
      getSidebarWidth() + SPACING.contentPadding * 2 + WIDTH.scrollbar,
  });

  return (
    <MyTable<IncomeTableEntity>
      bordered
      dataSource={mockIncomeTable}
      expandable={{
        defaultExpandedRowKeys: [mockIncomeTable[3].id],
        expandedRowRender: () =>
          'This is a nested table. We can customize the row rendering by providing a function.',
        rowExpandable: ({ type }) => type === 'month',
      }}
      initialColumns={columns}
      pagination={false}
      rowKey="id"
      scroll={{ x: width, y: height }}
      summary={data => {
        const salary = data.reduce((acc, item) => acc + item.salary, 0);
        const freelance = data.reduce((acc, item) => acc + item.freelance, 0);
        const otherIncome = data.reduce(
          (acc, item) => acc + item.otherIncome,
          0,
        );
        const rental = data.reduce((acc, item) => acc + item.rental, 0);
        const food = data.reduce((acc, item) => acc + item.food, 0);
        const grocery = data.reduce((acc, item) => acc + item.grocery, 0);
        const pharmacy = data.reduce((acc, item) => acc + item.pharmacy, 0);
        const fuel = data.reduce((acc, item) => acc + item.fuel, 0);
        const entertainment = data.reduce(
          (acc, item) => acc + item.entertainment,
          0,
        );
        const otherExpense = data.reduce(
          (acc, item) => acc + item.otherExpense,
          0,
        );
        const totalIncome = salary + freelance + otherIncome;
        const totalExpense =
          rental +
          food +
          grocery +
          pharmacy +
          fuel +
          entertainment +
          otherExpense;
        const remaining = totalIncome - totalExpense;

        return (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} />
              <Table.Summary.Cell index={1}>
                {t('component.table.summary')}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={2}>
                {NumberTool.formatMoney(salary)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={3}>
                {NumberTool.formatMoney(freelance)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={4}>
                {NumberTool.formatMoney(otherIncome)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={5}>
                {NumberTool.formatMoney(totalIncome)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={6}>
                {NumberTool.formatMoney(rental)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={7}>
                {NumberTool.formatMoney(food)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={8}>
                {NumberTool.formatMoney(grocery)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={9}>
                {NumberTool.formatMoney(pharmacy)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={10}>
                {NumberTool.formatMoney(fuel)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={11}>
                {NumberTool.formatMoney(entertainment)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={12}>
                {NumberTool.formatMoney(otherExpense)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={13}>
                {NumberTool.formatMoney(totalExpense)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={14} />
            </Table.Summary.Row>

            <Table.Summary.Row>
              <Table.Summary.Cell index={0} />
              <Table.Summary.Cell index={1}>
                {t('component.table.remaining')}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" index={2}>
                {NumberTool.formatMoney(remaining)}
              </Table.Summary.Cell>
              <Table.Summary.Cell align="right" colSpan={12} index={3} />
            </Table.Summary.Row>
          </Table.Summary>
        );
      }}
      tableName="expandableTable"
    />
  );
}

export default IncomeTable;
