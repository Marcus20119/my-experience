import type { MutableRefObject } from 'react';
import { useEffect, useState } from 'react';

interface Props {
  lastItemRef: MutableRefObject<HTMLElement | null>;
  listLength?: number;
  reObserveCondition?: boolean[];
}

export const useListLoading = ({
  lastItemRef,
  listLength = 0,
  reObserveCondition = [],
}: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (listLength > 0) {
      setLoading(true); // Reset loading state
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            setLoading(false); // All items rendered
            observer.disconnect(); // Stop observing once all items are rendered
          }
        },
        {
          root: null, // or scrollable parent
          threshold: 0.0, // Ensure the entire item is in view
        },
      );

      console.log(observer);

      if (lastItemRef.current) {
        observer.observe(lastItemRef.current);
      }

      return () => {
        if (lastItemRef.current) {
          observer.unobserve(lastItemRef.current);
        }
      };
    }
  }, [lastItemRef, listLength, ...reObserveCondition]);

  return { loading };
};
