export interface SidebarItem {
  children?: Omit<SidebarItem, 'children' | 'icon'>[];
  icon: React.ReactNode;
  key: string;
  label: string;
  match: string;
  path: RouterPath;
}
