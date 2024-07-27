import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import type { RemoveStates, SetStates } from '../types';

interface LocalState {
  language?: string;
  primaryButtonTextColor?: string;
  primaryColor?: string;
}

interface LocalAction {
  removeLocalStates: RemoveStates<LocalState>;
  setLocalStates: SetStates<LocalState>;
}

export const useLocalStore = create<LocalAction & LocalState>()(
  devtools(
    persist(
      set => ({
        language: 'en',
        primaryButtonTextColor: '#E2CB8D',
        primaryColor: '#3A393B',
        removeLocalStates: keys =>
          set(() => {
            const newState: LocalState = {};
            keys.forEach(key => (newState[key] = undefined));
            return newState;
          }),
        setLocalStates: param =>
          set(() => {
            const newState: LocalState = {};
            Object.keys(param).forEach(key => {
              const k = key as keyof LocalState;
              newState[k] = param[k] as undefined;
            });
            return newState;
          }),
      }),
      {
        name: 'local-store',
        storage: createJSONStorage(() => localStorage), // default
      },
    ),
  ),
);
