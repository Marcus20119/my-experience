import type { RouteObject } from 'react-router-dom';
import MAIN_ROUTES from '@/app/routes/main-routes';
import NotFoundPage from '@/pages/NotFoundPage';
import { MainLayout, RootLayout } from '../layout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [...MAIN_ROUTES],
        errorElement: <NotFoundPage />,
      },
    ],
  },
  { element: <NotFoundPage />, path: '*' },
  { element: <NotFoundPage />, path: '/404' },
];
