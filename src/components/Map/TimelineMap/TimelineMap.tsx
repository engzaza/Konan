import React, { useState } from 'react';
import { TimelineEvent, TimelineMapProps } from './types';
import { Timeline } from './Timeline';
import { MapView } from './MapView';

export function TimelineMap({ events, onEventSelect, selectedEventId: propSelectedEventId }: TimelineMapProps) {
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(propSelectedEventId);

  const handleEventSelect = (event: TimelineEvent) => {
    setSelectedEventId(event.id);
    onEventSelect?.(event);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-16rem)]">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <Timeline
          events={events}
          selectedEventId={selectedEventId}
          onEventSelect={handleEventSelect}
        />
      </div>
      <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
        <MapView
          events={events}
          selectedEventId={selectedEventId}
          onEventSelect={handleEventSelect}
        />
      </div>
    </div>
  );
}