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
    <div id="Contacto"  className="py-5 main-section mt-5">
      <div className="container text-center text-white">
        <h2 className='text-decoration-underline mb-5'>Contacto</h2>
        <form onSubmit={handleSubmit} className="needs-validation shadow-lg p-5 mb-5 rounded d-grid gap-3" noValidate>
          <div className="form-group ">
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
          <button type="submit" className="btn btn-primary opacity-75 bg-dark border">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
