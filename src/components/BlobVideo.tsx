import React, { useRef } from 'react';

interface BlobVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export const BlobVideo: React.FC<BlobVideoProps> = ({ src, ...props }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={videoRef}
      src={src}
      playsInline
      {...props}
    />
  );
};

