import React from 'react';
import '../../assets/style/Header.css';
import { LoginButtons } from './ButtonLoginRegister.jsx';
import { LogoutButton } from './LogoutButton.jsx';

export const Header = () => {
  const token = localStorage.getItem('token');

  return (
    <header>
      <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0r d-flex">
          <a href="/">
            <div className="contimgtitu rounded d-flex">
              <img src="/img/logo.png" alt="Logo" />
              <div className="d-flex align-items-center">
                <p className="titulo">Cines Formosa</p>
              </div>
            </div>
          </a>
        </div>

        <form className="d-flex prueba" role="search">
          <input
            className="form-control me-2 borde-naranja color-fondo"
            type="search"
            placeholder="Busca tu pelicula"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-secondar borde-naranja color-fondo"
            type="submit"
          >
            Buscar
          </button>
        </form>

        <div className="buttons">
        {token && <LogoutButton />} {/* Muestra el botón de cierre de sesión solo si existe un token */}
        {!token && <LoginButtons />} {/* Muestra los botones de inicio de sesión y registro si no hay un token */}
        </div>
      </nav>
    </header>
  );
};
