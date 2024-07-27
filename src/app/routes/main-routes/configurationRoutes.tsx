import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';

export const CONFIGURATION_ROUTES = [
  {
    element: <div>Configuration Page</div>,
    path: 'configuration',
  },
  {
    element: <div>Eslint Page</div>,
    path: 'configuration/eslint',
  },
  {
    element: <div>Vite Page</div>,
    path: 'configuration/vite',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
