import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import CanvaEditorPage from '@/pages/feature/CanvaEditorPage';

export const FEATURE_ROUTES = [
  {
    element: <CanvaEditorPage />,
    path: 'feature/canva-editor',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
