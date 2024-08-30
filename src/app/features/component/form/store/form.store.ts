import type { RemoveStates, SetStates } from '@/shared/types';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { FormStepType } from '../model';

interface FormState {
  originalFormType?: FormStepType;
}

interface FormAction {
  removeFormStates: RemoveStates<FormState>;
  setFormStates: SetStates<FormState>;
}

export const useFormStore = create<FormAction & FormState>()(
  devtools(
    persist(
      set => ({
        originalFormType: FormStepType.Single,
        removeFormStates: keys =>
          set(() => {
            const newState: FormState = {};
            keys.forEach(key => (newState[key] = undefined));
            return newState;
          }),
        setFormStates: param =>
          set(() => {
            const newState: FormState = {};
            Object.keys(param).forEach(key => {
              const k = key as keyof FormState;
              newState[k] = param[k] as undefined;
            });
            return newState;
          }),
      }),
      {
        name: 'store-form',
        storage: createJSONStorage(() => localStorage), // default
      },
    ),
  ),
);
