import React from "react";
import video from "../assets/ecom.mp4";
import "../Styles/Intro.css"; // Import your CSS file for styling

const IntroVideo = () => {
  return (
    <div className="inz̄tro-container">
      <video
        className="intro-video"
        src={video}
        muted
        autoPlay
        loop
        controlsList="nodownload"
      ></video>
    </div>
  );
};

export default IntroVideo;
