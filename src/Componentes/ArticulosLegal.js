import React from "react";
/*Imagenes */
import imagenArticulo1 from "../imagenes/articulo1.png";
import imagenArticulo2 from "../imagenes/articulo2.png";
import imagenArticulo3 from "../imagenes/articulo3.png";

function ArticulosLegal() {
  return (
    <div className="py-5 main-section mt-5">
      <div className="container text-center text-white">
        <h2 className="text-decoration-underline mb-5">Articulos</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div
              className="card shadow-lg p-3 mb-5 rounded"
              style={{ backgroundColor: "#1d4f7c" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenArticulo1}
                  alt="imagen relacionada al derecho digital"
                />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "Principios Clave del Derecho Digital"
                </h5>
                <p className="card-text">
                  Fuente: Universidad de Derecho Digital.
                  <br />
                  Este artículo explora los principios fundamentales del Derecho
                  Digital, incluyendo la privacidad en línea, la ciberseguridad
                  y la propiedad intelectual en la web.
                </p>
                <a
                  href="https://www.ejemplolink.com/articulo-derecho-digital"
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
            <div
              className="card shadow-lg p-3 mb-5 rounded"
              style={{ backgroundColor: "#1d4f7c" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenArticulo2}
                  alt="imagen relacionada a la privacidad en línea"
                />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "El Caso de Vigilancia Masiva: Snowden y la NSA"
                </h5>
                <p className="card-text">
                  Fuente: The Guardian.
                  <br />
                  Este artículo analiza cómo el caso de Edward Snowden reveló la
                  vigilancia masiva por parte de la NSA, desencadenando un
                  debate global sobre la privacidad en línea y los límites de la
                  vigilancia gubernamental.
                </p>
                <a
                  href="https://www.theguardian.com/us-news/edward-snowden"
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
            <div
              className="card shadow-lg p-3 mb-5 rounded"
              style={{ backgroundColor: "#1d4f7c" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenArticulo3}
                  alt="imagen relacionada a la inteligencia artificial y derechos digitales"
                />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "IA y Protección de la Propiedad Digital"
                </h5>
                <p className="card-text">
                  Fuente: Instituto de Ética Digital.
                  <br />
                  Este artículo explora cómo la inteligencia artificial plantea
                  desafíos en la protección de la propiedad digital, y ofrece
                  consejos sobre cómo los individuos pueden defenderse contra el
                  robo de propiedad intelectual en un mundo cada vez más
                  digitalizado.
                </p>
                <a
                  href="https://www.ejemplolink.com/articulo-ia-derechos-digitales"
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

export default ArticulosLegal;
