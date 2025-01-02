import { useState, useEffect, useCallback } from 'react';
import { autoRunService } from '../utils/autorun/service';
import { AutoRunStatus } from '../utils/autorun/types';

export function useAutoRun() {
  const [status, setStatus] = useState<AutoRunStatus>({ isEnabled: false });
  const [isLoading, setIsLoading] = useState(true);

  const fetchStatus = useCallback(async () => {
    setIsLoading(true);
    const currentStatus = await autoRunService.getStatus();
    setStatus(currentStatus);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  const enable = async () => {
    setIsLoading(true);
    const result = await autoRunService.enable();
    setStatus(result);
    setIsLoading(false);
  };

  const disable = async () => {
    setIsLoading(true);
    const result = await autoRunService.disable();
    setStatus(result);
    setIsLoading(false);
  };

  return {
    isEnabled: status.isEnabled,
    error: status.error,
    isLoading,
    enable,
    disable
  };
}