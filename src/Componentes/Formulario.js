import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      alert("Por favor, ingrese un correo válido con dominio permitido: gmail,outlook, etc.");
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
    <div id="Contacto" className="py-5 main-section mt-5">
      <div className="container text-center text-white">
        <h2 className="text-decoration-underline mb-5">Contacto</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="needs-validation shadow-lg p-5 mb-5 rounded"
        >
          <div className="mb-3">
            <label htmlFor="user_name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="user_name"
              name="user_name"
              required
              placeholder="Aqui ingresa tu nombre"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="user_email" className="form-label">
              Email
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
              rows="5"
              required
              placeholder="Motivo de consulta.."
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary opacity-75 bg-dark border"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
