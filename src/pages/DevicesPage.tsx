import React from 'react';
import { DeviceScanner } from '../components/Devices/DeviceScanner';
import { FileUploader } from '../components/FileUpload/FileUploader';

export function DevicesPage() {
  return (
    <div className="devices-page space-y-6">
      <DeviceScanner />
      <FileUploader
        onUploadComplete={() => {
          console.log('Upload complete!');
        }}
      />
    </div>
  );
}
