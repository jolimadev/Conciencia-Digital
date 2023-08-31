import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LegalScreen from "./Screens/LegalScreen";
import HomeScreen from "./Screens/HomeScreen";
import NavBar from "./Componentes/NavBar";
import Formulario from "./Componentes/Formulario";


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/LegalScreen" element={<LegalScreen />} />
        <Route path="/Formulario" element={<Formulario />} />
      </Routes>
    </div>
  );
};

export default App;
