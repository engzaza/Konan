import React from 'react';
import { DeviceList } from './components/DeviceList';
import { DeviceDetails } from './components/DeviceDetails';
import { useDeviceSelection } from './hooks/useDeviceSelection';
import { DeviceScanner } from '../../components/DeviceConnection/DeviceScanner';
import { ImportButton } from '../../components/DataImport/ImportButton';

export function DevicesPage() {
  const { selectedDevice, setSelectedDevice } = useDeviceSelection();

  return (
    <div className="p-8">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Linked Devices</h1>
          <p className="text-gray-600">Manage your connected devices and data sources</p>
        </div>
        <div className="w-48">
          <ImportButton />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <DeviceList onDeviceSelect={setSelectedDevice} selectedDeviceId={selectedDevice?.id} />
        {selectedDevice && <DeviceDetails device={selectedDevice} />}
      </div>
      
      <DeviceScanner />
    </div>
  );
}