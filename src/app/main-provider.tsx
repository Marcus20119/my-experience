import type { FormConfig } from 'antd/es/config-provider/context';
import type { Locale } from 'antd/es/locale';
import type { ThemeConfig } from 'antd/lib';
import { COLOR } from '@/shared/assets/styles/constants';
import { useLocalStore } from '@/shared/stores/local.store';
import { ThemeTool } from '@/shared/utils';
import { ApolloProvider } from '@apollo/client';
import { ConfigProvider, Spin } from 'antd';
import { Suspense, useEffect, useMemo } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { theme as defaultTheme } from '@/lib/antd';
import { i18nFormConfig } from '@/lib/antd/form';
import enUS from '@/lib/antd/locale/en_US';
import viVN from '@/lib/antd/locale/vi_VN';
import { client } from '@/lib/apollo-client';
import i18n from '@/lib/i18next';
import { routes } from './routes';

function AntProvider() {
  const { i18n } = useTranslation();
  const { primaryColor, secondaryColor } = useLocalStore();

  const locale: Locale = useMemo(() => {
    if (i18n.language === 'en') {
      return enUS;
    }

    return viVN;
  }, [i18n.language]);

  const formConfig: FormConfig = useMemo(() => {
    if (i18n.language === 'en') {
      return i18nFormConfig.en;
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
          primaryColor: secondaryColor ?? undefined,
        },
        ['DatePicker']: {
          ...defaultTheme.components.DatePicker,
          cellActiveWithRangeBg: ThemeTool.getHexColorVariant(
            secondaryColor,
            0.8,
          ),
        },
        ['Select']: {
          ...defaultTheme.components.Select,
          optionSelectedBg: ThemeTool.getHexColorVariant(secondaryColor, 0.8),
        },
      },
      token: {
        colorPrimary: primaryColor,
      },
    };
  }, [secondaryColor, primaryColor]);

  useEffect(() => {
    if (primaryColor) {
      COLOR.primary = primaryColor;
      COLOR.primaryLight = ThemeTool.getHexColorVariant(primaryColor, 0.8);
    }

    if (secondaryColor) {
      COLOR.secondary = secondaryColor;
    }

    //map colors variables for root
    const root = document.documentElement;

    const setProperties = <T extends object>(obj: T, prefix = ''): void => {
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'object' && value !== null) {
          setProperties(value, `${prefix}${key}-`);
        } else if (typeof value === 'string') {
          root.style.setProperty(`--${prefix}${key}-color`, value);
        }
      });
    };

    setProperties(COLOR);
  }, [secondaryColor, primaryColor]);

  return (
    <ConfigProvider
      componentSize="small"
      form={formConfig}
      locale={locale}
      theme={theme}
    >
      <Suspense fallback={<Spin fullscreen size="large" spinning={false} />}>
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
