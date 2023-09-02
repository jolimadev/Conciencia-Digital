import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

const Formulario = () => {
  const form = useRef();

  // Función para validar el dominio del correo electrónico: importante para evitar spam bro
  const validateEmail = (email) => {
    const validDomains = /(gmail\.com|outlook\.com|hotmail\.com)$/i;
    return validDomains.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validacion del mail bro
    const userEmail = form.current.user_email.value;
    if (!validateEmail(userEmail)) {
      alert(
        "Por favor, ingrese un correo válido con dominio permitido: gmail,outlook, etc."
      );
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_vypimfd",
        "template_47xdsno",
        form.current,
        "JiNTtGJqCvulU8xYP"
      );

      alert(
        "Su mensaje ha sido enviado📨, será contestado a la brevedad💚",
        result.text
      );
      form.current.reset();
    } catch (error) {
      alert("Lo siento, no ha sido posible enviar el mensaje", error.text);
    }
  };

  return (
    <>
    <div
      id="Contacto"
      className="py-5 mt-5 main-section"
      style={{
        backgroundColor: "rgb(2,0,36)",
        background:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(3,131,60,1) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className="container text-center text-white">
        <h2 className="text-decoration-underline mb-5 mt-5">Contacto</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="needs-validation shadow-lg p-5 mb-5 rounded"
        >
          <div className="mb-3">
            <label htmlFor="user_name" className="form-label">
              Nombre y Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="user_name"
              name="user_name"
              required
              placeholder="Tu nombre y apellido"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user_email" className="form-label">
             Tu Email
            </label>
            <input
              type="email"
              className="form-control"
              id="user_email"
              name="user_email"
              required
              placeholder="ejemplo@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="8"
              required
              placeholder="Ingresa tu consulta.."
            />
          </div>
          <button
            type="submit"
            className="mt-5 btn btn-primary opacity-75 bg-dark border btn-outline-secondary"
          >
            Enviar
          </button>
        </form>
      </div>
     </div>
     {/*el espacio en blanco se origina aqui, que podra ser? */}
    <Footer />
    </>
  );
};

export default Formulario;
