import { useAppRouter } from '@/shared/hooks';
import { useLocalStore } from '@/shared/stores';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function RootLayout() {
  const { navigate } = useAppRouter();
  const { prevRoute } = useLocalStore();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      if (prevRoute) {
        navigate(prevRoute);
      } else {
        navigate({
          path: '/technology/configuration',
        });
      }
    }
  }, [pathname]);

  return <Outlet />;
}

export default RootLayout;
