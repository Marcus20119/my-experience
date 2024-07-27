import MAIN_ROUTES from '@/app/routes/main-routes';

type FlattenPrivateRouter<T extends readonly RouteObject[]> = {
  [K in keyof T]: `/${T[K]['path']}`;
}[number];

declare global {
  type MainRouterPath = FlattenPrivateRouter<typeof MAIN_ROUTES>;
  type RouterPath = MainRouterPath | '/' | '/404';
}
