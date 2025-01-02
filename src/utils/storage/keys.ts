import { StorageKeys } from './types';

export const storageKeys: StorageKeys = {
  autoStart: {
    key: 'konan:autoStart',
    defaultValue: {
      enabled: false,
      lastModified: new Date().toISOString()
    }
  }
};