import React, { useState } from 'react';
import { Scan, Loader } from 'lucide-react';

export function DeviceScanner() {
  const [isScanning, setIsScanning] = useState(false);

  const startScan = () => {
    setIsScanning(true);
    // Simulate scanning for 2 seconds
    setTimeout(() => setIsScanning(false), 2000);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={startScan}
        disabled={isScanning}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
      >
        {isScanning ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            <span>Scanning...</span>
          </>
        ) : (
          <>
            <Scan className="w-5 h-5" />
            <span>Scan for Devices</span>
          </>
        )}
      </button>
    </div>
  );
}