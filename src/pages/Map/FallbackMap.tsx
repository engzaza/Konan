import React from 'react';
import { MapPin } from 'lucide-react';
import { Location } from '../../types';

interface FallbackMapProps {
  locations: Location[];
  selectedLocation: string | null;
}

export function FallbackMap({ locations, selectedLocation }: FallbackMapProps) {
  return (
    <div className="h-[calc(100vh-16rem)] p-6 flex flex-col items-center justify-center">
      <div className="max-w-md text-center">
        <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Location Overview</h3>
        <p className="text-gray-600 mb-6">
          Showing {locations.length} locations in your history
        </p>
        <div className="text-left space-y-4">
          {locations.map(location => (
            <div
              key={location.id}
              className={`p-4 rounded-lg border ${
                selectedLocation === location.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200'
              }`}
            >
              <h4 className="font-medium text-gray-900">{location.name}</h4>
              <p className="text-sm text-gray-500">{location.date}</p>
              <p className="text-sm text-gray-600 mt-1">{location.description}</p>
              <div className="mt-2 text-sm text-gray-500">
                {location.latitude.toFixed(4)}°N, {location.longitude.toFixed(4)}°W
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}