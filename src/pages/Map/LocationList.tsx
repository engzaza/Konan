import React from 'react';
import { MapPin } from 'lucide-react';
import { Location } from '../../types';

interface LocationListProps {
  locations: Location[];
  selectedLocation: string | null;
  onLocationSelect: (id: string) => void;
}

export function LocationList({ locations, selectedLocation, onLocationSelect }: LocationListProps) {
  return (
    <div className="space-y-2 max-h-[calc(100vh-20rem)] overflow-y-auto">
      {locations.map(location => (
        <button
          key={location.id}
          onClick={() => onLocationSelect(location.id)}
          className={`w-full text-left p-3 rounded-lg transition-colors ${
            selectedLocation === location.id
              ? 'bg-blue-50 border-blue-200'
              : 'hover:bg-gray-50 border-transparent'
          } border`}
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-900">{location.name}</h3>
              <p className="text-sm text-gray-500">{location.date}</p>
              <p className="text-sm text-gray-600 mt-1">{location.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}