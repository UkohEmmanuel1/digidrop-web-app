import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserProfile {
  address: string;
  referralCode: string;
  referralLink: string;
  hasPass: boolean;
  username?: string;
}

interface UserStore {
  profile: UserProfile | null;
  setProfile: (profile: UserProfile | null) => void;
  clearProfile: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
      clearProfile: () => set({ profile: null }),
    }),
    {
      name: 'digidrop-user',
    }
  )
);