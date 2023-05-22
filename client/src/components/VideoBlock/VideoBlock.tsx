import React from 'react';
import video from './video/video2.mp4';
import video2 from './video/video2.webm';
import './VideoBlock.css';

export default function VideoBlock(): JSX.Element {
  return (
    <div className="videoWrapper">
      <video
        className="videoBlock"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        poster="/photos/sitePhotos/Logo.png"
      >
        <source src={video} type="video/mp4" />
        <source src={video2} type="video/webm" />
      </video>
      <div className="buttonWrapper">
        <button type="button" className="videoButton">
          ЗАБРОНИРОВАТЬ
        </button>
      </div>
    </div>
  );
}
