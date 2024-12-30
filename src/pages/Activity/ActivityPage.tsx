import React from 'react';
import { ActivityTimeline } from '../../components/Dashboard/ActivityTimeline';
import { mockTimelineItems } from '../../data/mockData';

export function ActivityPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Activity Log</h1>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <ActivityTimeline items={mockTimelineItems} />
      </div>
    </div>
  );
}