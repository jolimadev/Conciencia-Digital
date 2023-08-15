import React from 'react'

function Recursos() {
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
      Recursos
    </h2>
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://phishingquiz.withgoogle.com/" allowfullscreen></iframe>
          </div>
          <div className="card-body">
            <h5 className="card-title">"Capacitacion contra Phishing"</h5>
            <p className="card-text">Fuete: Jigsaw|Goolge</p>
            <a href="https://phishingquiz.withgoogle.com/" className="btn btn-primary">Ver más</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://stopcyberbullying.netlify.app/" allowfullscreen></iframe>
          </div>
          <div className="card-body">
            <h5 className="card-title">"Campaña contra el #CYBERBULLYING"</h5>
            <p className="card-text">Fuente: @jolimadev</p>
            <a href="https://stopcyberbullying.netlify.app/" className="btn btn-primary">Ver más</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://es.khanacademy.org/" allowfullscreen></iframe>
          </div>
          <div className="card-body">
            <h5 className="card-title">"ONG: Educacion Online Gratuita a nivel mundial"</h5>
            <p className="card-text">Fuente: Khan Academy</p>
            <a href="https://es.khanacademy.org/" className="btn btn-primary">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Recursos