import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';

export const GAME_ROUTES = [
  {
    path: 'game',
    element: <div>Game Page</div>,
  },
] as const satisfies DeepReadonly<RouteObject[]>;
