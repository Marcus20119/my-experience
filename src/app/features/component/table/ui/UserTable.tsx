import { useHeaderStore } from '@/app/features/header';
import { HEIGHT, SPACING } from '@/shared/assets/styles/constants';
import { useCalculateElementSize } from '@/shared/hooks';
import { Button, Flex } from 'antd';
import { Edit2, Trash } from 'iconsax-react';
import type { UserTableEntity } from '../model';
import { mockUserData, useUserTableColumns } from '../model';
import MyTable from './MyTable';

function FooterActions() {
  return (
    <Flex align="center" gap="0.5rem" justify="center">
      <Button icon={<Edit2 size="20" />} />
      <Button icon={<Trash size="20" />} />
    </Flex>
  );
}

function UserTable() {
  const { columns } = useUserTableColumns();
  const { getHeaderHeight } = useHeaderStore();
  const { height } = useCalculateElementSize({
    heightOffset:
      getHeaderHeight() +
      SPACING.contentPadding * 2 +
      HEIGHT.tableHeader +
      HEIGHT.pagination,
  });

  return (
    <MyTable<UserTableEntity>
      dataSource={mockUserData}
      footerActions={FooterActions}
      initialColumns={columns}
      rowKey="id"
      scroll={{ x: 'max-content', y: height }}
      showCustomizeTable
      showResizable
      showRowSelection
      tableName="customizableTable"
    />
  );
}

export default UserTable;
