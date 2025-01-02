import { useState, useCallback } from 'react';
import { useDeviceStore } from '../store/deviceStore';
import { Device, ConnectionStatus } from '../types/device';

export function useDeviceConnection() {
  const [isConnecting, setIsConnecting] = useState(false);
  const { addDevice, removeDevice, updateDeviceStatus } = useDeviceStore();

  const connect = useCallback(async (device: Device) => {
    setIsConnecting(true);
    updateDeviceStatus(device.id, 'connecting');

    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      addDevice(device);
      updateDeviceStatus(device.id, 'connected');
      return true;
    } catch (error) {
      updateDeviceStatus(device.id, 'error');
      return false;
    } finally {
      setIsConnecting(false);
    }
  }, [addDevice, updateDeviceStatus]);

  const disconnect = useCallback(async (deviceId: string) => {
    updateDeviceStatus(deviceId, 'disconnected');
    removeDevice(deviceId);
  }, [removeDevice, updateDeviceStatus]);

  return {
    isConnecting,
    connect,
    disconnect
  };
}