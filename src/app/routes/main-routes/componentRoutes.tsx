import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import FieldOriginalPage from '@/pages/component/FieldOriginalPage';
import FieldSpecialPage from '@/pages/component/FieldSpecialPage';
import FormOriginalPage from '@/pages/component/FormOriginalPage';
import FormSpecialPage from '@/pages/component/FormSpecialPage';
import TableCustomizablePage from '@/pages/component/TableCustomizablePage';
import TableEditablePage from '@/pages/component/TableEditablePage';
import TableExpandablePage from '@/pages/component/TableExpandablePage';

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
    element: <div>Calendar Page</div>,
    path: 'component/calendar',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
