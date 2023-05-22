import React from 'react';
import video from './video/video2.mp4';
import video2 from './video/video2.webm';

export default function VideoBlock(): JSX.Element {
  return (
    <div className="video">
      <video
        controls
        autoPlay
        muted
        preload="auto"
        poster="/photos/sitePhotos/Logo.png"
      >
        <source src={video2} type="video/webm" />
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
