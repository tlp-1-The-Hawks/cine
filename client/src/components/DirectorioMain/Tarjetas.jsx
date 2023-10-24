import React, { useEffect, useState } from 'react';
import '../../assets/style/Tarjetas.css'
import { Link } from 'react-router-dom'
const token = localStorage.getItem('token');

export const Tarjetas = ({ moviesWithCinemas }) => {

  const [btnAddMovie, setBtnAddMovie] = useState("")

  useEffect(() => {
    if (token) {
      fetch('http://localhost:4000/auth/user', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'authorization': token
        }
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.cinemaId != null) {
            setBtnAddMovie(
              <Link to='/agregar-pelicula' className='m-5 btn btn-outline-light'>Agregar película</Link>
            )
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  const infoMovie = async (e) => {
    const cinemaId = e.currentTarget.getAttribute("data-cinema-id");
    const movieId = e.currentTarget.getAttribute("data-movie-id");


    window.location.href = `/informacion-pelicula?movie=${movieId}&cinema=${cinemaId}`;

  }

  return (
    <div>
      <section className='tarjetaContenedor'>
        <div className="container">
          <div className="row d-flex">
            {moviesWithCinemas.map((movie) => (
              <div key={movie.id} className="col-md-3 col-sm-12 d-flex justify-content-center">
                <div className="card">
                  <img src={`/movies_img/${movie.information[0].rutaImage}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">Género: {movie.information[0].genre.genre}</p>
                    <p className="card-text">Cines disponibles:</p>
                    {movie.cinemas.map((cine) => (
                      <Link
                        key={cine.id}
                        to="#"
                        data-cinema-id={cine.id}
                        data-movie-id={movie.id}
                        type='button'
                        className='btn btn-outline-dark tageta'
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
      <div className='d-flex justify-content-end text-end'>
        {btnAddMovie}
      </div>
    </div>
  );
}
