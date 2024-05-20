import React from 'react'
import { Link } from 'react-router-dom';




const Eventos = () => {
  return (
    <section className="event-section text-center py-5 mb-5 text-white">
    <h2 className='text-decoration-underline mb-5'>Novedades</h2>
    <p>¡Evento Online PRONTO! Aplica como colaborador/a o sponsor si perteneces al rubro de IT, Psicología enfocada al ITAA, o Derecho Digital. </p>
    <Link className="mt-5 btn btn-primary opacity-75 bg-dark border btn-outline-secondary" to="/Formulario">Aplica</Link>
   
  </section>
  )
}

export default Eventos