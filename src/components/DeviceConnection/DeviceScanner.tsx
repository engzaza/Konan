import React from 'react';
import { useDeviceDiscovery } from '../../hooks/useDeviceDiscovery';

export function DeviceScanner() {
  const { isScanning, discoveredDevices, error, startScan } = useDeviceDiscovery();

  return (
    <div className="device-scanner">
      <button
        onClick={startScan}
        disabled={isScanning}
        className="btn btn-primary"
      >
        {isScanning ? 'Scanning...' : 'Scan for Devices'}
      </button>

      {error && <div className="error">{error}</div>}

      <ul className="device-list">
        {discoveredDevices.map((device) => (
          <li key={device.id}>
            {device.name} - Last Sync: {device.lastSync}
          </li>
        ))}
      </ul>
    </div>
  );
}
