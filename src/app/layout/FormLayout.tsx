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

function FormLayout({ children, route, tabItems }: Props) {
  const { t } = useTranslation();

  const mainTitle = useMemo(() => {
    switch (route.path) {
      case '/component/form/original': {
        return t('layout.title.originalForm');
      }

      case '/component/form/special': {
        return t('layout.title.specialForm');
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
      title: t('layout.title.form'),
    },
    {
      title: mainTitle,
    },
  ];

  const headerTabs: HeaderTabItem[] = [
    {
      label: t('layout.title.originalForm'),
      route: { path: '/component/form/original' },
    },
    {
      label: t('layout.title.specialForm'),
      route: { path: '/component/form/special' },
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

export default FormLayout;
