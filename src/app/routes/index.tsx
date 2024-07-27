import type { RouteObject } from 'react-router-dom';
import MAIN_ROUTES from '@/app/routes/main-routes';
import NotFoundPage from '@/pages/NotFoundPage';
import { MainLayout, RootLayout } from '../layout';

export const routes: RouteObject[] = [
  {
    children: [
      {
        children: [...MAIN_ROUTES],
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
      },
    ],
    element: <RootLayout />,
    path: '/',
  },
  { element: <NotFoundPage />, path: '*' },
  { element: <NotFoundPage />, path: '/404' },
];
