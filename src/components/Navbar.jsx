import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";  // Asegúrate de importar los estilos

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Estado para manejar el menú en móvil

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Cambia el estado para abrir/cerrar el menú en móvil
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-list ${isMenuOpen ? "mobile-active" : ""}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Inicio</Link> 
        </li>
        <li className="navbar-item">
          <Link to="/favorites" className="navbar-link">Mis Curiosidades</Link> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
