import React from "react";

export default function VideoBlock(): JSX.Element {
  return (
    <div>
      <video
        src="https://youtu.be/VO4csnkZGKc"
        controls
        autoPlay
        muted
        preload="auto"
        poster="client/public/photos/sitePhotos/Logo.png"
      >
        <source type='video/webm' />
            <source src='client/public/video/video.webm' type='video/webm' />
            <source src='client/public/video/video.mp4' type='video/mp4' />
      </video>

    </div>
  );
}
