import React, { useState } from 'react';
import { Wifi, Bluetooth, Smartphone, Loader } from 'lucide-react';

interface ConnectionState {
  status: 'disconnected' | 'connecting' | 'connected';
  type: 'wifi' | 'bluetooth' | null;
}

export function DeviceConnectionManager() {
  const [connectionState, setConnectionState] = useState<ConnectionState>({
    status: 'disconnected',
    type: null
  });

  const connectDevice = async (type: 'wifi' | 'bluetooth') => {
    setConnectionState({ status: 'connecting', type });
    
    // Simulate connection process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setConnectionState({ status: 'connected', type });
  };

  const disconnectDevice = () => {
    setConnectionState({ status: 'disconnected', type: null });
  };

  return (
    <div className="p-4 bg-white rounded-xl border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect Device</h3>
      
      <div className="space-y-3">
        <button
          onClick={() => connectDevice('wifi')}
          disabled={connectionState.status !== 'disconnected'}
          className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
            connectionState.type === 'wifi' && connectionState.status === 'connected'
              ? 'bg-blue-50 border-blue-200'
              : 'border-gray-200 hover:border-blue-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <Wifi className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Wi-Fi Connection</span>
          </div>
          {connectionState.type === 'wifi' && (
            connectionState.status === 'connecting' ? (
              <Loader className="w-5 h-5 text-blue-500 animate-spin" />
            ) : (
              <span className="text-sm text-blue-600">Connected</span>
            )
          )}
        </button>

        <button
          onClick={() => connectDevice('bluetooth')}
          disabled={connectionState.status !== 'disconnected'}
          className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
            connectionState.type === 'bluetooth' && connectionState.status === 'connected'
              ? 'bg-blue-50 border-blue-200'
              : 'border-gray-200 hover:border-blue-200'
          }`}
        >
          <div className="flex items-center gap-3">
            <Bluetooth className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Bluetooth Connection</span>
          </div>
          {connectionState.type === 'bluetooth' && (
            connectionState.status === 'connecting' ? (
              <Loader className="w-5 h-5 text-blue-500 animate-spin" />
            ) : (
              <span className="text-sm text-blue-600">Connected</span>
            )
          )}
        </button>
      </div>

      {connectionState.status === 'connected' && (
        <div className="mt-4">
          <button
            onClick={disconnectDevice}
            className="w-full px-4 py-2 text-sm text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
          >
            Disconnect Device
          </button>
        </div>
      )}
    </div>
  );
}