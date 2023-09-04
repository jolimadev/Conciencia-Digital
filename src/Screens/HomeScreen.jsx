import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/animationletters.css";
import Articulos from "../Componentes/Articulos";
import Recursos from "../Componentes/Recursos";
import Footer from "../Componentes/Footer";



const HomeScreen = () => {
  
  return (
    <div
      style={{
        backgroundColor: "rgb(2,0,36)",
        background:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(3,131,60,1) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      {/*Seccion Bienvenida */}

      <div className="py-4 main-section">
        <div className="container text-center text-white font-monospace py-5 mt-5 ">
          <h1 className="mb-4 mt-5">¡Bienvenidos a Conciencia Digital!</h1>
          <br></br>
          <p className="typing-text lh-lg">
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

      {/* DESPEDIDA Y CALL TO ACTION */}
      <div id="Nosotros" className="py-4 main-section mt-3 mb-5 ">
        <div className="container text-center text-white font-monospace py-4 mt-5 mb-lg-5">
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

      {/* COMPONENTE PARA NOTIFICAR EVENTOS & WEBINAR */}

     {/* FOOTER*/}

     <Footer/>
    </div>
  );
};

export default HomeScreen;
