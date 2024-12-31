import React, { useState } from 'react';
import { Upload, Loader } from 'lucide-react';

export function ImportButton() {
  const [isImporting, setIsImporting] = useState(false);

  const handleImport = async () => {
    setIsImporting(true);
    try {
      // Simulate import process
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Here you would typically handle the actual import logic
    } catch (error) {
      console.error('Import failed:', error);
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <button
      onClick={handleImport}
      disabled={isImporting}
      className="w-full px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
    >
      {isImporting ? (
        <>
          <Loader className="w-4 h-4 animate-spin" />
          <span>Importing...</span>
        </>
      ) : (
        <>
          <Upload className="w-4 h-4" />
          <span>Import Data</span>
        </>
      )}
    </button>
  );
}