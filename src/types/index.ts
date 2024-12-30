export interface Location {
  id: string;
  name: string;
  description: string;
  date: string;
  latitude: number;
  longitude: number;
  type: 'visit' | 'photo' | 'event';
}