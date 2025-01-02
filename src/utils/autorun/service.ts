import AutoLaunch from 'node-auto-launch';
import { autoRunConfig } from './config';
import { AutoRunStatus } from './types';

const appLauncher = new AutoLaunch(autoRunConfig);

export const autoRunService = {
  enable: async (): Promise<AutoRunStatus> => {
    try {
      const isEnabled = await appLauncher.isEnabled();
      if (!isEnabled) {
        await appLauncher.enable();
      }
      return { isEnabled: true };
    } catch (error) {
      return { 
        isEnabled: false, 
        error: error instanceof Error ? error.message : 'Failed to enable auto-run' 
      };
    }
  },

  disable: async (): Promise<AutoRunStatus> => {
    try {
      const isEnabled = await appLauncher.isEnabled();
      if (isEnabled) {
        await appLauncher.disable();
      }
      return { isEnabled: false };
    } catch (error) {
      return { 
        isEnabled: true, 
        error: error instanceof Error ? error.message : 'Failed to disable auto-run' 
      };
    }
  },

  getStatus: async (): Promise<AutoRunStatus> => {
    try {
      const isEnabled = await appLauncher.isEnabled();
      return { isEnabled };
    } catch (error) {
      return { 
        isEnabled: false, 
        error: error instanceof Error ? error.message : 'Failed to check auto-run status' 
      };
    }
  }
};