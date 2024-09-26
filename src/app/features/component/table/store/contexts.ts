import type { UniqueIdentifier } from '@dnd-kit/core';
import type { FormInstance } from 'antd';
import { createContext } from 'react';

export interface DragIndexState {
  active: UniqueIdentifier;
  direction?: 'bottom' | 'top';
  over: undefined | UniqueIdentifier;
}

export const DragIndexContext = createContext<DragIndexState>({
  active: -1,
  over: -1,
});

export const EditableContext = createContext<FormInstance | null>(null);
