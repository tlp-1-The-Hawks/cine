import React, { useState, useContext } from 'react';
import '../../assets/style/Header.css';
import { Link } from 'react-router-dom';
import { LoginButtons } from './ButtonLoginRegister.jsx';
import { LogoutButton } from './LogoutButton.jsx';
import { AuthContext } from '../../context/AuthProvider.jsx';

export const Header = ({ setSearchBar }) => {

  const { authState } = useContext(AuthContext)
  const [shearchValue, setSearchValue] = useState('')

  const handleShear = (e) => {
    setSearchValue(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault();

    setSearchBar(shearchValue)
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div>
            <a href="/">
              <div className="contimgtitu rounded d-flex">
                <img src="/img/logo.png" alt="Logo" />
                <div className="d-flex align-items-center">
                  <p className="titulo">Cines Formosa</p>
                </div>
              </div>
            </a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='w-50 d-flex justify-content-center text-center p-2'>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link text-white" aria-current="page" href="#">Inicio</Link>
                </li>
                <li className="nav-item">
                  {authState.admin && <Link className='nav-link text-white' to={'/solicitudes'}>Solicitudes</Link>}
                </li>
                <li className="nav-item">
                  {authState.cinema && <Link className='nav-link text-white' to={'/reservaciones'}>Reservaciones</Link>}
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-white' to={'/soporte'}>Contacto</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link text-white' to={'/MiReservas'}>Mis Reservas</Link>
                </li>
              </ul>
            </div>

            <div className='d-flex justify-content-center'>
              <div>
                <form className="d-flex prueba" id='Buscador' role="search">
                  <input
                    autoComplete='off'
                    className="form-control me-2 borde-colorBusqueda color-fondo"
                    id='buscador'
                    type="search"
                    placeholder="Busca tu pelicula"
                    aria-label="Search"
                    onChange={handleShear}
                  />
                  <button
                    className="btn btn-outline-secondar borde-colorBusqueda color-fondo"
                    type="submit"
                    onClick={submitSearch}
                  >
                    <div className="mt-2"><box-icon name='search-alt' color='#ffffff' ></box-icon></div>
                  </button>
                </form>
              </div>
            </div>

          </div>
          <div className="buttons d-flex m-1">
            {authState.islogged && <LogoutButton />} {/* Muestra el botón de cierre de sesión solo si existe un token */}
            {!authState.islogged && <LoginButtons />} {/* Muestra los botones de inicio de sesión y registro si no hay un token */}
          </div>
        </div>

      </nav>

    </header>
  );
};

