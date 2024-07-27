import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';

export const IMAGE_ROUTES = [
  {
    element: <div>Image Page</div>,
    path: 'image',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
