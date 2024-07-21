import { useBusinessStore } from '@/shared/stores/businessStore';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { NavItem } from './types';
import { useGetAboutCategories } from '../api';
import { NavKey } from './types';

export const useGetNavItems = () => {
  const { t } = useTranslation();
  const { wordPressUrl } = useBusinessStore();

  const { categories } = useGetAboutCategories();

  const navItems: NavItem[] = useMemo(() => {
    if (wordPressUrl) {
      return [
        {
          key: NavKey.Home,
          label: t('layout.navbar.home'),
        },
        {
          key: NavKey.Booking,
          label: t('layout.navbar.booking'),
        },
        {
          key: NavKey.About,
          label: t('layout.navbar.about'),
          children: categories.map(category => ({
            key: category.id,
            label: category.name,
          })),
        },
        {
          key: NavKey.Event,
          label: t('layout.navbar.event'),
        },
        {
          key: NavKey.Contact,
          label: t('layout.navbar.contact'),
        },
      ];
    }

    return [
      {
        key: NavKey.Booking,
        label: t('layout.navbar.booking'),
      },
      {
        key: NavKey.SearchInvoice,
        label: t('layout.navbar.searchInvoice'),
      },
    ];
  }, [categories, t, wordPressUrl]);

  return navItems;
};
