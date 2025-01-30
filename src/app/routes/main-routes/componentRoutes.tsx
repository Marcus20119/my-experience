import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const CalendarDailyPage = lazy(
  () => import('@/pages/component/CalendarDailyPage'),
);
const CalendarMonthlyPage = lazy(
  () => import('@/pages/component/CalendarMonthlyPage'),
);
const CalendarWeeklyPage = lazy(
  () => import('@/pages/component/CalendarWeeklyPage'),
);
const FieldOriginalPage = lazy(
  () => import('@/pages/component/FieldOriginalPage'),
);
const FieldSpecialPage = lazy(
  () => import('@/pages/component/FieldSpecialPage'),
);
const FormOriginalPage = lazy(
  () => import('@/pages/component/FormOriginalPage'),
);
const FormSpecialPage = lazy(() => import('@/pages/component/FormSpecialPage'));
const TableCustomizablePage = lazy(
  () => import('@/pages/component/TableCustomizablePage'),
);
const TableEditablePage = lazy(
  () => import('@/pages/component/TableEditablePage'),
);
const TableExpandablePage = lazy(
  () => import('@/pages/component/TableExpandablePage'),
);

export const COMPONENT_ROUTES = [
  {
    element: <TableCustomizablePage />,
    path: 'component/table/customizable',
  },
  {
    element: <TableEditablePage />,
    path: 'component/table/editable',
  },
  {
    element: <TableExpandablePage />,
    path: 'component/table/expandable',
  },
  {
    element: <FormOriginalPage />,
    path: 'component/form/original',
  },
  {
    element: <FormSpecialPage />,
    path: 'component/form/special',
  },
  {
    element: <FieldOriginalPage />,
    path: 'component/field/original',
  },
  {
    element: <FieldSpecialPage />,
    path: 'component/field/special',
  },
  {
    element: <CalendarDailyPage />,
    path: 'component/calendar/daily',
  },
  {
    element: <CalendarWeeklyPage />,
    path: 'component/calendar/weekly',
  },
  {
    element: <CalendarMonthlyPage />,
    path: 'component/calendar/monthly',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
