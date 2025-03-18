import React, { useState } from "react";
import "./Faq.scss";
import Collapse from "../../common/Collapse/Collapse.jsx";

const faqData = [
  { id: 1, title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
  { id: 2, title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
  { id: 3, title: "Service", content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." },
  { id: 4, title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
];

function Faq() {
  const [openCollapseId, setOpenCollapseId] = useState(null);

  // Fonction pour gérer l'ouverture et la fermeture
  const handleToggle = (id) => {
    setOpenCollapseId(openCollapseId === id ? null : id);
  };

  return (
    <div className="faq-container">
      {faqData.map((item) => (
        <Collapse 
          key={item.id} 
          title={item.title} 
          content={item.content} 
          isOpen={openCollapseId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}

export default Faq;
