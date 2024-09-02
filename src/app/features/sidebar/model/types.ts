export interface SidebarItem {
  children?: Omit<SidebarItem, 'children' | 'icon'>[];
  icon: React.ReactNode;
  key: string;
  label: string;
  match: string;
  path: RouterPath;
}

export enum MainSidebarKey {
  Animation = 'animation',
  Component = 'component',
  Game = 'game',
  Image = 'image',
  Technology = 'technology',
}

export enum SubSidebarKey {
  Calendar = 'calendar',
  Configuration = 'configuration',
  Field = 'field',
  Form = 'form',
  Language = 'language',
  OtherTech = 'other-tech',
  Table = 'table',
  UILibrary = 'ui-library',
}
