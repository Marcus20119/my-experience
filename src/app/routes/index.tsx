import type { RouteObject } from 'react-router-dom';
import PRIVATE_ROUTES from '@/app/routes/main-routes';
import NotFoundPage from '@/pages/NotFoundPage';
import PrivateLayout from '../layout/PrivateLayout';
import RouteLayout from '../layout/RouteLayout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RouteLayout />,
    children: [
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
