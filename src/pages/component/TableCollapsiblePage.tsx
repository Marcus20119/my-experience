import type { ItemType } from 'antd/es/menu/interface';
import { TableLayout } from '@/app/layout';
import { InfoCircle } from 'iconsax-react';
import { useTranslation } from 'react-i18next';

function TableCollapsiblePage() {
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
        path: '/component/table/collapsible',
      }}
      tabItems={tabItems}
    >
      Collapsible Table
    </TableLayout>
  );
}

export default TableCollapsiblePage;
