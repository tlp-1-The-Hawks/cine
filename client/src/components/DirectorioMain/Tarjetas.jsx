import React, { useState, useEffect } from 'react';
import '../../../public/style/Tarjetas.css'

export const Tarjetas = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch("http://localhost:4000/api/movies", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => setMovies(data))
    .catch((error) => console.error('Error:', error));
  }, []);
  
  return (
    <section>
      <div className="container">
        <div className="row d-flex">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-3 col-sm-12 d-flex justify-content-center">
              <div className="card">
                <img src="/img/image-example.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">Director: {movie.director}</p>
                  <p className="card-text">Estreno: {movie.release_year}</p>
                  <p className="card-text">Cines disponibles:</p>
                  <button type='button' className='btn btn-outline-dark'>{movie.cine[0].name}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};