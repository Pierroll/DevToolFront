import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importa Routes en lugar de Switch
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import HerramientaList from './components/Herramienta/HerramientaList';
import SugerenciaList from './components/Sugerencia/SugerenciaList';
import HerramientaForm from './components/Herramienta/HerramientaForm';
import SugerenciaForm from './components/Sugerencia/SugerenciaForm';
import HerramientaDetail from './components/Herramienta/HerramientaDetail';  // Si decides tener un detalle de herramienta

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Barra de navegación */}
        
        <Routes>  {/* Reemplaza Switch con Routes */}
          {/* Rutas de la aplicación */}
          <Route exact path="/" element={<HerramientaList />} /> {/* Cambié el prop "component" por "element" */}
          <Route path="/sugerencias" element={<SugerenciaList />} />
          <Route path="/nueva-herramienta" element={<HerramientaForm />} />
          <Route path="/nueva-sugerencia" element={<SugerenciaForm />} />
          <Route path="/detalle-herramienta/:id" element={<HerramientaDetail />} />  {/* Detalles de una herramienta */}
        </Routes>
        
        <Footer /> {/* Pie de página */}
      </div>
    </Router>
  );
}

export default App;
