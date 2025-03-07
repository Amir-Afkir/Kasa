import React from "react";
import "./Gallery.scss";

function Gallery({ title, image }) {
  return (
    <div className="Gallery" style={{ backgroundImage: `url(${image})` }}>
      <h2>{title}</h2>
    </div>
  );
}

export default Gallery;
