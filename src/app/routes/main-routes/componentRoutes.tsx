import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import TableCollapsiblePage from '@/pages/component/TableCollapsiblePage';
import TableEditablePage from '@/pages/component/TableEditablePage';
import TableOriginalPage from '@/pages/component/TableOriginalPage';

export const COMPONENT_ROUTES = [
  {
    element: <TableOriginalPage />,
    path: 'component/table/original',
  },
  {
    element: <TableEditablePage />,
    path: 'component/table/editable',
  },
  {
    element: <TableCollapsiblePage />,
    path: 'component/table/collapsible',
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
