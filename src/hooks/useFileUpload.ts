import { useState, useCallback } from 'react';

export function useFileUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState({ loaded: 0, total: 0 });

  const uploadFile = useCallback(async (file: File) => {
    setIsUploading(true);
    setProgress({ loaded: 0, total: file.size });

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'X-Progress': 'true',
        },
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      return true;
    } catch (error) {
      console.error('Upload failed:', error);
      return false;
    } finally {
      setIsUploading(false);
    }
  }, []);

  return { isUploading, progress, uploadFile };
}
