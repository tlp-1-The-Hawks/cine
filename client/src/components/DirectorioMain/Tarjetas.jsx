import React from 'react';
import '../../assets/style/Tarjetas.css'
import { Link } from 'react-router-dom'

export const Tarjetas = ({ moviesWithCinemas }) => {

  const infoMovie = async (e) => {
    const cinemaId = e.currentTarget.getAttribute("data-cinema-id");
    const movieId = e.currentTarget.getAttribute("data-movie-id");

    window.location.href = `/reserva?movie=${movieId}&cinema=${cinemaId}`;
    console.log(cinemaId, movieId);

  }

  return (
    <section className='tarjetaaa'>
      <div className="container">
        <div className="row d-flex">
          {moviesWithCinemas.map((movie) => (
            <div key={movie.id} className="col-md-3 col-sm-12 d-flex justify-content-center">
              <div className="card">
              {movie.information.map((info) => (
                    <img src={`/movies_img/${info.rutaImage}`} className="card-img-top" alt="..." />
                  ))}
                
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  {movie.information.map((info) => (
                    <p className="card-text">Género: {info.genre.genre}</p>
                  ))}
                  <p className="card-text">Cines disponibles:</p>
                  {movie.cinemas.map((cine) => (
                    <Link
                      key={cine.id}
                      to="#"
                      data-cinema-id={cine.id}
                      data-movie-id={movie.id}
                      type='button'
                      className='btn btn-outline-dark'
                      onClick={infoMovie}
                    >
                      {cine.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
