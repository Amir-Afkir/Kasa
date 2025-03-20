import React, { useState, useEffect } from "react";
import "./Slideshow.scss";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Précharger toutes les images dès que le composant est monté
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Ne pas afficher les boutons si une seule image
  if (images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      {/* Afficher les boutons seulement si plusieurs images */}
      {images.length > 1 && (
        <>
          <div className="slideshow-controls">
            <button className="prev" onClick={prevSlide} aria-label="Previous slide">
              ‹
            </button>
            <button className="next" onClick={nextSlide} aria-label="Next slide">
              ›
            </button>
          </div>

          {/* Afficher le compteur seulement si plusieurs images */}
          <div className="slideshow-counter">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;
