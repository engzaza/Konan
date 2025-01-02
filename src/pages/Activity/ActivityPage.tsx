import React, { useState } from 'react';
import { TimelineMap } from '../../components/Map/TimelineMap/TimelineMap';
import { mockTimelineEvents } from '../../data/mockTimelineEvents';
import { TimelineEvent } from '../../components/Map/TimelineMap/types';

export function ActivityPage() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Activity Timeline</h1>
        <p className="text-gray-600">Track your activities and locations over time</p>
      </div>

      <TimelineMap
        events={mockTimelineEvents}
        selectedEventId={selectedEvent?.id}
        onEventSelect={setSelectedEvent}
      />
    </div>
  );
}