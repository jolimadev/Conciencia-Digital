import React from "react";
import imagenRecurso1 from "../imagenes/recurso1.png";
import imagenRecurso2 from "../imagenes/recurso2.png";
import imagenRecurso3 from "../imagenes/recurso3.png";
import "../CSS/animationletters.css";

function Recursos() {
  return (
    <div className="py-5 main-section mt-5">
      <div className="container text-center text-white">
        <h2 className="text-decoration-underline mb-5">Recursos Educativos</h2>
        <div className="row ">
          {/*RECURSOS CARDS */}
          <div className="col-md-4 mb-4">
            <div
              className="card shadow-lg p-3 mb-5 rounded "
              style={{ backgroundColor: "#607d8b" }}
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
                  "Quiz game para enfrentar el Phishing"
                </h5>
                <p className="card-text">Fuete: Jigsaw | Goolge</p>
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
              style={{ backgroundColor: "#607d8b" }}
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
                  "Test para concientizar sobre el CYBERBULLYING"
                </h5>
                <p className="card-text">Fuente: @jolimadev</p>
                <a
                  href="https://stopcyberbullying.netlify.app/"
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
              style={{ backgroundColor: "#607d8b" }}
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
                  "Interland: Juego educativo sobre Internet."
                </h5>
                <p className="card-text ">Fuente: Google</p>
                <a
                  href="https://beinternetawesome.withgoogle.com/en_us/interland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary opacity-75 bg-dark border btn-outline-secondary"
                >
                  {/*Guia para profesores y tutores https://storage.googleapis.com/gweb-interland.appspot.com/es-419-all/hub/pdfs/Google_SeGenialEnInternet_ElPlanDeEstudios2019.pdf*/}
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

export default Recursos;
