import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const CanvaEditorPage = lazy(() => import('@/pages/feature/CanvaEditorPage'));
const ExcelPage = lazy(() => import('@/pages/feature/ExcelPage'));
const ChartPlaygroundPage = lazy(
  () => import('@/pages/feature/ChartPlaygroundPage'),
);

export const FEATURE_ROUTES = [
  {
    element: <CanvaEditorPage />,
    path: 'feature/canva-editor',
  },
  {
    element: <ExcelPage />,
    path: 'feature/excel',
  },
  {
    element: <ChartPlaygroundPage />,
    path: 'feature/chart-playground',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
