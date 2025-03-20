import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.scss";

function Card({ id, title, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="Card" style={{ backgroundImage: `url(${image})` }} onClick={handleClick}>
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
