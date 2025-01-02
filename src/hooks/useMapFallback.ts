import { useState, useEffect } from 'react';
import { platform } from '../utils/platform';

export function useMapFallback() {
  const [needsFallback, setNeedsFallback] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!platform.supportsWebGL()) {
      setNeedsFallback(true);
      setError('WebGL is not supported in your browser');
    }
  }, []);

  return { needsFallback, error };
}