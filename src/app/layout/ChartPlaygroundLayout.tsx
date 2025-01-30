import type { RouterNavigator } from '@/shared/hooks';
import type { ItemType } from 'antd/es/menu/interface';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { BreadcrumbItem, HeaderTabItem } from '../features/header';
import ContentLayout from './ContentLayout/ContentLayout';

interface Props {
  children?: React.ReactNode;
  route: RouterNavigator;
  tabItems?: ItemType[];
}

function ChartPlaygroundLayout({ children, route, tabItems }: Props) {
  const { t } = useTranslation();

  const mainTitle = useMemo(() => {
    switch (route.path) {
      case '/feature/chart-playground/bar': {
        return t('layout.title.barChart');
      }

      case '/feature/chart-playground/line': {
        return t('layout.title.lineChart');
      }

      case '/feature/chart-playground/pie': {
        return t('layout.title.pieChart');
      }

      default: {
        return '';
      }
    }
  }, [route.path, t]);

  const breadCrumb: BreadcrumbItem[] = [
    {
      title: t('layout.title.feature'),
    },
    {
      title: t('layout.title.chartPlayground'),
    },
    {
      title: mainTitle,
    },
  ];

  const headerTabs: HeaderTabItem[] = [
    {
      label: t('layout.title.barChart'),
      route: { path: '/feature/chart-playground/bar' },
    },
    {
      label: t('layout.title.lineChart'),
      route: { path: '/feature/chart-playground/line' },
    },
    {
      label: t('layout.title.pieChart'),
      route: { path: '/feature/chart-playground/pie' },
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

export default ChartPlaygroundLayout;
