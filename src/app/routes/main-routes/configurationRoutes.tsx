import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';

export const CONFIGURATION_ROUTES = [
  {
    path: 'configuration',
    element: <div>Configuration Page</div>,
  },
  {
    path: 'configuration/eslint',
    element: <div>Eslint Page</div>,
  },
] as const satisfies DeepReadonly<RouteObject[]>;
