import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const CanvaEditorPage = lazy(() => import('@/pages/feature/CanvaEditorPage'));
const ExcelPage = lazy(() => import('@/pages/feature/ExcelPage'));
const BarChartPlaygroundPage = lazy(
  () => import('@/pages/feature/chart-playground/BarChartPlaygroundPage'),
);
const LineChartPlaygroundPage = lazy(
  () => import('@/pages/feature/chart-playground/LineChartPlaygroundPage'),
);
const PieChartPlaygroundPage = lazy(
  () => import('@/pages/feature/chart-playground/PieChartPlaygroundPage'),
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
    element: <BarChartPlaygroundPage />,
    path: 'feature/chart-playground/bar',
  },
  {
    element: <LineChartPlaygroundPage />,
    path: 'feature/chart-playground/line',
  },
  {
    element: <PieChartPlaygroundPage />,
    path: 'feature/chart-playground/pie',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
