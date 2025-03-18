import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "/images/logo.svg"; 

function Header() {
  const location = useLocation(); // Récupère l'URL actuelle

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo Kasa" />
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
