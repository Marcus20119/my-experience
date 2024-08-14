import type { DeepReadonly } from '@/shared/types';
import type { RouteObject } from 'react-router-dom';
import { ANIMATION_ROUTES } from './animationRoutes';
import { COMPONENT_ROUTES } from './componentRoutes';
import { GAME_ROUTES } from './gameRoutes';
import { IMAGE_ROUTES } from './imageRoutes';
import { TECHNOLOGY_ROUTES } from './technologyRoutes';

const MAIN_ROUTES = [
  ...TECHNOLOGY_ROUTES,
  ...IMAGE_ROUTES,
  ...ANIMATION_ROUTES,
  ...GAME_ROUTES,
  ...COMPONENT_ROUTES,
] as const satisfies DeepReadonly<RouteObject[]>;

export default MAIN_ROUTES;
