import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import type { Currency } from '../api/private/schemas';
import type { RemoveStates, SetStates } from '../types';

interface BusinessState {
  address?: string;
  businessId?: string;
  businessLogo?: string;
  businessName?: string;
  businessThumbnail?: string;
  buttonTextColor?: string;
  coordinate?: {
    latitude: number;
    longitude: number;
  };
  currency?: Currency;
  currencySymbol?: string;
  description?: string;
  emailContact?: string;
  facebookLink?: string;
  linkedinLink?: string;
  messengerLink?: string;
  phoneContact?: string;
  primaryColor?: string;
  reactUrl?: string;
  requireAuthentication?: boolean;
  tiktokLink?: string;
  twitterLink?: string;
  wordPressUrl?: string;
  youtubeLink?: string;
  zaloLink?: string;
}

interface BusinessAction {
  removeBusinessStates: RemoveStates<BusinessState>;
  setBusinessStates: SetStates<BusinessState>;
}

export const useBusinessStore = create<BusinessAction & BusinessState>()(
  devtools(
    persist(
      set => ({
        removeBusinessStates: keys =>
          set(() => {
            const newState: BusinessState = {};
            keys.forEach(key => (newState[key] = undefined));
            return newState;
          }),
        setBusinessStates: param =>
          set(() => {
            const newState: BusinessState = {};
            Object.keys(param).forEach(key => {
              const k = key as keyof BusinessState;
              newState[k] = param[k] as undefined;
            });
            return newState;
          }),
      }),
      {
        name: 'business-store',
        storage: createJSONStorage(() => localStorage), // default
        // do not persist these states
        partialize: state =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) =>
                !['requireAuthentication', 'wordPressUrl'].includes(key),
            ),
          ),
      },
    ),
  ),
);
