import { useEffect } from 'react';
import { useDeviceDiscovery } from '../../hooks/useDeviceDiscovery';

export function DeviceScanner() {
  const { isScanning, discoveredDevices, error, startScan, stopScan } = useDeviceDiscovery();

  useEffect(() => {
    if (discoveredDevices.length > 0) {
      console.log('Discovered devices:', discoveredDevices);
    }
  }, [discoveredDevices]);

  return (
    <div>
      <h1>Device Scanner</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <button onClick={startScan} disabled={isScanning}>
        {isScanning ? 'Scanning...' : 'Start Scan'}
      </button>
      <button onClick={stopScan} disabled={!isScanning}>
        Stop Scan
      </button>
      <ul>
        {discoveredDevices.map((device) => (
          <li key={device.id}>
            <strong>{device.name}</strong> (ID: {device.id})
          </li>
        ))}
      </ul>
    </div>
  );
}
