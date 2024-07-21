import type { RouteObject } from 'react-router-dom';
import AUTH_ROUTES from '@/app/routes/auth-routes';
import PRIVATE_ROUTES from '@/app/routes/private-routes';
import NotFoundPage from '@/pages/NotFoundPage';
import AuthLayout from '../layout/AuthLayout';
import PrivateLayout from '../layout/PrivateLayout';
import RouteLayout from '../layout/RouteLayout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RouteLayout />,
    children: [
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [...AUTH_ROUTES],
        errorElement: <NotFoundPage />,
      },
      {
        element: <PrivateLayout />,
        children: [...PRIVATE_ROUTES],
        errorElement: <NotFoundPage />,
      },
    ],
  },
  { element: <NotFoundPage />, path: '*' },
  { element: <NotFoundPage />, path: '/404' },
];
