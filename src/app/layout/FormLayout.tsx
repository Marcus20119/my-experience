import type { BreadcrumbItem, HeaderTabItem } from '@/app/features/header';
import type { RouterNavigator } from '@/shared/hooks';
import type { ItemType } from 'antd/es/menu/interface';
import { ContentLayout } from '@/app/layout';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormStore } from '../features/component/form';

interface Props {
  children?: React.ReactNode;
  route: RouterNavigator;
  tabItems?: ItemType[];
}

function FormLayout({ children, route, tabItems }: Props) {
  const { t } = useTranslation();
  const { setFormStates } = useFormStore();

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

  const breadCrumb: BreadcrumbItem[] = [
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
      onChangeTab={() => {
        setFormStates({
          currentStep: 1,
          multipleStepFormValue: undefined,
          singleStepFormValue: undefined,
        });
      }}
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
