import React, { useState } from "react";
import { Link } from "react-router-dom";
import imagenLogo from "../imagenes/logoCD.png";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  /**
   * @param boolean
   * @description funcion para controlar el button burger del navbar, si esta desplegado o no
   */
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <img
          className="img-fluid"
          src={imagenLogo}
          alt="Logo de Conciencia Digital"
          style={{
            width: "75px",
            height: "auto",
          }}
        />
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item text-white">
              <Link className="nav-link" to="/HomeScreen">
                Inicio
              </Link>
            </li>
            <li className="nav-item text-white">
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/juanolima/?locale=en_US"
              >
                Nosotros
              </a>
            </li>
            <li className="nav-item text-white">
              <Link className="nav-link" to="/LegalScreen">
                Legal
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link className="nav-link" to="/Formulario">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
