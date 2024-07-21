import type { FormConfig } from 'antd/es/config-provider/context';
import type { Locale } from 'antd/es/locale';
import type { ThemeConfig } from 'antd/lib';
import { useBusinessStore } from '@/shared/stores/businessStore';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider, Spin } from 'antd';
import { Suspense, useMemo } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { theme as defaultTheme } from '@/lib/antd';
import { i18nFormConfig } from '@/lib/antd/form';
import enUS from '@/lib/antd/locale/en_US';
import frFr from '@/lib/antd/locale/fr_FR';
import viVN from '@/lib/antd/locale/vi_VN';
import { client } from '@/lib/apollo-client';
import i18n from '@/lib/i18next';
import { useConfigBusiness } from './features/config-business';
import { routes } from './routes';

function AntProvider() {
  const { i18n } = useTranslation();
  const { primaryColor, buttonTextColor } = useBusinessStore();

  useConfigBusiness();

  const locale: Locale = useMemo(() => {
    if (i18n.language === 'en') {
      return enUS;
    }

    if (i18n.language === 'fr') {
      return frFr;
    }

    return viVN;
  }, [i18n.language]);

  const formConfig: FormConfig = useMemo(() => {
    if (i18n.language === 'en') {
      return i18nFormConfig.en;
    }

    if (i18n.language === 'fr') {
      return i18nFormConfig.fr;
    }

    return i18nFormConfig.vi;
  }, [i18n.language]);

  const theme: ThemeConfig = useMemo(() => {
    if (!primaryColor) {
      return defaultTheme;
    }

    return {
      components: {
        ...defaultTheme.components,
        ['Button']: {
          ...defaultTheme.components.Button,
          primaryColor: buttonTextColor ?? undefined,
        },
      },
      token: {
        colorPrimary: primaryColor,
      },
    };
  }, [buttonTextColor, primaryColor]);

  return (
    <ConfigProvider
      componentSize="middle"
      form={formConfig}
      locale={locale}
      theme={theme}
    >
      <Suspense fallback={<Spin size="large" spinning={false} fullscreen />}>
        <RouterProvider router={createBrowserRouter(routes)} />
      </Suspense>
    </ConfigProvider>
  );
}

function MainProvider() {
  return (
    <I18nextProvider i18n={i18n}>
      <ApolloProvider client={client}>
        <AntProvider />
      </ApolloProvider>
    </I18nextProvider>
  );
}

export default MainProvider;
