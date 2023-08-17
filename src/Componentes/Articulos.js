import React from 'react'

function Articulos() {
  return (
    <div className='py-5 main-section mt-5'>
  <div className="container text-center text-white">
    <h2 className='text-decoration-underline mb-5'>
      Articulos
    </h2>
    <div className="row">
      <div className="col-md-4 mb-4">
      <div className="card shadow-lg p-3 mb-5 rounded">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/watch?v=UCCmf6Y7zgI" allowfullscreen></iframe>
          </div>
          <div className="card-body">
            <h5 className="card-title">"Uso Responsable de las Redes Sociales"</h5>
            <p className="card-text">Fuente: Comisión de Derechos Humanos de Mexico.</p>
            <a href="https://www.youtube.com/watch?v=UCCmf6Y7zgI"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary opacity-75 bg-dark border">Ver más</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
      <div className="card shadow-lg p-3 mb-5 rounded">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/shorts/OqejEbCv4tI" allowfullscreen></iframe>
          </div>
          <div className="card-body">
            <h5 className="card-title">"Protégete de las estafas con IA"</h5>
            <p className="card-text">Fuente: DW Español.</p>
            <a href="https://www.youtube.com/shorts/OqejEbCv4tI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary opacity-75 bg-dark border">Ver más</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4 ">
        <div className="card shadow-lg p-3 mb-5 rounded">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/watch?v=M2HaMR3H0Cg" allowfullscreen></iframe>
          </div>
          <div className="card-body">
            <h5 className="card-title">"¿Qué es el phishing y cómo debemos protegernos?"</h5>
            <p className="card-text">Fuente: SBS Perú.</p>
            <a href="https://www.youtube.com/watch?v=M2HaMR3H0Cg" 
             target="_blank" 
             rel="noopener noreferrer"
            className="btn btn-primary opacity-75 bg-dark border">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Articulos