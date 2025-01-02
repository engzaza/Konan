export type DeviceType = 'smartphone' | 'laptop' | 'tablet';
export type ConnectionStatus = 'connected' | 'connecting' | 'disconnected' | 'error';

export interface DeviceFolder {
  id: string;
  name: string;
  itemCount: number;
  lastSync?: string; // تاريخ آخر مزامنة (اختياري)
}

export interface Device {
  id: string;
  name: string;
  type: DeviceType; // نوع الجهاز (هاتف، لابتوب، أو جهاز لوحي)
  lastSync: string; // تاريخ آخر مزامنة
  folders: DeviceFolder[]; // قائمة المجلدات في الجهاز
}
