export interface Folder {
  id: string;
  name: string;
  itemCount: number;
}

export interface Device {
  id: string;
  name: string;
  type: 'smartphone' | 'laptop' | 'tablet';
  lastSync: string;
  folders: Folder[];
}