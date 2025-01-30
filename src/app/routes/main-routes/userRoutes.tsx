import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const SettingsPage = lazy(() => import('@/pages/user/SettingsPage'));

export const USER_ROUTES = [
  {
    element: <SettingsPage />,
    path: 'settings',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
