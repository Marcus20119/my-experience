import { useMediaQuery } from 'react-responsive';

export function useResponsive() {
  const isMobile = useMediaQuery({ maxWidth: 999 });
  const isDesktop = useMediaQuery({ minWidth: 1000 });

  return { isDesktop, isMobile };
}
