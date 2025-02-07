// /components/Common/Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { Home, Compass, PlusCircle, Search, Star } from "lucide-react";
import './Navbar.css'; // Importa el archivo CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="nav-links">
            <Link to="/" className="logo">
              <span>DevToolboX</span>
            </Link>
            
            <div className="nav-links">
              <Link to="/" className="nav-link active">
                <Home />
                Inicio
              </Link>
              <Link to="/explorar" className="nav-link">
                <Compass />
                Explorar Herramientas
              </Link>
              <Link to="/sugerir" className="nav-link">
                <PlusCircle />
                Sugerir Herramienta
              </Link>
            </div>
          </div>

          <div className="nav-links">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Buscar herramientas..." 
                className="search-input"
              />
              <Search className="search-icon" />
            </div>
            <button className="nav-link">
              <Star />
              <span className="sr-only">Favoritos</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
