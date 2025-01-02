import { StorageKey } from './types';

export const storageService = {
  get: <T>(key: StorageKey): T => {
    try {
      const item = localStorage.getItem(key.key);
      return item ? JSON.parse(item) : key.defaultValue;
    } catch {
      return key.defaultValue;
    }
  },

  set: <T>(key: StorageKey, value: T): void => {
    try {
      localStorage.setItem(key.key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving to localStorage:`, error);
    }
  }
};