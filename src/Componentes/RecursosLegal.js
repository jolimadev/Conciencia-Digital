import React from "react";
import imagenRecurso1 from "../imagenes/recurso1.png";
import imagenRecurso2 from "../imagenes/recurso2.png";
import imagenRecurso3 from "../imagenes/recurso3.png";
import "../CSS/animationletters.css";

function RecursosLegal() {
  return (
    <div className="py-5 main-section mt-5">
      <div className="container text-center text-white">
        <h2 className="text-decoration-underline mb-5">Recursos</h2>
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
                />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "Curso en Línea sobre Derecho de Autor en el Entorno Digital"
                </h5>
                <p className="card-text">
                  Aprende sobre el derecho de autor en el mundo digital,
                  incluyendo cómo proteger tus creaciones en línea y comprender
                  los aspectos legales de compartir contenido en internet.
                </p>
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
              style={{ backgroundColor: "#1d4f7c" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenRecurso2}
                  alt="imagen con frase quiz test contra cyberbullying"
                />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "Conoce tus Derechos como Consumidor en Línea"
                </h5>
                <p className="card-text">
                  Infórmate sobre tus derechos al realizar compras en línea,
                  desde la transparencia en la información hasta las políticas
                  de devolución, en este recurso oficial de una organización de
                  protección al consumidor.
                </p>
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
              style={{ backgroundColor: "#1d4f7c" }}
            >
              <div className="embed-responsive embed-responsive-16by9">
                <img
                  className="embed-responsive-item img-fluid zoom-effect"
                  src={imagenRecurso3}
                  alt="imagen logo de Interland by Google"
                />
              </div>
              <div className="card-body text-white">
                <h5 className="card-title">
                  "Datos Personales y Privacidad en la Era Digital"
                </h5>
                <p className="card-text ">
                  Este curso en línea ofrece una comprensión profunda de los
                  conceptos de privacidad y protección de datos, incluido el uso
                  gubernamental de la información personal. Explora tus derechos
                  digitales y cómo tomar medidas para proteger tu privacidad en
                  línea. 
                </p>
                <a
                  href="https://beinternetawesome.withgoogle.com/en_us/interland"
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

export default RecursosLegal;
