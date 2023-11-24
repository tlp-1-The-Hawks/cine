import React from 'react';
import '../../assets/style/Tarjetas.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { CustomFetch } from '../../api/customFetch';


export const Tarjetas = ({ moviesWithCinemas }) => {
  const navigate = useNavigate()
  const { authState } = useContext(AuthContext)



  return (
    <div className='mb-5'>
      <section className='tarjetaContenedor container'>
        <div className="row">

          {moviesWithCinemas.map((movie) => (
            <div key={movie.id} className="col d-flex justify-content-center mt-2 mb-2">
              <div className="cards text-center">
                <img src={`/movies_img/${movie.information[0].rutaImage}`} className="card-img" alt="" />
                <div>
                  <h5 className='textoCard' >{movie.title}</h5>
                  <p className='textoCard'>Género: {movie.information[0].genre.genre}</p>
                  <p className='textoCard'>Cines disponibles:</p>
                  {movie.cinemas.map((cine) => (
                    <Link
                      id='cineName'
                      key={cine.id}
                      to={`/informacion-pelicula?movie=${movie.id}&cinema=${cine.id}`}
                      data-cinema-id={cine.id}
                      data-movie-id={movie.id}
                      type='button'
                      className='btn btn-outline-dark tageta'

                    >
                      {cine.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </section>
      <div className='d-flex justify-content-end text-end'>
        {authState.cinema && <Link to='/salas' className='mt-5 me-4 btn btn-outline-light'>Salas</Link>}
        {authState.cinema && <Link to='/agregar-pelicula' className='mt-5 me-5 btn btn-outline-light'>Agregar película</Link>}
      </div>
    </div>
  );
}
