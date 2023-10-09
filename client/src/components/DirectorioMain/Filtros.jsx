import React, { useState, useEffect } from 'react';
import '../../../public/style/Filtros.css';
import { Tarjetas } from './Tarjetas';

export const Filtros = () => {
  const [movies, setMovies] = useState([]);
  const [filtro, setFiltro] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/movies", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  const filtrar = async (e)  => {
    const { value } = e.target;

    await fetch(`http://localhost:4000/api/movies/${value}`,{
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => setFiltro(data))
    .catch((error) => console.error('Error:', error));
    
  }

  return (
    <>
      <div className="container pt-4 pb-4">
        <div className="row">
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
                    </select>
                  </div>
                  <div className='col'>
                    <label htmlFor="">Género</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={filtrar}>
                      <option value={0}>Todos</option>
                      <option value={1}>Acción</option>
                      <option value={2}>Drama</option>
                      <option value={3}>Familia</option>
                      <option value={4}>Aventura</option>
                      <option value={5}>Ciencia Ficción</option>
                      <option value={6}>Comedia</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-8 col-lg-6">
            <h1>Películas Estrenos</h1>
          </div>
        </div>
      </div>
      <Tarjetas
        moviesWithCinemas={filtro.length > 0 ? filtro : movies}
      />
    </>
  );
};
