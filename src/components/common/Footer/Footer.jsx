import React from "react";
import "./Footer.scss";
import logo from "/images/logo-footer.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <p>© 2020 Kasa. All rights reserved </p>
    </footer>
  );
}

export default Footer;
