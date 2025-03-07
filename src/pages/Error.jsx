import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="Error-container">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error;
