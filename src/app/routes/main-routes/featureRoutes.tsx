import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import CanvaEditorPage from '@/pages/feature/CanvaEditorPage';
import ExcelPage from '@/pages/feature/ExcelPage';

export const FEATURE_ROUTES = [
  {
    element: <CanvaEditorPage />,
    path: 'feature/canva-editor',
  },
  {
    element: <ExcelPage />,
    path: 'feature/excel',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
