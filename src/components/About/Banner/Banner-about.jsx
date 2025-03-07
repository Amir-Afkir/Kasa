import React from "react";
import "./Banner-about.scss";

function BannerAbout({ image, text }) {
  return (
    <div className="BannerAbout" style={{ backgroundImage: `url(${image})` }}>
      <h1>{text}</h1>
    </div>
  );
}

export default BannerAbout;
