import { useState, useEffect } from 'react';
import { storageService } from '../utils/storage/service';
import { storageKeys } from '../utils/storage/keys';
import { AutoStartConfig } from '../utils/storage/types';

export function useAutoStart() {
  const [config, setConfig] = useState<AutoStartConfig>(
    storageService.get(storageKeys.autoStart)
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedConfig = storageService.get<AutoStartConfig>(storageKeys.autoStart);
    setConfig(savedConfig);
  }, []);

  const enable = async () => {
    setIsLoading(true);
    try {
      const newConfig: AutoStartConfig = {
        enabled: true,
        lastModified: new Date().toISOString()
      };
      storageService.set(storageKeys.autoStart, newConfig);
      setConfig(newConfig);
    } catch (error) {
      console.error('Failed to enable auto-start:', error);
    }
    setIsLoading(false);
  };

  const disable = async () => {
    setIsLoading(true);
    try {
      const newConfig: AutoStartConfig = {
        enabled: false,
        lastModified: new Date().toISOString()
      };
      storageService.set(storageKeys.autoStart, newConfig);
      setConfig(newConfig);
    } catch (error) {
      console.error('Failed to disable auto-start:', error);
    }
    setIsLoading(false);
  };

  return {
    isEnabled: config.enabled,
    lastModified: config.lastModified,
    isLoading,
    enable,
    disable
  };
}