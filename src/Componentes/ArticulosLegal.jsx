import React from "react";
/*Imagenes */
import imagenArticulo1 from "../imagenes/imgslegal/articuloLegal2.png";
import imagenArticulo2 from "../imagenes/imgslegal/articuloLegal1.png";
import imagenArticulo3 from "../imagenes/imgslegal/articuloLegal3.png";

function ArticulosLegal() {
  return (
    <div className="py-5 main-section mt-5">
      <div className="container text-center text-white">
        <h2 className="text-decoration-underline mb-5">Articulos</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div
              className="card shadow-lg p-3 mb-5 rounded"
              style={{ backgroundColor: "#607d8b" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenArticulo1}
                  alt="imagen relacionada al derecho digital"
                  style={{
                    width: "100%",
                    height: "250px",
                  }}
                />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "OG's protectores del Derecho Digital: La EFF"
                </h5>
                <p className="card-text">
                  Fuente: GENBETA.
                  <br />
                  Este artículo describe a la Electronic Frontier Foundation, la
                  organización que protege tu privacidad y libertad online desde
                  1990
                </p>
                <a
                  href="https://www.genbeta.com/web/asi-es-la-electronic-frontier-foundation-la-organizacion-que-protege-tu-privacidad-y-libertad-online-desde-1990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary opacity-75 bg-dark border btn-outline-secondary "
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
                  alt="imagen relacionada a la privacidad en línea"
                  style={{
                    width: "100%",
                    height: "250px",
                  }}
                />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "El Caso de Vigilancia Masiva: Edward Snowden"
                </h5>
                <p className="card-text">
                  Fuente: Nicolás Rivera.
                  <br />
                  Este artículo analiza la cronologia del caso de Edward Snowden
                  y su denuncia al gobierno de EEUU.
                </p>
                <a
                  href="https://hipertextual.com/2016/03/cronologia-edward-snowden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary opacity-75 bg-dark border btn-outline-secondary "
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
                  src={imagenArticulo3}
                  alt="imagen relacionada a la inteligencia artificial y derechos digitales"
                  style={{
                    width: "100%",
                    height: "250px",
                  }}
                />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "IA y Protección de la Propiedad Digital"
                </h5>
                <p className="card-text">
                  Fuente: IBÁN GARCÍA DEL BLANCO & JOSÉ MANUEL GÓMEZ BRAVO.
                  <br />
                  El artículo aborda cómo la inteligencia artificial plantea
                  desafíos en la protección de la propiedad digital y ofrece
                  consejos para defenderse contra el robo de propiedad
                  intelectual en un mundo cada vez más digitalizado
                </p>
                <a
                  href="https://elpais.com/opinion/2022-11-16/la-propiedad-intelectual-en-la-inteligencia-artificial.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary opacity-75 bg-dark border btn-outline-secondary"
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
