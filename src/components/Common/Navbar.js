import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation(); // ✅ Detecta la URL actual

  return (
    <nav className="navbar">
      <div className="logo">
        {/* ✅ Enlace al Home */}
        <Link to="/">
          <img src="/logodtb.png" alt="DevToolboX Logo" className="logo-img" />
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/explore"
            className={`nav-item ${location.pathname === '/explore' ? 'active' : ''}`}
          >
            Descubrir herramientas
          </Link>
        </li>
        <li>
          <Link
            to="/suggest"
            className={`nav-item ${location.pathname === '/suggest' ? 'active' : ''}`}
          >
            Sugerir herramientas
          </Link>
        </li>
        <li>
          <Link
            to="/favorites"
            className={`nav-item ${location.pathname === '/favorites' ? 'active' : ''}`}
          >
            Favoritos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
