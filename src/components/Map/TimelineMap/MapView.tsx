import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { TimelineEvent } from './types';
import { FallbackView } from './FallbackView';

interface MapViewProps {
  events: TimelineEvent[];
  selectedEventId?: string;
  onEventSelect: (event: TimelineEvent) => void;
}

const eventColors = {
  visit: '#3B82F6', // blue
  photo: '#10B981', // green
  message: '#6366F1', // indigo
  event: '#F59E0B', // amber
};

export function MapView({ events, selectedEventId, onEventSelect }: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    try {
      // Check for WebGL support
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        throw new Error('WebGL is not supported in your browser');
      }

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-74.006, 40.7128],
        zoom: 12
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      return () => {
        Object.values(markers.current).forEach(marker => marker.remove());
        map.current?.remove();
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initialize map');
      return;
    }
  }, []);

  useEffect(() => {
    if (!map.current || error) return;

    // Clear existing markers
    Object.values(markers.current).forEach(marker => marker.remove());
    markers.current = {};

    // Add new markers
    events.forEach(event => {
      const el = document.createElement('div');
      el.className = 'w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer';
      el.style.border = `2px solid ${eventColors[event.type]}`;
      
      const marker = new mapboxgl.Marker(el)
        .setLngLat([event.location.longitude, event.location.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-2">
                <h3 class="font-semibold">${event.title}</h3>
                <p class="text-sm text-gray-600">${new Date(event.timestamp).toLocaleString()}</p>
                <p class="text-sm">${event.description}</p>
              </div>
            `)
        )
        .addTo(map.current);

      markers.current[event.id] = marker;

      el.addEventListener('click', () => {
        onEventSelect(event);
      });
    });

    // If there's a selected event, center the map on it and show its popup
    if (selectedEventId && markers.current[selectedEventId]) {
      const marker = markers.current[selectedEventId];
      const event = events.find(e => e.id === selectedEventId);
      if (event) {
        map.current.flyTo({
          center: [event.location.longitude, event.location.latitude],
          zoom: 14
        });
        marker.togglePopup();
      }
    }
  }, [events, selectedEventId, onEventSelect, error]);

  if (error) {
    return (
      <FallbackView
        events={events}
        selectedEventId={selectedEventId}
        onEventSelect={onEventSelect}
        error={error}
      />
    );
  }

  return <div ref={mapContainer} className="h-full w-full rounded-lg overflow-hidden" />;
}