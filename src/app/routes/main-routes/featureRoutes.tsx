import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import EditImagePage from '@/pages/feature/EditImagePage';

export const FEATURE_ROUTES = [
  {
    element: <EditImagePage />,
    path: 'feature/edit-image',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
