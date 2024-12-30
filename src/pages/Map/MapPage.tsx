import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Search, MapPin } from 'lucide-react';
import { mockLocations } from '../../data/mockData';
import { LocationList } from './LocationList';
import { FallbackMap } from './FallbackMap';

// Replace with your Mapbox token
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RhY2tibGl0eiIsImEiOiJjbHRpYjhwdjQwMGRqMmtvNnV2eWh6YWNrIn0.x2_iuHUQoW7rJBwF2ZbLYg';

export function MapPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-74.006, 40.7128], // New York
        zoom: 12
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      mockLocations.forEach(location => {
        const marker = new mapboxgl.Marker()
          .setLngLat([location.longitude, location.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`
                <h3 class="font-semibold">${location.name}</h3>
                <p class="text-sm text-gray-600">${location.date}</p>
                <p class="text-sm">${location.description}</p>
              `)
          )
          .addTo(map.current!);

        if (location.id === selectedLocation) {
          marker.togglePopup();
        }
      });

      return () => map.current?.remove();
    } catch (error) {
      console.warn('Map initialization failed, falling back to static view');
      setMapError(true);
    }
  }, [selectedLocation]);

  const filteredLocations = mockLocations.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Interactive Map</h1>
        <p className="text-gray-600">Explore your visited locations and memories</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200 overflow-hidden">
          {mapError ? (
            <FallbackMap locations={filteredLocations} selectedLocation={selectedLocation} />
          ) : (
            <div ref={mapContainer} className="h-[calc(100vh-16rem)]" />
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <LocationList
            locations={filteredLocations}
            selectedLocation={selectedLocation}
            onLocationSelect={setSelectedLocation}
          />
        </div>
      </div>
    </div>
  );
}