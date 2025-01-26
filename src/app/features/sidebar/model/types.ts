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
  Feature = 'feature',
  Game = 'game',
  Technology = 'technology',
}

export enum SubSidebarKey {
  Calendar = 'calendar',
  CanvaEditor = 'canva-editor',
  Configuration = 'configuration',
  Field = 'field',
  Form = 'form',
  Language = 'language',
  OtherTech = 'other-tech',
  Table = 'table',
  UILibrary = 'ui-library',
}
