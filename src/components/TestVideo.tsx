import React, { useState, useEffect } from 'react';

interface TestVideoProps {
  src: string;
}

export const TestVideo: React.FC<TestVideoProps> = ({ src }) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('Initializing...');
  const [directError, setDirectError] = useState<string | null>(null);

  const absSrc = new URL(src, window.location.href).href;

  useEffect(() => {
    let isMounted = true;
    setStatus(`Fetching via fetch(${absSrc})...`);

    fetch(absSrc)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText}`);
        }
        return res.blob();
      })
      .then((blob) => {
        if (!isMounted) return;
        const objectUrl = URL.createObjectURL(blob);
        setBlobUrl(objectUrl);
        setStatus(`Fetch Success! Size: ${blob.size} bytes (${blob.type})`);
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error('TestVideo fetch error:', err);
        setStatus(`Fetch Failed: ${err.message}`);
      });

    return () => {
      isMounted = false;
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, [absSrc]);

  return (
    <div style={{ border: '2px dashed #ff3860', padding: '1rem', margin: '1rem 0', borderRadius: '8px', background: '#fff5f7' }}>
      <h3 style={{ color: '#cc0f35', fontWeight: 'bold' }}>[Video Diagnostic Test Section]</h3>
      <p><strong>Original src:</strong> {src}</p>
      <p><strong>Resolved Absolute src:</strong> {absSrc}</p>
      <p><strong>Fetch Status:</strong> <span style={{ color: blobUrl ? 'green' : 'red' }}>{status}</span></p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <div>
          <h4>1. Direct Stream Video (&lt;video src="..."&gt;)</h4>
          <video
            controls
            playsInline
            muted
            autoPlay
            loop
            src={src}
            style={{ width: '100%', maxHeight: '250px', background: '#000' }}
            onError={(e) => {
              const target = e.currentTarget;
              const err = target.error;
              setDirectError(err ? `Code ${err.code}: ${err.message}` : 'Unknown video error');
            }}
          />
          {directError && <p style={{ color: 'red', fontSize: '0.85em' }}>Direct Error: {directError}</p>}
        </div>

        <div>
          <h4>2. Blob Loaded Video (via JS fetch)</h4>
          {blobUrl ? (
            <video
              controls
              playsInline
              muted
              autoPlay
              loop
              src={blobUrl}
              style={{ width: '100%', maxHeight: '250px', background: '#000' }}
            />
          ) : (
            <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eee' }}>
              Waiting for blob...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
