import { matchRoutes, useLocation } from 'react-router-dom';

export const useMatchRoutes = (paths: RouterPath[]) => {
  const routes = paths.map(path => ({
    path,
  }));
  const { pathname } = useLocation();
  const isMatch = matchRoutes(routes, pathname);

  if (!isMatch) {
    return false;
  }

  return true;
};
