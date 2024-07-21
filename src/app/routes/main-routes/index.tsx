import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import { CONFIGURATION_ROUTES } from '@/app/routes/main-routes/configurationRoutes';

const MAIN_ROUTES = [...CONFIGURATION_ROUTES] as const satisfies DeepReadonly<
  RouteObject[]
>;

export default MAIN_ROUTES;
