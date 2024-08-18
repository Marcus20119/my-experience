import type { UniqueIdentifier } from '@dnd-kit/core';
import { createContext } from 'react';

export interface DragIndexState {
  active: UniqueIdentifier;
  direction?: 'bottom' | 'top';
  over: UniqueIdentifier | undefined;
}

export const DragIndexContext = createContext<DragIndexState>({
  active: -1,
  over: -1,
});
