import { useCallback, useState } from 'react';

export const useToggle = (initialState?: boolean) => {
  const [open, setOpen] = useState(initialState ?? false);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return {
    onClose,
    onOpen,
    onToggle,
    open,
  };
};
