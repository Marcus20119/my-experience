import { Button, Flex } from 'antd';
import { Edit2, Trash } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import type { MyTableColumn, OriginalTableEntity } from './types';
import { Cell } from '../ui';

export const useOriginalTableColumns = () => {
  const { t } = useTranslation();

  const columns: MyTableColumn<OriginalTableEntity>[] = [
    {
      dataIndex: 'user',
      fixed: 'left',
      key: 'user',
      render: (_, { user }) => (
        <Cell.User
          additionalInfo={user.email}
          avatar={user.avatar}
          name={user.name}
        />
      ),
      shouldCellUpdate: (record, prevRecord) =>
        record.user.name !== prevRecord.user.name,
      sorter: (a, b) => a.user.name.localeCompare(b.user.name),
      title: t('component.table.user'),
      titleI18Key: 'component.table.user',
      width: 200,
    },
    {
      dataIndex: 'address',
      key: 'address',
      render: (_, { address }) => (
        <Cell.Text truncateLength={1} value={address} />
      ),
      shouldCellUpdate: (record, prevRecord) =>
        record.address !== prevRecord.address,
      sorter: (a, b) => a.address.localeCompare(b.address),
      title: t('component.table.address'),
      titleI18Key: 'component.table.address',
      width: 200,
    },
    {
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      render: (_, { phoneNumber }) => (
        <Cell.Text truncateLength={1} value={phoneNumber} />
      ),
      shouldCellUpdate: (record, prevRecord) =>
        record.phoneNumber !== prevRecord.phoneNumber,
      sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
      title: t('component.table.phoneNumber'),
      titleI18Key: 'component.table.phoneNumber',
      width: 200,
    },
    {
      dataIndex: 'city',
      key: 'city',
      render: (_, { city }) => <Cell.Text truncateLength={1} value={city} />,
      shouldCellUpdate: (record, prevRecord) => record.city !== prevRecord.city,
      sorter: (a, b) => a.city.localeCompare(b.city),
      title: t('component.table.city'),
      titleI18Key: 'component.table.city',
      width: 200,
    },
    {
      dataIndex: 'nationality',
      key: 'nationality',
      render: (_, { nationality }) => (
        <Cell.Text truncateLength={1} value={nationality} />
      ),
      shouldCellUpdate: (record, prevRecord) =>
        record.nationality !== prevRecord.nationality,
      sorter: (a, b) => a.nationality.localeCompare(b.nationality),
      title: t('component.table.nationality'),
      titleI18Key: 'component.table.nationality',
      width: 200,
    },
    {
      dataIndex: 'gender',
      key: 'gender',
      render: (_, { gender }) => (
        <Cell.Text truncateLength={1} value={gender} />
      ),
      shouldCellUpdate: (record, prevRecord) =>
        record.gender !== prevRecord.gender,
      sorter: (a, b) => a.gender.localeCompare(b.gender),
      title: t('component.table.gender'),
      titleI18Key: 'component.table.gender',
      width: 200,
    },
    {
      dataIndex: 'bio',
      key: 'bio',
      render: (_, { bio }) => <Cell.Text truncateLength={2} value={bio} />,
      shouldCellUpdate: (record, prevRecord) => record.bio !== prevRecord.bio,
      title: t('component.table.bio'),
      titleI18Key: 'component.table.bio',
      width: 200,
    },
    {
      dataIndex: 'job',
      key: 'job',
      render: (_, { job }) => <Cell.Text truncateLength={1} value={job} />,
      shouldCellUpdate: (record, prevRecord) => record.job !== prevRecord.job,
      sorter: (a, b) => a.job.localeCompare(b.job),
      title: t('component.table.job'),
      titleI18Key: 'component.table.job',
      width: 200,
    },
    {
      dataIndex: 'gallery',
      key: 'gallery',
      render: (_, { gallery }) => (
        <img alt="gallery" src={gallery[0]} style={{ height: 50, width: 50 }} />
      ),
      title: t('component.table.gallery'),
      titleI18Key: 'component.table.gallery',
      width: 200,
    },
    {
      align: 'center',
      dataIndex: 'actions',
      fixed: 'right',
      key: 'actions',
      render: () => (
        <Flex align="center" gap="0.5rem" justify="center">
          <Button icon={<Edit2 size="20" />} />
          <Button icon={<Trash size="20" />} />
        </Flex>
      ),
      titleI18Key: 'component.table.actions',
      width: 100,
    },
  ];

  return { columns };
};
