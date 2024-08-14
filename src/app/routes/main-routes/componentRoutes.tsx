import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import TablePage from '@/pages/component/TablePage';

export const COMPONENT_ROUTES = [
  {
    element: <TablePage />,
    path: 'component',
  },
  {
    element: <TablePage />,
    path: 'component/table',
  },
  {
    element: <div>Form Page</div>,
    path: 'component/form',
  },
  {
    element: <div>Calendar Page</div>,
    path: 'component/calendar',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
