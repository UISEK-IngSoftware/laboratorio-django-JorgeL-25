import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
      {/* Logo grande y centrado */}
      <div className="logo-container">
        <img 
          src="/images/logo.png" 
          alt="Pokédex Logo" 
          style={{width: "400px", height: "auto", margin: "20px auto", display: "block"}} 
        />
      </div>

      {/* Barra de navegación */}
      <div className="navbar">
        <div className="nav-links">
          <a href="/">INICIO</a>
          <a href="/crear">AGREGAR POKEMON</a>
        </div>
      </div>
    </>
  );
}

export default Header;
