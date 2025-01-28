import { useEffect } from 'react';

type Callback = (event: MouseEvent) => void;

interface Props {
  callback: Callback;
  exceptions?: string[];
  selector: string;
}

export const useClickOutside = ({
  callback,
  exceptions = [],
  selector,
}: Props) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const element = document.querySelector(selector);
      const isInsideException = exceptions.some(exceptionSelector => {
        const exceptionElement = document.querySelector(exceptionSelector);
        return exceptionElement?.contains(event.target as Node);
      });

      // If the click is outside the target element and not inside an exception element
      if (
        element &&
        !element.contains(event.target as Node) &&
        !isInsideException
      ) {
        callback(event);
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selector, callback, exceptions]); // Re-run the effect if the selector, callback, or exceptions change
};
