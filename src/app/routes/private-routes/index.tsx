import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import { VISIT_TOUR_ROUTES } from '@/app/routes/private-routes/visitTourRoutes';

const PRIVATE_ROUTES = [...VISIT_TOUR_ROUTES] as const satisfies DeepReadonly<
  RouteObject[]
>;

export default PRIVATE_ROUTES;
