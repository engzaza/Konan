import React from 'react';
import { Scan, Loader, Smartphone, Laptop, Wifi } from 'lucide-react';
import { useDeviceDiscovery } from '../../hooks/useDeviceDiscovery';
import { useDeviceConnection } from '../../hooks/useDeviceConnection';
import { DeviceStatusBadge } from './DeviceStatusBadge';
import { Device } from '../../types/device';

const deviceIcons = {
  smartphone: Smartphone,
  laptop: Laptop,
  tablet: Laptop // Ensure you use a unique icon if needed (e.g., Tablet from lucide-react)
};

export function DeviceScanner() {
  const { isScanning, discoveredDevices, error, startScan, stopScan } = useDeviceDiscovery();
  const { connect, isConnecting } = useDeviceConnection();

  const handleConnect = async (device: Device) => {
    const success = await connect(device);
    if (success) {
      stopScan(); // Ensure stopScan is part of the hook and implemented
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Nearby Devices</h3>
          {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
        </div>
        <button
          onClick={isScanning ? stopScan : startScan}
          disabled={isConnecting}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50"
        >
          {isScanning ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              <span>Scanning...</span>
            </>
          ) : (
            <>
              <Scan className="w-4 h-4" />
              <span>Scan</span>
            </>
          )}
        </button>
      </div>

      {isScanning && discoveredDevices.length === 0 && (
        <div className="text-center py-8">
          <Wifi className="w-8 h-8 text-blue-500 mx-auto mb-3 animate-pulse" />
          <p className="text-gray-600">Searching for nearby devices...</p>
        </div>
      )}

      {discoveredDevices.length > 0 && (
        <div className="space-y-2">
          {discoveredDevices.map(device => {
            const Icon = deviceIcons[device.type] || Smartphone; // Fallback to smartphone if icon not found
            return (
              <button
                key={device.id}
                onClick={() => handleConnect(device)}
                disabled={isConnecting}
                className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors disabled:opacity-50"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-blue-500" />
                  <div className="text-left">
                    <span className="font-medium text-gray-900">{device.name}</span>
                    <p className="text-sm text-gray-500">
                      {device.folders.length} folders available
                    </p>
                  </div>
                </div>
                {isConnecting ? (
                  <DeviceStatusBadge status="connecting" />
                ) : (
                  <span className="text-sm text-blue-600">Connect</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
