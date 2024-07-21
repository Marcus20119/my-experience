import type { ItemType } from 'antd/es/menu/interface';

export enum NavKey {
  About = 'about',
  Booking = 'booking',
  Contact = 'contact',
  Event = 'event',
  Home = 'home',
  SearchInvoice = 'search-invoice',
}

export interface NavItem {
  children?: ItemType[];
  key: NavKey;
  label: string;
  onClick?: () => void;
}
