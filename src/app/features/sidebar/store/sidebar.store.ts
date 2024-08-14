import type { RemoveStates, SetStates } from '@/shared/types';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface SidebarState {
  isMainBarCollapsed?: boolean;
  isMainBarLocked?: boolean;
  isSubBarCollapsed?: boolean;
}

interface SidebarAction {
  removeSidebarStates: RemoveStates<SidebarState>;
  setSidebarStates: SetStates<SidebarState>;
}

export const useSidebarStore = create<SidebarAction & SidebarState>()(
  devtools(
    persist(
      set => ({
        isMainBarCollapsed: true,
        isMainBarLocked: true,
        isSubBarCollapsed: false,
        removeSidebarStates: keys =>
          set(() => {
            const newState: SidebarState = {};
            keys.forEach(key => (newState[key] = undefined));
            return newState;
          }),
        setSidebarStates: param =>
          set(() => {
            const newState: SidebarState = {};
            Object.keys(param).forEach(key => {
              const k = key as keyof SidebarState;
              newState[k] = param[k] as undefined;
            });
            return newState;
          }),
      }),
      {
        name: 'store-sidebar',
        storage: createJSONStorage(() => localStorage), // default
      },
    ),
  ),
);
