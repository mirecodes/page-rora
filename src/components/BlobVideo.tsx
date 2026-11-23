import React, { useEffect, useState, useRef } from 'react';

interface BlobVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export const BlobVideo: React.FC<BlobVideoProps> = ({ src, ...props }) => {
  // Start empty: a raw src would make <video> download the file a second time (and on the
  // sandboxed host, where Range requests are ignored, it can't play it anyway).
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let active = true;
    let createdUrl: string | null = null;

    // Resolve absolute URL based on document location
    const absoluteUrl = new URL(src, window.location.href).href;

    fetch(absoluteUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        if (!active) return;
        const mp4Blob = new Blob([blob], { type: 'video/mp4' });
        createdUrl = URL.createObjectURL(mp4Blob);
        setVideoSrc(createdUrl);
      })
      .catch((err) => {
        console.warn(`Failed to fetch video blob for ${src} (${absoluteUrl}):`, err);
        if (active) {
          setVideoSrc(absoluteUrl);
        }
      });

    return () => {
      active = false;
      if (createdUrl) {
        URL.revokeObjectURL(createdUrl);
      }
    };
  }, [src]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      playsInline
      {...props}
    />
  );
};


