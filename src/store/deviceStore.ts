import { create } from 'zustand';
import { Device, ConnectionStatus } from '../types/device';

interface DeviceState {
  devices: Device[];
  connectionStatus: Record<string, ConnectionStatus>;
  addDevice: (device: Device) => void;
  removeDevice: (deviceId: string) => void;
  updateDeviceStatus: (deviceId: string, status: ConnectionStatus) => void;
  updateLastSync: (deviceId: string) => void;
}

export const useDeviceStore = create<DeviceState>((set) => ({
  devices: [],
  connectionStatus: {},
  addDevice: (device) => 
    set((state) => ({
      devices: [...state.devices, device],
      connectionStatus: { 
        ...state.connectionStatus, 
        [device.id]: 'connected' 
      }
    })),
  removeDevice: (deviceId) =>
    set((state) => ({
      devices: state.devices.filter((d) => d.id !== deviceId),
      connectionStatus: { 
        ...state.connectionStatus,
        [deviceId]: 'disconnected'
      }
    })),
  updateDeviceStatus: (deviceId, status) =>
    set((state) => ({
      connectionStatus: { ...state.connectionStatus, [deviceId]: status }
    })),
  updateLastSync: (deviceId) =>
    set((state) => ({
      devices: state.devices.map((d) =>
        d.id === deviceId ? { ...d, lastSync: new Date().toISOString() } : d
      )
    }))
}));