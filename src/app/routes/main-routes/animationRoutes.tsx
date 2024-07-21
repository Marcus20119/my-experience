import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';

export const ANIMATION_ROUTES = [
  {
    path: 'animation',
    element: <div>Animation Page</div>,
  },
] as const satisfies DeepReadonly<RouteObject[]>;
