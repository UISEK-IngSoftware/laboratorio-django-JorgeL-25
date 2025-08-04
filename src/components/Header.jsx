import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

function Header() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* Logo grande y centrado */}
      <div className="logo-container">
        <img
          src="/images/logo.png"
          alt="Pokédex Logo"
          className="main-logo"
          style={{
            width: "300px",
            height: "auto",
            margin: "20px auto",
            display: "block"
          }}
        />
      </div>

      {/* Barra de navegación */}
      <div className="navbar">
        <div className="nav-links">
          <Link to="/" className="nav-button">INICIO</Link>

          {token ? (
            <>
              <Link to="/crear" className="nav-button">AGREGAR POKEMON</Link>
              <Link
                to="/login"
                onClick={handleLogout}
                className="nav-button"
              >
                CERRAR SESIÓN
              </Link>
            </>
          ) : (
            <Link to="/login" className="nav-button">INICIAR SESIÓN</Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
