import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Property/Slideshow/Slideshow.jsx";
import Tags from "../components/Property/Tags/Tags.jsx";
import Rating from "../components/Property/Rating/Rating.jsx";
import Host from "../components/Property/Host/Host.jsx";
import Collapse from "../components/common/Collapse/Collapse.jsx";
import "./Property.scss";

function Property() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  // État local pour suivre quel collapse est ouvert
  const [openCollapse, setOpenCollapse] = useState(null);

  const handleToggle = (collapseId) => {
    setOpenCollapse(openCollapse === collapseId ? null : collapseId);
  };

  // Si l'ID est invalide, rediriger vers la page 404
  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="property-container">
      {/* Slideshow des images */}
      <Slideshow images={logement.pictures} />

      {/* Infos principales */}
      <div className="property-info">
        <div className="property-title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <Tags tags={logement.tags} />
        </div>

        {/* Host et rating */}
        <div className="property-host">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      {/* Collapses pour description et équipements */}
      <div className="property-collapses">

          <Collapse
          title="Description"
          content={logement.description}
          isOpen={openCollapse === "description"}
          onToggle={() => handleToggle("description")}
          />

          <Collapse
          title="Équipements"
          content={
            <ul className="equipments-list">
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
          isOpen={openCollapse === "equipments"}
          onToggle={() => handleToggle("equipments")}
          />
 
      </div>
    </div>
  );
}

export default Property;
