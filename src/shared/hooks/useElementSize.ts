import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

interface Props {
  elementRef: RefObject<HTMLDivElement>;
  resetSizeConditions?: (boolean | number | string | undefined)[];
}

export const useElementSize = ({
  elementRef,
  resetSizeConditions: resetSizeConditions = [],
}: Props) => {
  function getElementSize() {
    const coordinates = elementRef?.current?.getBoundingClientRect();
    const width = coordinates?.width ?? 0;
    const height = coordinates?.height ?? 0;

    return {
      height,
      width,
    };
  }

  const [size, setSize] = useState(getElementSize());

  function updateElementSize() {
    setSize(getElementSize());
  }

  useEffect(() => {
    window.addEventListener('resize', updateElementSize);

    return () => {
      window.removeEventListener('resize', updateElementSize);
    };
  }, []);

  useEffect(() => {
    if (elementRef?.current) {
      updateElementSize();
    }
  }, [elementRef, ...resetSizeConditions]);

  return { size, updateElementSize };
};
