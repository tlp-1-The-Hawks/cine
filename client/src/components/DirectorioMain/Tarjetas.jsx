import React from 'react';
import '../../assets/style/Tarjetas.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
// import { AuthContext } from '../../context/AuthContext.jsx';

export const Tarjetas = ({ moviesWithCinemas }) => {
  const { authState } = useContext(AuthContext)
  // const { rolCinema } = useContext(AuthContext)


  const infoMovie = async (e) => {
    const cinemaId = e.currentTarget.getAttribute("data-cinema-id");
    const movieId = e.currentTarget.getAttribute("data-movie-id");
    window.location.href = `/informacion-pelicula?movie=${movieId}&cinema=${cinemaId}`;

  }
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
                  {/* <div className='crud'>
                    <div className='crudBoton' data-tooltip="editar"><button className='crudButton'>                      <box-icon name='edit-alt' type='solid' color='#ffffff' ></box-icon></button>

                    </div>
                    <div className='crudBoton' data-tooltip="eliminar"><button className='crudButton'>               <box-icon name='x-circle' color='#ffffff' ></box-icon></button>

                    </div>

                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>


      </section>
      <div className='d-flex justify-content-end text-end'>
        {authState.cinema && <Link to='/agregar-pelicula' className='m-5 btn btn-outline-light'>Agregar película</Link>}
      </div>
    </div>
  );
}
