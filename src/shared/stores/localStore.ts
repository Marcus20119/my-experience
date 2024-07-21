import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import type { RemoveStates, SetStates } from '../types';

interface LocalState {
  language?: string;
}

interface LocalAction {
  removeLocalStates: RemoveStates<LocalState>;
  setLocalStates: SetStates<LocalState>;
}

export const useLocalStore = create<LocalAction & LocalState>()(
  devtools(
    persist(
      set => ({
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
        language: 'vi',
      }),
      {
        name: 'local-store',
        storage: createJSONStorage(() => localStorage), // default
      },
    ),
  ),
);
