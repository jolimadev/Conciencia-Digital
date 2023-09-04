import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Spinner = () => {
    const spinnerStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
  
    return (
      <div style={spinnerStyle}>
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Cargando...</span> {/*Esta clase se utiliza para ocultar el contenido de forma accesible para lectores de pantalla */}
        </div>
      </div>
    );
  };
  

export default Spinner;
