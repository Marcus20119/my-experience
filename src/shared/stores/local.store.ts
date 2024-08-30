import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import type { RemoveStates, SetStates } from '../types';

interface LocalState {
  language?: string;
  primaryColor?: string;
  secondaryColor?: string;
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
        primaryColor: '#3A393B',
        removeLocalStates: keys =>
          set(() => {
            const newState: LocalState = {};
            keys.forEach(key => (newState[key] = undefined));
            return newState;
          }),
        secondaryColor: '#E2CB8D',
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
        name: 'store-local',
        storage: createJSONStorage(() => localStorage), // default
      },
    ),
  ),
);
