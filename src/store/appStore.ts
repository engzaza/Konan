import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  autoRunEnabled: boolean;
  notificationsEnabled: boolean;
  syncEnabled: boolean;
  powerSaveEnabled: boolean;
  setAutoRun: (enabled: boolean) => void;
  setNotifications: (enabled: boolean) => void;
  setSync: (enabled: boolean) => void;
  setPowerSave: (enabled: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      autoRunEnabled: false,
      notificationsEnabled: true,
      syncEnabled: true,
      powerSaveEnabled: false,
      setAutoRun: (enabled) => set({ autoRunEnabled: enabled }),
      setNotifications: (enabled) => set({ notificationsEnabled: enabled }),
      setSync: (enabled) => set({ syncEnabled: enabled }),
      setPowerSave: (enabled) => set({ powerSaveEnabled: enabled }),
    }),
    {
      name: 'app-storage',
    }
  )
);