import React from 'react';
import { Power, Bell, RefreshCw, Battery } from 'lucide-react';
import { SettingsToggle } from '../../components/Settings/SettingsToggle';
import { useAppStore } from '../../store/appStore';

export function SettingsPage() {
  const {
    autoRunEnabled,
    notificationsEnabled,
    syncEnabled,
    powerSaveEnabled,
    setAutoRun,
    setNotifications,
    setSync,
    setPowerSave,
  } = useAppStore();

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your application preferences</p>
      </div>

      <div className="space-y-4 max-w-2xl">
        <SettingsToggle
          label="Auto-Start"
          description="Launch application when system starts"
          enabled={autoRunEnabled}
          onChange={setAutoRun}
          icon={<Power className="w-5 h-5 text-blue-500" />}
        />

        <SettingsToggle
          label="Notifications"
          description="Receive alerts and updates"
          enabled={notificationsEnabled}
          onChange={setNotifications}
          icon={<Bell className="w-5 h-5 text-blue-500" />}
        />

        <SettingsToggle
          label="Background Sync"
          description="Keep data synchronized in the background"
          enabled={syncEnabled}
          onChange={setSync}
          icon={<RefreshCw className="w-5 h-5 text-blue-500" />}
        />

        <SettingsToggle
          label="Power Saver"
          description="Optimize for better battery life"
          enabled={powerSaveEnabled}
          onChange={setPowerSave}
          icon={<Battery className="w-5 h-5 text-blue-500" />}
        />
      </div>
    </div>
  );
}