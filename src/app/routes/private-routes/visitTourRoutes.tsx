import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';

export const VISIT_TOUR_ROUTES = [
  {
    path: 'booking',
    element: <div>Booking Page</div>,
  },
  {
    path: 'booking/:locationId',
    element: <div>Location Detail Page</div>,
  },
] as const satisfies DeepReadonly<RouteObject[]>;
