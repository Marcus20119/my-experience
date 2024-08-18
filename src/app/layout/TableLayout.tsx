import type { BreadCrumbItem, HeaderTabItem } from '@/app/features/header';
import type { RouterNavigator } from '@/shared/hooks';
import type { ItemType } from 'antd/es/menu/interface';
import { ContentLayout } from '@/app/layout';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  children?: React.ReactNode;
  route: RouterNavigator;
  tabItems?: ItemType[];
}

function TableLabel({ children, route, tabItems }: Props) {
  const { t } = useTranslation();

  const mainTitle = useMemo(() => {
    switch (route.path) {
      case '/component/table/original': {
        return t('layout.title.originalTable');
      }

      case '/component/table/editable': {
        return t('layout.title.editableTable');
      }

      case '/component/table/collapsible': {
        return t('layout.title.collapsibleTable');
      }

      default: {
        return '';
      }
    }
  }, [route.path, t]);

  const breadCrumb: BreadCrumbItem[] = [
    {
      title: t('layout.title.component'),
    },
    {
      title: t('layout.title.table'),
    },
    {
      title: mainTitle,
    },
  ];

  const headerTabs: HeaderTabItem[] = [
    {
      label: t('layout.title.originalTable'),
      route: { path: '/component/table/original' },
    },
    {
      label: t('layout.title.editableTable'),
      route: { path: '/component/table/editable' },
    },
    {
      label: t('layout.title.collapsibleTable'),
      route: { path: '/component/table/collapsible' },
    },
  ];

  return (
    <ContentLayout
      breadCrumb={breadCrumb}
      tabs={headerTabs.map(tab => ({
        ...tab,
        menuItems: tab.route.path === route.path ? tabItems : undefined,
      }))}
      title={mainTitle}
    >
      {children}
    </ContentLayout>
  );
}

export default TableLabel;
