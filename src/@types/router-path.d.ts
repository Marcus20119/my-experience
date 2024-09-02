import { DRAWER_ROUTES } from '@/app/routes/drawer-routes/drawerRoutes';
import MAIN_ROUTES from '@/app/routes/main-routes';
import { MODAL_ROUTES } from '@/app/routes/modal-routes/modalRoutes';

type FlattenPrivateRouter<T extends readonly RouteObject[]> = {
  [K in keyof T]: `/${T[K]['path']}`;
}[number];

type FlattenModalRouter<T extends readonly ModalRouter[]> = {
  [K in keyof T]: `${T[K]['path']}${T[K]['routes'][number]['path']}`;
}[number];

type FlattenDrawerRouter<T extends readonly DrawerRouter[]> = {
  [K in keyof T]: `${T[K]['path']}${T[K]['routes'][number]['path']}`;
}[number];

declare global {
  type MainRouterPath = FlattenPrivateRouter<typeof MAIN_ROUTES>;
  type RouterPath = MainRouterPath | '/' | '/404';

  interface ModalRouter {
    path: string;
    routes: readonly {
      element: ({ onCancel }: { onCancel: () => void }) => JSX.Element;
      match: string;
      path: string;
    }[];
  }
  type ModalRouterPath = FlattenModalRouter<typeof MODAL_ROUTES>;

  interface DrawerRouter {
    path: string;
    routes: readonly {
      element: ({ onCancel }: { onCancel: () => void }) => JSX.Element;
      match: string;
      path: string;
    }[];
  }
  type DrawerRouterPath = FlattenDrawerRouter<typeof DRAWER_ROUTES>;
}
