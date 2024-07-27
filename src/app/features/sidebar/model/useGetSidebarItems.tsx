import { Colorfilter, Cpu, Game, Image } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import type { SidebarItem } from './types';

export const useGetSidebarItems = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const mainSidebarItems: SidebarItem[] = [
    {
      key: 'configuration',
      label: t('layout.mainSidebar.configuration'),
      icon: <Cpu />,
      path: '/configuration/eslint',
      match: '/configuration',
      children: [
        {
          key: 'eslint',
          label: t('layout.subSidebar.eslint'),
          path: '/configuration/eslint',
          match: '/configuration/eslint',
        },
        {
          key: 'vite',
          label: t('layout.subSidebar.vite'),
          path: '/configuration/vite',
          match: '/configuration/vite',
        },
      ],
    },
    {
      key: 'image',
      label: t('layout.mainSidebar.image'),
      icon: <Image />,
      path: '/image',
      match: '/image',
    },
    {
      key: 'animation',
      label: t('layout.mainSidebar.animation'),
      icon: <Colorfilter />,
      path: '/animation',
      match: '/animation',
    },
    {
      key: 'game',
      label: t('layout.mainSidebar.game'),
      icon: <Game />,
      path: '/game',
      match: '/game',
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
