import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import de l'icône
import "./Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <FaChevronDown className={`icon ${isOpen ? "open" : ""}`} />
      </div>
      <div className={`collapse-content ${isOpen ? "show" : ""}`}>
        <div className="collapse-body">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
