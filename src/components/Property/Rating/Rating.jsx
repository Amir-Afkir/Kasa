import React from "react";
import "./Rating.scss";

function Rating({ rating }) {
  const stars = Array(5).fill(0);

  return (
    <div className="property-rating">
      {stars.map((_, index) => (
        <i
          key={index}
          className={index < rating ? "fa-solid fa-star star filled" : "fa-solid fa-star star"}
        ></i>
      ))}
    </div>
  );
}

export default Rating;
