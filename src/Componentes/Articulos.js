import React from 'react'

function Articulos() {
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
    <h2>
      Articulos
    </h2>
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/watch?v=UCCmf6Y7zgI" allowfullscreen></iframe>
          </div>
          <div className="card-body">
            <h5 className="card-title">"Uso Responsable de las Redes Sociales"</h5>
            <p className="card-text">Fuente: Comisión de Derechos Humanos de Mexico.</p>
            <a href="https://www.youtube.com/watch?v=UCCmf6Y7zgI" className="btn btn-primary">Ver más</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/shorts/OqejEbCv4tI" allowfullscreen></iframe>
          </div>
          <div className="card-body">
            <h5 className="card-title">"Protégete de las estafas con IA"</h5>
            <p className="card-text">Fuente: DW Español.</p>
            <a href="https://www.youtube.com/shorts/OqejEbCv4tI" className="btn btn-primary">Ver más</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/watch?v=M2HaMR3H0Cg" allowfullscreen></iframe>
          </div>
          <div className="card-body">
            <h5 className="card-title">"¿Qué es el phishing y cómo debemos protegernos?"</h5>
            <p className="card-text">Fuente: SBS Perú.</p>
            <a href="https://www.youtube.com/watch?v=M2HaMR3H0Cg" className="btn btn-primary">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Articulos