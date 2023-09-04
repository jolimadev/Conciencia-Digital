import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LegalScreen from './Screens/LegalScreen';
import HomeScreen from './Screens/HomeScreen';
import NavBar from './Componentes/NavBar';
import Formulario from './Componentes/Formulario';
//SPINNER DE CARGA BRO:
import Spinner from './Componentes/Spinner';

const App = () => {
   // console.log("App se montó");
  const [isLoading, setIsLoading] = useState(true); // Muestro el Spinner mientras isLoading sea true

  useEffect(() => {
     setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  }, []);
 
  return (
    <div>
      {isLoading ? (
        <Spinner /> 
      ) : (
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomeScreen />} /> {/* Ruta para que pre-cargue Home */}
            <Route path="/HomeScreen" element={<HomeScreen />} />
            <Route path="/LegalScreen" element={<LegalScreen />} />
            <Route path="/Formulario" element={<Formulario />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
