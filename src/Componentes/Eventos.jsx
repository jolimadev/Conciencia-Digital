import React from 'react'
import { Link } from 'react-router-dom';




const Eventos = () => {
  return (
    <section className="event-section text-center py-5 text-white">
    <h2 className='text-decoration-underline mb-5'>Próximo Evento</h2>
    <p>Evento Online PRONTO! Aplica como ponente si perteneces al rubro de Ciberseguridad & Hacking, Psicología y Derecho. </p>
    <Link className="mt-5 btn btn-primary opacity-75 bg-dark border btn-outline-secondary" to="/Formulario">Aplica como Ponente</Link>
   
  </section>
  )
}

export default Eventos