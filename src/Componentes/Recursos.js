import React from "react";
import imagenRecurso1 from "../imagenes/recurso1.png";
import imagenRecurso2 from "../imagenes/recurso2.png";
import imagenRecurso3 from "../imagenes/recurso3.png";
import "../CSS/animationletters.css";

function Recursos() {
  return (
    <div className="py-5 main-section mt-5">
      <div className="container text-center text-white">
        <h2 className="text-decoration-underline mb-5">Recursos</h2>
        <div className="row">
          {/*RECURSOS CARDS */}
          <div className="col-md-4 mb-4">
            <div
              className="card shadow-lg p-3 mb-5 rounded "
              style={{ backgroundColor: "#6FB1C9" }}
            >
              <div className="embed-responsive embed-responsive-16by9 ">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenRecurso1}
                  alt="imagen con frase TEST de capacitacion contra el phishing"
                />
              </div>
              <div className="card-body ">
                <h5 className="card-title ">
                  "Test Quiz de Capacitacion contra Phishing"
                </h5>
                <p className="card-text">Fuete: Jigsaw | Goolge</p>
                <a
                  href="https://phishingquiz.withgoogle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary opacity-75 bg-dark border "
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card shadow-lg p-3 mb-5 rounded"
              style={{ backgroundColor: "#6FB1C9" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenRecurso2}
                  alt="imagen con frase quiz test contra cyberbullying"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  "Test Quiz de Campaña contra el CYBERBULLYING"
                </h5>
                <p className="card-text">Fuente: @jolimadev</p>
                <a
                  href="https://stopcyberbullying.netlify.app/"
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
              style={{ backgroundColor: "#6FB1C9" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
              <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenRecurso3}
                  alt="imagen logo de Interland by Google"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  "Interland: juego educativo de Google para enseñar a cómo ser
                  seguros en línea."
                </h5>
                <p className="card-text">Fuente: Google</p>
                <a
                  href="https://beinternetawesome.withgoogle.com/en_us/interland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary opacity-75 bg-dark border"
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
