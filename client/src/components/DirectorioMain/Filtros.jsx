import React, { useState } from 'react';
import '../../assets/style/Filtros.css';
import { Tarjetas } from './Tarjetas';
import { FindGenre } from '../../hooks/useEffects/FindGenres.js';
import { FindMovies } from '../../hooks/useEffects/FindMovies.js';


export const Filtros = () => {
  const [filtro, setFiltro] = useState([]);
  const genreState = FindGenre()
  const movies = FindMovies()



  const filtrar = async (e) => {
    const { value } = e.target;

    await fetch(`http://localhost:4000/api/movies/${value}`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => setFiltro(data))
      .catch((error) => console.error('Error:', error));

  }

  return (
    <>
      <div className="filtro bg-filtro-container container">
        <div className="row">
          <div className="col-sm-8 col-lg-6">
            <h1>Películas Estrenos:</h1>
            <br />
          </div>
          <div className="col-sm-4 col-lg-6">
            <form>
              <div className="form-group">
                <div className="row">
                  <label htmlFor="exampleFormControlSelect1">Filtrar por</label>
                  <div className='col'>
                    <label htmlFor="">Calificación</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                      <option>Todos</option>
                      <option>Mejores calificados</option>
                      <option>Orden Alfabetico</option>
                    </select>
                  </div>
                  <div className='col'>
                    <label htmlFor="">Género</label>
                    <select
                      name="genreId"
                      id="exampleFormControlSelect1"
                      className="form-control">
                      {genreState.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                          {genre.genre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Tarjetas
        moviesWithCinemas={filtro.length > 0 ? filtro : movies}
      />
    </>
  );
}
