import React, { useState } from 'react';
import '../../assets/style/Filtros.css';
import { Tarjetas } from './Tarjetas';

export const Filtros = ({ movies, cinemas }) => {
  const [selectedCinemaId, setSelectedCinemaId] = useState(null);
  const [cineName, setCineName] = useState('')

  const handleFiltro = (e) => {
    const cinemaId = e.target.id === "all" ? null : parseInt(e.target.id);
    setSelectedCinemaId(cinemaId);
    setCineName(e.target.name)
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
          <h1 className='text-center'>Cartelera: {cineName}</h1>
          <div className="row justify-content-center">
                <div className="col filtrobuttons text-center rounded">
                     <button  type="button"  className="filtro1 btn w-100 text-white" onClick={handleFiltro} id="all">
                         TODAS
                          </button>
                    </div>
                  <div className='col'>
                    <div className="filtrobuttons dropdawn text-center rounded">
                        <button className="dropdown-toggle filtro2 btn text-white w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        SELECCIONAR CINE
                      </button>
                       
                      <ul className="dropdown-menu">
                        {
                          cinemas.map((cine) => (
                            <li key={cine.id}><button name={cine.name}  id={cine.id} onClick={handleFiltro} className='btn w-100'>{cine.name}</button></li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
          </div>
        </div>
      </div>
      <Tarjetas moviesWithCinemas={filteredMovies} />
    </>
  );
}

