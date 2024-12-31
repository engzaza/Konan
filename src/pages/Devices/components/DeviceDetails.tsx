import React from 'react';
import { FolderIcon, RefreshCw, Trash2 } from 'lucide-react';
import { Device } from '../types';

interface DeviceDetailsProps {
  device: Device;
}

export function DeviceDetails({ device }: DeviceDetailsProps) {
  return (
    <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{device.name}</h2>
          <p className="text-gray-500">Device ID: {device.id}</p>
        </div>
        <div className="space-x-2">
          <button className="px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <RefreshCw className="w-4 h-4" />
          </button>
          <button className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Available Data</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {device.folders.map((folder) => (
            <div
              key={folder.id}
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FolderIcon className="w-5 h-5 text-blue-500" />
                <div>
                  <h4 className="font-medium text-gray-900">{folder.name}</h4>
                  <p className="text-sm text-gray-500">{folder.itemCount} items</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}