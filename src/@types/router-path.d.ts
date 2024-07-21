import PRIVATE_ROUTES from '@/app/routes/private-routes';
import AUTH_ROUTES from '@/app/routes/auth-routes';

type FlattenPrivateRouter<T extends readonly RouteObject[]> = {
  [K in keyof T]: `/${T[K]['path']}`;
}[number];

declare global {
  type PrivateRouterPath = FlattenPrivateRouter<typeof PRIVATE_ROUTES>;
  type AuthRouterPath = FlattenPrivateRouter<typeof AUTH_ROUTES>;
  type RouterPath = PrivateRouterPath | AuthRouterPath | '/' | '/404';
}
