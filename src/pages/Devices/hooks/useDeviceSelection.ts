import { useState } from 'react';
import { Device } from '../types';

export function useDeviceSelection() {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  return { selectedDevice, setSelectedDevice };
}