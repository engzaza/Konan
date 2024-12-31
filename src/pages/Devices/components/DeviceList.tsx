import React from 'react';
import { Smartphone, Laptop, Tablet } from 'lucide-react';
import { Device } from '../types';
import { useDevices } from '../hooks/useDevices';

interface DeviceListProps {
  onDeviceSelect: (device: Device) => void;
  selectedDeviceId?: string;
}

const deviceIcons = {
  smartphone: Smartphone,
  laptop: Laptop,
  tablet: Tablet,
};

export function DeviceList({ onDeviceSelect, selectedDeviceId }: DeviceListProps) {
  const { devices } = useDevices();

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Connected Devices</h2>
      <div className="space-y-2">
        {devices.map((device) => {
          const Icon = deviceIcons[device.type] || Smartphone;
          return (
            <button
              key={device.id}
              onClick={() => onDeviceSelect(device)}
              className={`w-full text-left p-4 rounded-lg transition-colors ${
                selectedDeviceId === device.id
                  ? 'bg-blue-50 border-blue-200'
                  : 'hover:bg-gray-50 border-transparent'
              } border`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-blue-500" />
                <div>
                  <h3 className="font-medium text-gray-900">{device.name}</h3>
                  <p className="text-sm text-gray-500">Last synced: {device.lastSync}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}