import type { RouterNavigator } from '@/shared/hooks';
import type { ItemType } from 'antd/es/menu/interface';

export interface BreadCrumbItem {
  onClick?: () => void;
  route?: RouterNavigator;
  title: string;
}

export interface HeaderTabItem {
  label: React.ReactNode;
  menuItems?: ItemType[];
  route: RouterNavigator;
}
