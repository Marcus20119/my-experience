import { useAppRouter } from '@/shared/hooks';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function RootLayout() {
  const { navigate } = useAppRouter();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      navigate({
        path: '/technology/configuration',
      });
    }
  }, [pathname]);

  return <Outlet />;
}

export default RootLayout;
