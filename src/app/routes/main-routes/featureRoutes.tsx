import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const CanvaEditorPage = lazy(() => import('@/pages/feature/CanvaEditorPage'));
const ExcelPage = lazy(() => import('@/pages/feature/ExcelPage'));

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
