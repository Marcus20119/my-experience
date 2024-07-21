import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import { ANIMATION_ROUTES } from './animationRoutes';
import { CONFIGURATION_ROUTES } from './configurationRoutes';
import { GAME_ROUTES } from './gameRoutes';
import { IMAGE_ROUTES } from './imageRoutes';

const MAIN_ROUTES = [
  ...CONFIGURATION_ROUTES,
  ...IMAGE_ROUTES,
  ...ANIMATION_ROUTES,
  ...GAME_ROUTES,
] as const satisfies DeepReadonly<RouteObject[]>;

export default MAIN_ROUTES;
