import React from 'react';
import { Loader, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { ConnectionStatus } from '../../types/device';

const statusConfig: Record<ConnectionStatus, { icon: React.ReactNode; text: string; className: string }> = {
  connected: {
    icon: <CheckCircle className="w-4 h-4" />,
    text: 'Connected',
    className: 'bg-green-50 text-green-700 border-green-200'
  },
  connecting: {
    icon: <Loader className="w-4 h-4 animate-spin" />,
    text: 'Connecting',
    className: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  disconnected: {
    icon: <XCircle className="w-4 h-4" />,
    text: 'Disconnected',
    className: 'bg-gray-50 text-gray-700 border-gray-200'
  },
  error: {
    icon: <AlertCircle className="w-4 h-4" />,
    text: 'Error',
    className: 'bg-red-50 text-red-700 border-red-200'
  }
};

interface DeviceStatusBadgeProps {
  status: ConnectionStatus;
}

export function DeviceStatusBadge({ status }: DeviceStatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${config.className}`}>
      {config.icon}
      {config.text}
    </span>
  );
}