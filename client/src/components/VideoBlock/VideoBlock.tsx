import React from "react";
import video from "./video/video2.mp4";
import video2 from "./video/video2.webm";
// import food from "./video/food.mp4";
// import food2 from "./video/food.webm";

import "./VideoBlock.css";

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
        {/* <source src={food} type="video/mp4" />
        <source src={food2} type="video/webm" /> */}
      </video>
      <div className="buttonWrapper">
        <a href="#mainReservationForm" type="button" className="videoButton">
          ЗАБРОНИРОВАТЬ
        </a>
      </div>
    </div>
  );
}
