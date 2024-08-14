import { Typography } from 'antd';
import type { TableEntity, TableWrapperColumn } from './types';

const { Text } = Typography;

export const useTableColumns = () => {
  const columns: TableWrapperColumn<TableEntity>[] = [
    {
      dataIndex: 'id',
      fixed: 'left',
      key: 'id',
      render: (_, { id }) => <Text className="font-semibold">{id}</Text>,
      title: 'ID',
      width: 160,
    },
    {
      dataIndex: 'address',
      key: 'address',
      title: 'Address',
    },
    {
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      title: 'Phone Number',
    },
    {
      dataIndex: 'user',
      key: 'user',
      render: (_, { user }) => (
        <>
          <Text className="font-semibold">{user.name}</Text>
          <br />
          <Text type="secondary">{user.email}</Text>
        </>
      ),
      title: 'User',
    },
    {
      dataIndex: 'gallery',
      key: 'gallery',
      render: (_, { gallery }) => (
        <img alt="gallery" src={gallery[0]} style={{ height: 50, width: 50 }} />
      ),
      title: 'Gallery',
    },
  ];

  return { columns };
};
