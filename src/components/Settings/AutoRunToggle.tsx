import React from 'react';
import { Power, Loader } from 'lucide-react';
import { useAutoRun } from '../../hooks/useAutoRun';

export function AutoRunToggle() {
  const { isEnabled, isLoading, error, enable, disable } = useAutoRun();

  const handleToggle = async () => {
    if (isEnabled) {
      await disable();
    } else {
      await enable();
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl border border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-gray-900">Auto-Start</h3>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>

      <button
        onClick={handleToggle}
        disabled={isLoading}
        className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
          isEnabled
            ? 'bg-blue-50 border-blue-200'
            : 'border-gray-200 hover:border-blue-200'
        }`}
      >
        <div className="flex items-center gap-3">
          <Power className={`w-5 h-5 ${isEnabled ? 'text-blue-500' : 'text-gray-400'}`} />
          <span className="font-medium">
            {isEnabled ? 'Auto-start enabled' : 'Enable auto-start'}
          </span>
        </div>
        {isLoading && <Loader className="w-5 h-5 text-blue-500 animate-spin" />}
      </button>
    </div>
  );
}