import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PageLayout } from './components/Layout/PageLayout';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { MapPage } from './pages/Map/MapPage';
import { ActivityPage } from './pages/Activity/ActivityPage';
import { RelationshipsPage } from './pages/Relationships/RelationshipsPage';
import { SearchPage } from './pages/Search/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/relationships" element={<RelationshipsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;