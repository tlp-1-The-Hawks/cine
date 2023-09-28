import React from 'react';

export const Header = () => {
  return (
    <header>
      <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0r d-flex">
          <div className="contimgtitu rounded d-flex">
            <img src="/img/logo.png" alt="Logo" />
            <div className="d-flex align-items-center">
              <p className="titulo">Cines Formosa</p>
            </div>
          </div>
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

        <div className="col-md-3 text-end">
          <button type="button" className="btn bg-dark text-white me-2">
            Registrarse
          </button>
          <button type="button" className="btn bg-dark text-white">
            Iniciar sesión
          </button>
        </div>
      </nav>
    </header>
  );
};
