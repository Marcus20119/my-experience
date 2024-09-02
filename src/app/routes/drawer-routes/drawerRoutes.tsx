import type { DeepReadonly } from '@/shared/types';
import FormDrawer from '@/pages/component/FormDrawer';

export const DRAWER_ROUTES = [
  {
    path: 'user',
    routes: [
      {
        element: FormDrawer,
        match: 'edit',
        path: '/edit',
      },
    ],
  },
] as const satisfies DeepReadonly<DrawerRouter[]>;
