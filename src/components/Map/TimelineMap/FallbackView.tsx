import React from 'react';
import { MapPin } from 'lucide-react';
import { TimelineEvent } from './types';

interface FallbackViewProps {
  events: TimelineEvent[];
  selectedEventId?: string;
  onEventSelect: (event: TimelineEvent) => void;
  error?: string;
}

export function FallbackView({ events, selectedEventId, onEventSelect, error }: FallbackViewProps) {
  return (
    <div className="h-full p-6 flex flex-col items-center justify-center">
      <div className="max-w-md text-center">
        <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Location Overview</h3>
        {error && (
          <p className="text-red-600 mb-4">{error}</p>
        )}
        <p className="text-gray-600 mb-6">
          Showing {events.length} locations in your timeline
        </p>
        <div className="text-left space-y-4">
          {events.map(event => (
            <button
              key={event.id}
              onClick={() => onEventSelect(event)}
              className={`w-full p-4 rounded-lg border ${
                selectedEventId === event.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <h4 className="font-medium text-gray-900">{event.title}</h4>
              <p className="text-sm text-gray-500">
                {new Date(event.timestamp).toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 mt-1">{event.description}</p>
              <div className="mt-2 text-sm text-gray-500">
                {event.location.name} ({event.location.latitude.toFixed(4)}°N, {event.location.longitude.toFixed(4)}°W)
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}