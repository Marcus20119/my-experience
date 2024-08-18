import { useHeaderStore } from '@/app/features/header';
import { useSidebarStore } from '@/app/features/sidebar';
import { HEIGHT } from '@/shared/assets/styles/constants/height';
import { SPACING } from '@/shared/assets/styles/constants/spacing';
import { WIDTH } from '@/shared/assets/styles/constants/width';
import { useCalculateElementSize } from '@/shared/hooks';
import { Button, Flex } from 'antd';
import { Edit2, Trash } from 'iconsax-react';
import type { OriginalTableEntity } from '../model';
import { mockTableData, useOriginalTableColumns } from '../model';
import MyTable from './MyTable';

function FooterActions() {
  return (
    <Flex align="center" gap="0.5rem" justify="center">
      <Button icon={<Edit2 size="20" />} />
      <Button icon={<Trash size="20" />} />
    </Flex>
  );
}

function OriginalTable() {
  const { columns } = useOriginalTableColumns();
  const { getHeaderHeight } = useHeaderStore();
  const { getSidebarWidth } = useSidebarStore();
  const { height, width } = useCalculateElementSize({
    heightOffset:
      getHeaderHeight() +
      SPACING.contentPadding * 2 +
      HEIGHT.tableHeader +
      HEIGHT.pagination,
    widthOffset:
      getSidebarWidth() + SPACING.contentPadding * 2 + WIDTH.scrollbar,
  });

  return (
    <MyTable<OriginalTableEntity>
      dataSource={mockTableData}
      footerActions={FooterActions}
      initialColumns={columns}
      rowKey="id"
      scroll={{ x: width, y: height }}
      showCustomizeTable
      showRowSelection
      tableName="originalTable"
    />
  );
}

export default OriginalTable;
