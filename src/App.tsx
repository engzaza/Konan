import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PageLayout } from './components/Layout/PageLayout';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { MapPage } from './pages/Map/MapPage';
import { ActivityPage } from './pages/Activity/ActivityPage';
import { RelationshipsPage } from './pages/Relationships/RelationshipsPage';
import { SearchPage } from './pages/Search/SearchPage';
import { DevicesPage } from './pages/Devices/DevicesPage';
import { SettingsPage } from './pages/Settings/SettingsPage';
import { singleInstance } from './utils/singleInstance';

export function App() {
  useEffect(() => {
    // Check for existing instance
    if (!singleInstance.lock()) {
      alert('Application is already running');
      window.close();
      return;
    }

    // Start heartbeat to maintain instance lock
    singleInstance.startHeartbeat();

    // Cleanup on unmount
    return () => {
      singleInstance.release();
    };
  }, []);

  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/relationships" element={<RelationshipsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}