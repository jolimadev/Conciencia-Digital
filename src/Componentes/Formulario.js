import React, { useState } from "react";

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, enviar datos a un servidor, enviar un correo, etc.
    
    // Después de enviar el formulario, puedes limpiar los campos
    setName("");
    setEmail("");
    setMessage("");
    setEmailError(false);
  };

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  return (
    <div
      className="bg-primary py-5"
      style={{
        background: "rgb(2,0,36)",
        background:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(3,131,60,1) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className="container text-center text-white">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombre y Apellido"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-control ${emailError ? "is-invalid" : ""}`}
              required
            />
            {emailError && <div className="invalid-feedback">Ingresa un correo válido.</div>}
          </div>
          <div className="form-group">
            <textarea
              placeholder="Mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
