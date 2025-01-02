import React from 'react';
import { TimelineEvent as TimelineEventType } from './types';
import { TimelineEvent } from './TimelineEvent';

interface TimelineProps {
  events: TimelineEventType[];
  selectedEventId?: string;
  onEventSelect: (event: TimelineEventType) => void;
}

export function Timeline({ events, selectedEventId, onEventSelect }: TimelineProps) {
  const sortedEvents = [...events].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="space-y-4 max-h-[calc(100vh-16rem)] overflow-y-auto p-4">
      {sortedEvents.map(event => (
        <TimelineEvent
          key={event.id}
          event={event}
          isSelected={event.id === selectedEventId}
          onClick={() => onEventSelect(event)}
        />
      ))}
    </div>
  );
}