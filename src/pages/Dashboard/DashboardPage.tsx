import React from 'react';
import { MessageSquare, MapPin, Image, Users } from 'lucide-react';
import { StatCard } from '../../components/Dashboard/StatCard';
import { ActivityTimeline } from '../../components/Dashboard/ActivityTimeline';
import { mockTimelineItems } from '../../data/mockData';

export function DashboardPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
        <p className="text-gray-600">Here's what's happening with your digital life</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Messages"
          value="2,451"
          icon={MessageSquare}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Places Visited"
          value="38"
          icon={MapPin}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Media Shared"
          value="892"
          icon={Image}
          trend={{ value: 3, isPositive: false }}
        />
        <StatCard
          title="Active Friends"
          value="147"
          icon={Users}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <ActivityTimeline items={mockTimelineItems} />
      </div>
    </div>
  );
}