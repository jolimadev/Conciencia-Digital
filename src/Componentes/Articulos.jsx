import React from "react";
/*Imagenes */
import imagenArticulo1 from "../imagenes/articulo1.jpg";
import imagenArticulo2 from "../imagenes/articulo2.png";
import imagenArticulo3 from "../imagenes/articulo3.png";

function Articulos() {
  return (
    <div className="py-5 main-section mt-5">
      <div className="container text-center text-white">
        <h2 className="text-decoration-underline mb-5">Articulos</h2>
        <div className="row">
          {/*ARTICULOS CARDS: */}
          <div className="col-md-4 mb-4 ">
            <div
              className="card shadow-lg p-3 mb-5 rounded"
              style={{ backgroundColor: "#607d8b" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenArticulo1}
                  alt="imagen con frase derecho al uso seguro de las teconologias de la información"
                  style={{
                    width: '100%',
                    height: '250px'
                  }}
                />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "ITAA: Ayuda para personas adictas al consumo de redes sociales"
                </h5>
                <p className="card-text">Fuente: Web oficial del Organismo.</p>
                <a
                  href="https://internetaddictsanonymous.org/es/espanol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-outline-secondary opacity-75 bg-dark border"
                > 
                  Ver más
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card shadow-lg p-3 mb-5 rounded"
              style={{ backgroundColor: "#607d8b" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenArticulo2}
                  alt="imagen con frase derecho al uso seguro de las teconologias de la información"
                  style={{
                    width: '100%',
                    height: '250px'
                  }}
               />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "Evitar estafas generadas por IA"
                </h5>
                <p className="card-text">Fuente: acens by Telefónica Tech.</p>
                <a
                  href="https://blog.acens.com/general/como-evitar-las-estafas-generadas-por-la-ia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-outline-secondary  opacity-75 bg-dark border"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 ">
            <div
              className="card shadow-lg p-3 mb-5 rounded "
              style={{ backgroundColor: "#607d8b" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenArticulo3}
                  alt="imagen con frase beware of phishing, o que es el phsiign?"
                  style={{
                    width: '100%',
                    height: '250px'
                  }}
               />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "¿Qué es el phishing y cómo prevenirlo?"
                </h5>
                <p className="card-text">Fuente: IBM.</p>
                <a
                  href="https://www.ibm.com/es-es/topics/phishing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-outline-secondary opacity-75 bg-dark border"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articulos;
