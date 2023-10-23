import React from 'react';
import '../../assets/style/Header.css';
import { LoginButtons } from './ButtonLoginRegister.jsx';

export const Header = () => {
  const token = localStorage.getItem('token');

  // Agregar o quitar la clase "visible" según la presencia del token
  const loginButtonsClass = token ? 'login-buttons' : 'login-buttons visible';

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
            className="form-control me-2 borde-colorBusqueda color-fondo"
            id='buscador'
            type="search"
            placeholder="Busca tu pelicula"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-secondar borde-colorBusqueda color-fondo"
            type="submit"
          >
            Buscar
          </button>
        </form>

        {/* Aplicar la clase loginButtonsClass al componente LoginButtons */}
        <div className={loginButtonsClass}>
          <LoginButtons />
        </div>
      </nav>
    </header>
  );
};
