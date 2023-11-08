import React, { useState } from 'react';
import '../../assets/style/Filtros.css';
import { Tarjetas } from './Tarjetas';

export const Filtros = ({ movies, cinemas }) => {
  const [selectedCinemaId, setSelectedCinemaId] = useState(null);

  const handleFiltro = (e) => {
    const cinemaId = e.target.id === "all" ? null : parseInt(e.target.id);
    setSelectedCinemaId(cinemaId);
  }

 
  const filteredMovies = selectedCinemaId
    ? movies.filter((movie) => {
        return movie.cinemas.some((cinema) => cinema.id === selectedCinemaId);
      })
    : movies;

  return (
    <>
      <div className="filtro bg-filtro-container container mb-5">
        <div className="row">
          <h1 className='text-center'>Cartelera:</h1>

          <div className="row justify-content-center">
            <div className="col-sm-4 col-lg-6">
              <div className="form-group">
                <div className="row">
                  <div className='col'>
                    <div className="filtrobuttons dropdawn text-center rounded">
                      <button  type="button" className="filtro1 w-50 btn text-white" onClick={handleFiltro} id="all">
                        Todos
                      </button>

                      <button className="dropdown-toggle filtro2 w-50 btn text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        SELECCIONAR CINE
                      </button>
                      <ul className="dropdown-menu">
                        {
                          cinemas.map((cine) => (
                            <li key={cine.id}><button id={cine.id} onClick={handleFiltro} className='btn w-100'>{cine.name}</button></li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tarjetas moviesWithCinemas={filteredMovies} />
    </>
  );
}

