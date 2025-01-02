export const platform = {
  isDesktop: (): boolean => {
    return !!(window as any).electron;
  },

  isBrowser: (): boolean => {
    return typeof window !== 'undefined' && !platform.isDesktop();
  },

  supportsWebGL: (): boolean => {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  },
};