import React from 'react';
import { MapPin, Camera, MessageSquare, Calendar } from 'lucide-react';
import { TimelineEvent as TimelineEventType } from './types';

const eventIcons = {
  visit: MapPin,
  photo: Camera,
  message: MessageSquare,
  event: Calendar,
};

interface TimelineEventProps {
  event: TimelineEventType;
  isSelected: boolean;
  onClick: () => void;
}

export function TimelineEvent({ event, isSelected, onClick }: TimelineEventProps) {
  const Icon = eventIcons[event.type];
  const formattedTime = new Date(event.timestamp).toLocaleTimeString();

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border transition-colors ${
        isSelected ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50 border-gray-200'
      }`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-1 ${isSelected ? 'text-blue-500' : 'text-gray-400'}`} />
        <div>
          <h3 className="font-medium text-gray-900">{event.title}</h3>
          <p className="text-sm text-gray-500">{formattedTime}</p>
          <p className="text-sm text-gray-600 mt-1">{event.description}</p>
          <p className="text-sm text-gray-500 mt-1">{event.location.name}</p>
        </div>
      </div>
    </button>
  );
}