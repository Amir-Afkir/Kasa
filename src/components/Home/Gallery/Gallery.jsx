import React from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.scss";

function Gallery({ id, title, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${id}`); // Redirige vers la page Property correspondant au logement
  };

  return (
    <div className="Gallery" style={{ backgroundImage: `url(${image})` }} onClick={handleClick}>
      <h2>{title}</h2>
    </div>
  );
}

export default Gallery;
