import React from 'react';
import { Smartphone, Laptop, Tablet, Trash2 } from 'lucide-react';
import { Device } from '../../types/device';
import { DeviceStatusBadge } from './DeviceStatusBadge';
import { useDeviceStore } from '../../store/deviceStore';
import { useDeviceConnection } from '../../hooks/useDeviceConnection';

const deviceIcons = {
  smartphone: Smartphone,
  laptop: Laptop,
  tablet: Tablet
};

interface DeviceCardProps {
  device: Device;
}

export function DeviceCard({ device }: DeviceCardProps) {
  const { connectionStatus } = useDeviceStore();
  const { disconnect } = useDeviceConnection();
  const Icon = deviceIcons[device.type];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Icon className="w-8 h-8 text-blue-500" />
          <div>
            <h3 className="font-medium text-gray-900">{device.name}</h3>
            <p className="text-sm text-gray-500">Last synced: {device.lastSync}</p>
          </div>
        </div>
        <DeviceStatusBadge status={connectionStatus[device.id] || 'disconnected'} />
      </div>

      <div className="space-y-3">
        {device.folders.map(folder => (
          <div key={folder.id} className="flex items-center justify-between text-sm">
            <span className="text-gray-600">{folder.name}</span>
            <span className="text-gray-900 font-medium">{folder.itemCount} items</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => disconnect(device.id)}
        className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
      >
        <Trash2 className="w-4 h-4" />
        <span>Disconnect Device</span>
      </button>
    </div>
  );
}