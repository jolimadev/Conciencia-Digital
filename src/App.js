import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/animationletters.css";
///componentes Visuales
import Formulario from "./Componentes/Formulario";
import Articulos from "./Componentes/Articulos";
import Recursos from "./Componentes/Recursos";

const App = () => {
  return (
    <div
      style={{
        background: "rgb(2,0,36)",
        background:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(3,131,60,1) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container justify-content-between">
          <div>
            <Link to="/" className="navbar-brand">
              Conciencia Digital
            </Link>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/acerca" className="nav-link">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div
        className="bg-primary py-5"
        style={{
          background: "rgb(2,0,36)",
          background:
            "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(3,131,60,1) 100%, rgba(0,212,255,1) 100%)",
        }}
      >
        <div className="container text-center text-white">
          <h1>¡Bienvenidos a Conciencia Digital!</h1>
          <br></br>
          <p className="typing-text">
            Nos dedicamos a promover el uso responsable de las herramientas web.
            <br />
            Reconocemos la importancia de emplear los medios digitales de manera
            consciente y responsable, recordando que somos nosotros quienes
            dirigimos su impacto en nuestras vidas, y no al revés.
          </p>
        </div>
      </div>

      {/* Sección de artículos sobre consumo consciente en redes y creadores de contenido filántropos */}
      <Articulos />

      {/*RECURSOS */}
      <Recursos />

      {/*FORMULARIO FORM CON VALIDACION BRO */}
      <Formulario />

      {/*FOOTER */}
      <footer className="footer text-center bg-dark text-white py-4">
        <p>Made by @jolimadev</p>
        <div>
          <a
            href="https://www.linkedin.com/in/juanolima/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/jolimadev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white ml-3"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
