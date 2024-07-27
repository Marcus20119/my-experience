import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';

export const ANIMATION_ROUTES = [
  {
    element: <div>Animation Page</div>,
    path: 'animation',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
