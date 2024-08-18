import type { RemoveStates, SetStates } from '@/shared/types';
import { WIDTH } from '@/shared/assets/styles/constants/width';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface SidebarState {
  isMainBarCollapsed?: boolean;
  isMainBarLocked?: boolean;
  isSubBarCollapsed?: boolean;
}

interface SidebarAction {
  getSidebarWidth: () => number;
  removeSidebarStates: RemoveStates<SidebarState>;
  setSidebarStates: SetStates<SidebarState>;
}

export const useSidebarStore = create<SidebarAction & SidebarState>()(
  devtools(
    persist(
      (set, get) => ({
        getSidebarWidth: () => {
          const { isMainBarCollapsed, isSubBarCollapsed } = get();

          if (isMainBarCollapsed && isSubBarCollapsed)
            return WIDTH.sidebarCollapsed;

          if (!isMainBarCollapsed && !isSubBarCollapsed)
            return WIDTH.sidebarExpanded * 2;

          if (isMainBarCollapsed && !isSubBarCollapsed)
            return WIDTH.sidebarExpanded + WIDTH.sidebarCollapsed;

          if (!isMainBarCollapsed && isSubBarCollapsed)
            return WIDTH.sidebarExpanded;

          return 0;
        },
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
