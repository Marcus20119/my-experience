import { Colorfilter, Cpu, Game, Image } from 'iconsax-react';
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
          key: 'eslint',
          label: t('layout.subSidebar.eslint'),
          match: '/configuration/eslint',
          path: '/configuration/eslint',
        },
        {
          key: 'vite',
          label: t('layout.subSidebar.vite'),
          match: '/configuration/vite',
          path: '/configuration/vite',
        },
      ],
      icon: <Cpu />,
      key: 'configuration',
      label: t('layout.mainSidebar.configuration'),
      match: '/configuration',
      path: '/configuration/eslint',
    },
    {
      icon: <Image />,
      key: 'image',
      label: t('layout.mainSidebar.image'),
      match: '/image',
      path: '/image',
    },
    {
      icon: <Colorfilter />,
      key: 'animation',
      label: t('layout.mainSidebar.animation'),
      match: '/animation',
      path: '/animation',
    },
    {
      icon: <Game />,
      key: 'game',
      label: t('layout.mainSidebar.game'),
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
