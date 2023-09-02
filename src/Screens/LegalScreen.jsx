import React from "react";
import ArticulosLegal from "../Componentes/ArticulosLegal";
import RecursosLegal from "../Componentes/RecursosLegal";
import Footer from "../Componentes/Footer";



const LegalScreen = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(2,0,36)",
        background:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(3,131,60,1) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      {/*Seccion Informativa*/}
      <div id="Legal" className="py-4 main-section">
        <div className="container text-center text-white font-monospace py-5 mt-5">
          <h1>Derecho Digital: ¿Qué es?</h1>

          <br></br>
          <p className="typing-text lh-lg">
            El Derecho Digital se refiere a las normas que regulan nuestra
            conducta en el entorno digital.
            <br></br>
            Comprende diversos aspectos, tales como:
          </p>
          <br></br>
          <ul className="list-styled text-start typing-text">
            <li>
              <strong>Privacidad en línea:</strong> Las leyes que protegen
              nuestra información personal en internet, como el Reglamento
              General de Protección de Datos (GDPR) en Europa.
            </li>
            <li>
              <strong>Ciberseguridad:</strong> Las regulaciones para prevenir y
              abordar ataques cibernéticos, así como la protección de sistemas
              informáticos.
            </li>
            <li>
              <strong>Propiedad Intelectual en la web:</strong> Los derechos de
              autor y la propiedad de contenido en línea, como música, imágenes
              y escritos.
            </li>
            <li>
              <strong>Comercio Electrónico:</strong> Las leyes que rigen las
              transacciones y contratos en línea, asegurando la confiabilidad y
              seguridad en las compras por internet.
            </li>
            <li>
              <strong>Libertad de Expresión Digital:</strong> Las garantías para
              la expresión en línea y las restricciones para evitar el discurso
              de odio y la desinformación.
            </li>
          </ul>
          <br></br>
          <p className="typing-text lh-lg">
            Al comprender y respetar estos aspectos, contribuimos a un entorno
            digital más ético y seguro.
          </p>
        </div>
      </div>

      {/* Seccion de Articulos sobre Derecho Digitales y casos conocidos de violacion de privacidad: */}
      <ArticulosLegal />
      {/* Seccion de Recursos sobre Derecho Digitales y recursos para aprender y capacitarse: */}
      <RecursosLegal />

      {/* DESPEDIDA Y CALL TO ACTION */}
      <div id="Nosotros" className="py-4 main-section mt-4 mb-5">
        <div className="container text-center text-white font-monospace py-4 mt-5">
          <p className="typing-text lh-lg">
            Tu compromiso con la conciencia digital es poderoso y valioso. Es
            hora de convertir lo aprendido en acciones concretas. <br />
            Aquí, al final de este recorrido, recordemos que la responsabilidad
            digital está en nuestras manos. Cada clic, cada elección,
            trasciende. Nos llena de entusiasmo compartir conocimientos y
            experiencias contigo.
            <br />
            ¿Estás listo para unirte? Si tienes preguntas, sugerencias o
            simplemente deseas colaborar con este proyecto, no dudes en ponerte
            en contacto.
          </p>
        </div>
      </div>

      {/*FOOTER */}
     <Footer/>
    </div>
  );
};

export default LegalScreen;
