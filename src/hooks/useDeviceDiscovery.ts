import { useState, useCallback } from 'react';
import { Device } from '../types/device';

export function useDeviceDiscovery() {
  const [isScanning, setIsScanning] = useState(false);
  const [discoveredDevices, setDiscoveredDevices] = useState<Device[]>([]);
  const [error, setError] = useState<string | null>(null);

  const startScan = useCallback(async () => {
    setIsScanning(true);
    setError(null);
    setDiscoveredDevices([]);

    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['battery_service'],
      });

      if (device) {
        const newDevice: Device = {
          id: device.id,
          name: device.name || 'Unknown Device',
          type: 'smartphone',
          lastSync: new Date().toISOString(),
          folders: [],
        };

        setDiscoveredDevices((prev) => [...prev, newDevice]);
      }
    } catch (err) {
      setError('Failed to scan for devices');
      console.error('Scan error:', err);
    } finally {
      setIsScanning(false);
    }
  }, []);

  const stopScan = () => {
    setIsScanning(false);
  };

  return {
    isScanning,
    discoveredDevices,
    error,
    startScan,
    stopScan,
  };
}
