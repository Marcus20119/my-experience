import type { BreadCrumbItem } from '@/shared/types';
import { MyTable } from '@/app/features/component/table';
import { ContentLayout } from '@/app/layout';
import { useTranslation } from 'react-i18next';

function TablePage() {
  const { t } = useTranslation();

  const breadCrumb: BreadCrumbItem[] = [
    {
      route: {
        path: '/component/table',
      },
      title: t('layout.title.component'),
    },
    {
      title: t('layout.title.table'),
    },
  ];

  return (
    <ContentLayout breadCrumb={breadCrumb} title={t('layout.title.table')}>
      <MyTable />
    </ContentLayout>
  );
}

export default TablePage;
