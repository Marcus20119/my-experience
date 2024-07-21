import { CONFIGURATION_ROUTES } from '@/app/routes/main-routes/configurationRoutes';

type FlattenPrivateRouter<T extends readonly RouteObject[]> = {
  [K in keyof T]: `/${T[K]['path']}`;
}[number];

declare global {
  type ConfigurationRouterPath = FlattenPrivateRouter<
    typeof CONFIGURATION_ROUTES
  >;
  type RouterPath = PrivateRouterPath | '/' | '/404';
}
