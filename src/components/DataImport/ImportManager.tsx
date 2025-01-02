import React, { useState } from 'react';
import { Upload, Loader, CheckCircle, XCircle } from 'lucide-react';

interface ImportStatus {
  status: 'idle' | 'importing' | 'success' | 'error';
  message?: string;
}

export function ImportManager() {
  const [importStatus, setImportStatus] = useState<ImportStatus>({ status: 'idle' });

  const handleImport = async () => {
    setImportStatus({ status: 'importing' });
    
    try {
      // Simulate import process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setImportStatus({ 
        status: 'success', 
        message: 'Data imported successfully' 
      });

      // Reset status after 3 seconds
      setTimeout(() => {
        setImportStatus({ status: 'idle' });
      }, 3000);
    } catch (error) {
      setImportStatus({ 
        status: 'error', 
        message: 'Failed to import data' 
      });
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Import Data</h3>
      
      <button
        onClick={handleImport}
        disabled={importStatus.status === 'importing'}
        className="w-full px-4 py-3 flex items-center justify-center gap-2 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {importStatus.status === 'importing' ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            <span>Importing...</span>
          </>
        ) : importStatus.status === 'success' ? (
          <>
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-green-600">{importStatus.message}</span>
          </>
        ) : importStatus.status === 'error' ? (
          <>
            <XCircle className="w-5 h-5 text-red-500" />
            <span className="text-red-600">{importStatus.message}</span>
          </>
        ) : (
          <>
            <Upload className="w-5 h-5" />
            <span>Import Data</span>
          </>
        )}
      </button>
    </div>
  );
}