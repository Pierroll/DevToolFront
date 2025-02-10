import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore Tools</Link></li>
        <li><Link to="/suggest">Suggest Tool</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;  // ✅ Importante: Exportación correcta
