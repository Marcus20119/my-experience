import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';

export const GAME_ROUTES = [
  {
    element: <div>Game Page</div>,
    path: 'game',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
