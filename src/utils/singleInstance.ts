const instanceKey = 'app-instance';
const checkInterval = 1000; // 1 second

export const singleInstance = {
  lock: (): boolean => {
    const now = Date.now();
    const lastPing = localStorage.getItem(instanceKey);
    
    if (!lastPing || now - parseInt(lastPing, 10) > checkInterval * 2) {
      localStorage.setItem(instanceKey, now.toString());
      return true;
    }
    
    return false;
  },

  release: (): void => {
    localStorage.removeItem(instanceKey);
  },

  startHeartbeat: (): void => {
    setInterval(() => {
      localStorage.setItem(instanceKey, Date.now().toString());
    }, checkInterval);
  },
};