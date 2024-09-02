import type { DrawerProps } from 'antd/lib';
import { Drawer as AntDrawer } from 'antd';
import FormWrapperDrawer from './FormWrapperDrawer';

function Drawer({ children, ...props }: DrawerProps) {
  return <AntDrawer {...props}>{children}</AntDrawer>;
}

Drawer.FormWrapper = FormWrapperDrawer;

export { Drawer };
