import React, { useState } from 'react';
import { useFileUpload } from '../../hooks/useFileUpload';

export function FileUploader({ onUploadComplete }: { onUploadComplete: () => void }) {
  const { isUploading, progress, uploadFile } = useFileUpload();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const success = await uploadFile(selectedFile);
      if (success) onUploadComplete();
    }
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={!selectedFile || isUploading}
        className="btn btn-primary"
      >
        {isUploading ? 'Uploading...' : 'Upload File'}
      </button>
      {isUploading && (
        <div className="progress">
          {progress.loaded} / {progress.total}
        </div>
      )}
    </div>
  );
}
