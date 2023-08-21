import React from "react";
/*Imagenes */
import imagenArticulo1 from "../imagenes/articulo1.png";
import imagenArticulo2 from "../imagenes/articulo2.png";
import imagenArticulo3 from "../imagenes/articulo3.png";

function Articulos() {
  return (
    <div className="py-5 main-section mt-5">
      <div className="container text-center text-white">
        <h2 className="text-decoration-underline mb-5">Articulos</h2>
        <div className="row">
          {/*ARTICULOS CARDS: */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg p-3 mb-5 rounded">
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid"
                  src={imagenArticulo1}
                  alt="imagen con frase derecho al uso seguro de las teconologias de la información"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  "Uso Responsable de las Redes Sociales"
                </h5>
                <p className="card-text">Fuente: Comisión de D.H de México.</p>
                <a
                  href="https://www.youtube.com/watch?v=UCCmf6Y7zgI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary opacity-75 bg-dark border"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg p-3 mb-5 rounded">
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid"
                  src={imagenArticulo2}
                  alt="imagen con frase derecho al uso seguro de las teconologias de la información"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  "Protégete de las estafas con IA"
                </h5>
                <p className="card-text">Fuente: DW Español.</p>
                <a
                  href="https://www.youtube.com/shorts/OqejEbCv4tI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary opacity-75 bg-dark border"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4 ">
            <div className="card shadow-lg p-3 mb-5 rounded ">
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid"
                  src={imagenArticulo3}
                  alt="imagen con frase beware of phishing, o que es el phsiign?"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  "¿Qué es el phishing y cómo debemos protegernos?"
                </h5>
                <p className="card-text">Fuente: YT COLNODO.</p>
                <a
                  href="https://www.youtube.com/watch?v=P47IdMR7n68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary opacity-75 bg-dark border"
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
