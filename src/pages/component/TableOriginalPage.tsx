import type { ItemType } from 'antd/es/menu/interface';
import { MyTable } from '@/app/features/component/table';
import { TableLayout } from '@/app/layout';
import { InfoCircle } from 'iconsax-react';
import { useTranslation } from 'react-i18next';

function TableOriginalPage() {
  const { t } = useTranslation();

  const tabItems: ItemType[] = [
    {
      icon: <InfoCircle size={16} />,
      key: 'introduction',
      label: t('layout.action.introduction'),
    },
  ];

  return (
    <TableLayout
      route={{
        path: '/component/table/original',
      }}
      tabItems={tabItems}
    >
      <MyTable />
    </TableLayout>
  );
}

export default TableOriginalPage;
