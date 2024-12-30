export const mockTimelineItems = [
  {
    id: '1',
    time: '2 hours ago',
    title: 'Shared photos on Snapchat',
    description: 'Shared 3 photos with Friends Group',
    type: 'media' as const
  },
  {
    id: '2',
    time: '5 hours ago',
    title: 'Visited Downtown Coffee',
    description: 'Check-in at 123 Main St',
    type: 'location' as const
  },
  {
    id: '3',
    time: 'Yesterday',
    title: 'Facebook Messenger',
    description: '15 messages in Project Discussion',
    type: 'message' as const
  }
];

export const mockLocations = [
  {
    id: '1',
    name: 'Central Park',
    description: 'Morning jog and coffee at Bethesda Fountain',
    date: '2024-03-15',
    latitude: 40.7829,
    longitude: -73.9654,
    type: 'visit' as const
  },
  {
    id: '2',
    name: 'Times Square',
    description: 'Met friends for dinner at Restaurant Row',
    date: '2024-03-14',
    latitude: 40.7580,
    longitude: -73.9855,
    type: 'event' as const
  },
  {
    id: '3',
    name: 'Brooklyn Bridge Park',
    description: 'Sunset photoshoot with skyline views',
    date: '2024-03-13',
    latitude: 40.7024,
    longitude: -73.9960,
    type: 'photo' as const
  },
  {
    id: '4',
    name: 'High Line',
    description: 'Afternoon walk and art installations',
    date: '2024-03-12',
    latitude: 40.7480,
    longitude: -74.0048,
    type: 'visit' as const
  }
];