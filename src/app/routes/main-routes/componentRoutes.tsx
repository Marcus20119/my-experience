import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import TableCollapsiblePage from '@/pages/component/TableCollapsiblePage';
import TableCustomizablePage from '@/pages/component/TableCustomizablePage';
import TableEditablePage from '@/pages/component/TableEditablePage';

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
