import { Box1, Colorfilter, Cpu, Game, Image } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import type { SidebarItem } from './types';

export const useGetSidebarItems = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const mainSidebarItems: SidebarItem[] = [
    {
      children: [
        {
          key: 'configuration',
          label: t('layout.title.configuration'),
          match: '/technology/configuration',
          path: '/technology/configuration',
        },
        {
          key: 'language',
          label: t('layout.title.language'),
          match: '/technology/language',
          path: '/technology/language',
        },
        {
          key: 'uiLibrary',
          label: t('layout.title.uiLibrary'),
          match: '/technology/ui-library',
          path: '/technology/ui-library',
        },
        {
          key: 'other',
          label: t('layout.title.other'),
          match: '/technology/other',
          path: '/technology/other',
        },
      ],
      icon: <Cpu />,
      key: 'technology',
      label: t('layout.title.technology'),
      match: '/technology',
      path: '/technology/configuration',
    },
    {
      children: [
        {
          key: 'table',
          label: t('layout.title.table'),
          match: '/component/table',
          path: '/component/table',
        },
        {
          key: 'form',
          label: t('layout.title.form'),
          match: '/component/form',
          path: '/component/form',
        },
        {
          key: 'calendar',
          label: t('layout.title.calendar'),
          match: '/component/calendar',
          path: '/component/calendar',
        },
      ],
      icon: <Box1 />,
      key: 'component',
      label: t('layout.title.component'),
      match: '/component',
      path: '/component/table',
    },
    {
      icon: <Image />,
      key: 'image',
      label: t('layout.title.image'),
      match: '/image',
      path: '/image',
    },
    {
      icon: <Colorfilter />,
      key: 'animation',
      label: t('layout.title.animation'),
      match: '/animation',
      path: '/animation',
    },
    {
      icon: <Game />,
      key: 'game',
      label: t('layout.title.game'),
      match: '/game',
      path: '/game',
    },
  ];

  const activeMainKey = mainSidebarItems.find(item =>
    pathname.includes(item.match as string),
  )?.key;

  const mainLabel = mainSidebarItems.find(
    item => item.key === activeMainKey,
  )?.label;

  const subSidebarItems = mainSidebarItems.find(
    item => item.key === activeMainKey,
  )?.children;

  const activeSubKey = subSidebarItems?.find(item =>
    pathname.includes(item.match as string),
  )?.key;

  return {
    activeMainKey,
    activeSubKey,
    mainLabel,
    mainSidebarItems,
    subSidebarItems,
  };
};
