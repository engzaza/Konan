import { useState } from 'react';
import { Device } from '../types';

const mockDevices: Device[] = [
  {
    id: '1',
    name: 'iPhone 13 Pro',
    type: 'smartphone',
    lastSync: '2 minutes ago',
    folders: [
      { id: '1', name: 'Photos', itemCount: 1234 },
      { id: '2', name: 'Contacts', itemCount: 156 },
      { id: '3', name: 'Messages', itemCount: 2891 },
      { id: '4', name: 'Call Logs', itemCount: 478 }
    ]
  },
  {
    id: '2',
    name: 'MacBook Pro',
    type: 'laptop',
    lastSync: '15 minutes ago',
    folders: [
      { id: '5', name: 'Documents', itemCount: 892 },
      { id: '6', name: 'Browser History', itemCount: 1567 },
      { id: '7', name: 'Downloads', itemCount: 234 }
    ]
  },
  {
    id: '3',
    name: 'iPad Air',
    type: 'tablet',
    lastSync: '1 hour ago',
    folders: [
      { id: '8', name: 'Notes', itemCount: 145 },
      { id: '9', name: 'Photos', itemCount: 567 },
      { id: '10', name: 'Apps', itemCount: 42 }
    ]
  }
];

export function useDevices() {
  const [devices] = useState<Device[]>(mockDevices);
  return { devices };
}