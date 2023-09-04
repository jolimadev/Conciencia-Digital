import React from "react";
import imagenRecurso1 from "../imagenes/imgslegal/RecursoLegal1.png";
import imagenRecurso2 from "../imagenes/imgslegal/RecursoLegal2.png";
import imagenRecurso3 from "../imagenes/imgslegal/RecursoLegal3.png";
import "../CSS/animationletters.css";

function RecursosLegal() {
  return (
    <div className="py-5 main-section mt-5">
      <div className="container text-center text-white">
        <h2 className="text-decoration-underline mb-5">Recursos Educativos</h2>
        <div className="row ">
          {/*RECURSOS CARDS */}
          <div className="col-md-4 mb-4">
            <div
              className="card shadow-lg p-3 mb-5 rounded "
              style={{ backgroundColor: "#1d4f7c" }}
            >
              <div className="embed-responsive embed-responsive-16by9 ">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenRecurso1}
                  alt="imagen con frase TEST de capacitacion contra el phishing"
                  style={{
                    width: '100%',
                    height: '250px'
                  }}
             />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "Derecho de Autor Digital"
                </h5>
                <p className="card-text">
                Explora cómo proteger tus creaciones en línea y comprender los aspectos legales de compartir contenido en internet.
                </p>
                <a
                  href="https://phishingquiz.withgoogle.com/"
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
              style={{ backgroundColor: "#1d4f7c" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenRecurso2}
                  alt="imagen con frase quiz test contra cyberbullying"
                  style={{
                    width: '100%',
                    height: '250px'
                  }}
               />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                "Derechos del Consumidor en Línea"
                </h5>
                <p className="card-text">
                Conoce tus derechos al realizar compras en línea, desde la transparencia en la información hasta las políticas de devolución.
                </p>
                <a
                  href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/escuela-argentina-de-educacion-en-consumo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary opacity-75 bg-dark border btn-outline-secondary"
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
                  src={imagenRecurso3}
                  alt="imagen logo de Interland by Google"
                  style={{
                    width: '100%',
                    height: '250px'
                  }}
                />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                "Privacidad Digital"
                </h5>
                <p className="card-text ">
                Comprende los conceptos de privacidad, protección de datos en la era digital y más derechos digitales.
                </p>
                <a
                  href="https://www.argentina.gob.ar/aaip/datospersonales/derechos"
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

export default RecursosLegal;
