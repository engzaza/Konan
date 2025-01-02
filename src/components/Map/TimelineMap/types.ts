export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  location: {
    latitude: number;
    longitude: number;
    name: string;
  };
  type: 'visit' | 'photo' | 'message' | 'event';
}

export interface TimelineMapProps {
  events: TimelineEvent[];
  onEventSelect?: (event: TimelineEvent) => void;
  selectedEventId?: string;
}