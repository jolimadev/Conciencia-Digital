import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/animationletters.css";
import Articulos from "../Componentes/Articulos";
import Recursos from "../Componentes/Recursos";
import Footer from "../Componentes/Footer";
import Eventos from "../Componentes/Eventos";



const HomeScreen = () => {
  
  return (
    <div
      style={{
        backgroundColor: "rgb(2,0,36)",
        background:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(3,131,60,1) 100%, rgba(0,212,255,1) 100%)",
          fontFamily: "Roboto, sans-serif",

        }}
    >
      {/*Seccion Bienvenida */}

      <div className="py-4 main-section">
        <div className="container text-center text-white py-5 mt-5 ">
          <h1 className="mb-4 mt-5">Bienvenido a Conciencia Digital</h1>
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
 {/* DESPEDIDA Y CALL TO ACTION */}
 {/* DESPEDIDA Y CALL TO ACTION */}
<div id="Nosotros" className="py-5 main-section mt-4 mb-5">
  <div className="container text-center text-white font-monospace py-4 mt-5 mb-lg-5">
    <figure className="text-center">
      <blockquote className="blockquote">
        <p>
          “En última instancia, argumentar que no te importa el derecho a la
          privacidad porque no tienes nada que ocultar no es diferente a decir
          que no te importa la libertad de expresión porque no tienes nada que
          decir.”
        </p>
      </blockquote>
      <figcaption className="blockquote-footer">
        Edward Snowden
      </figcaption>
    </figure>
  </div>
</div>

      {/*RECURSOS */}
      <Recursos />

      <Eventos/>

      {/* COMPONENTE PARA NOTIFICAR EVENTOS & WEBINAR */}

     {/* FOOTER*/}

     <Footer/>
    </div>
  );
};

export default HomeScreen;
