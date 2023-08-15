import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa desde react-dom/client
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // O cualquier componente raíz que estés utilizando
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');

// Utiliza createRoot en lugar de ReactDOM.render
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
