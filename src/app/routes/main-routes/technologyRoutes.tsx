import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import {
  ConfigurationPage,
  LanguagePage,
  OtherTechnologyPage,
  UILibraryPage,
} from '@/pages/technology';

export const TECHNOLOGY_ROUTES = [
  {
    element: <ConfigurationPage />,
    path: 'technology',
  },
  {
    element: <ConfigurationPage />,
    path: 'technology/configuration',
  },
  {
    element: <LanguagePage />,
    path: 'technology/language',
  },
  {
    element: <UILibraryPage />,
    path: 'technology/ui-library',
  },
  {
    element: <OtherTechnologyPage />,
    path: 'technology/other',
  },
] as const satisfies DeepReadonly<RouteObject[]>;
