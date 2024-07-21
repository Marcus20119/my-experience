import { useMatchRoutes } from '@/shared/hooks';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const SHOULD_REDIRECT_TO_HOME_PAGE: RouterPath[] = ['/'];

function RouteLayout() {
  const shouldRedirectToHomePage = useMatchRoutes(SHOULD_REDIRECT_TO_HOME_PAGE);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRedirectToHomePage]);

  return <Outlet />;
}

export default RouteLayout;
