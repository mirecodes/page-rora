import React, { useEffect, useState, useRef } from 'react';

interface BlobVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export const BlobVideo: React.FC<BlobVideoProps> = ({ src, ...props }) => {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Normalize path
  const normalizedSrc = src.replace(/^\.\//, '');

  useEffect(() => {
    let active = true;
    let createdUrl: string | null = null;

    // Try fetching video blob directly
    fetch(src)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        if (!active) return;
        const mp4Blob = new Blob([blob], { type: 'video/mp4' });
        createdUrl = URL.createObjectURL(mp4Blob);
        setBlobUrl(createdUrl);
      })
      .catch((err) => {
        console.warn(`Failed to load video blob for ${src}:`, err);
      });

    return () => {
      active = false;
      if (createdUrl) {
        URL.revokeObjectURL(createdUrl);
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      playsInline
      {...props}
    >
      {blobUrl && <source src={blobUrl} type="video/mp4" />}
      <source src={src} type="video/mp4" />
      <source src={normalizedSrc} type="video/mp4" />
      <source src={`/${normalizedSrc}`} type="video/mp4" />
    </video>
  );
};


