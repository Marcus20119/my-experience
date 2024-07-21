import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';

export const IMAGE_ROUTES = [
  {
    path: 'image',
    element: <div>Image Page</div>,
  },
] as const satisfies DeepReadonly<RouteObject[]>;
