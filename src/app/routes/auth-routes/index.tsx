import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import LoginPage from '@/pages/auth/LoginPage';

const AUTH_ROUTES = [
  {
    path: `login`,
    element: <LoginPage />,
  },
] as const satisfies DeepReadonly<RouteObject[]>;

export default AUTH_ROUTES;
