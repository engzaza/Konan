export type DeviceType = 'smartphone' | 'laptop' | 'tablet';
export type ConnectionStatus = 'connected' | 'connecting' | 'disconnected' | 'error';

export interface DeviceFolder {
  id: string;
  name: string;
  itemCount: number;
  lastSync?: string;
}

export interface Device {
  id: string;
  name: string;
  type: DeviceType;
  lastSync: string;
  folders: DeviceFolder[];
}