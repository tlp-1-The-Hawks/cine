import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { CustomFetch } from "../../api/customFetch";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player"
export const MovieInfo = ({ info, authReserva, cinema,movie }) => {
  const navigate = useNavigate()
  const [authCine, setAuthCine] = useState(false)
  const {authState} = useContext(AuthContext)
  const trailerURL = info && info.information && info.information[0] && info.information[0].url_trailer;


  function convertirMinutosAHorasYMinutos(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    const horaFormateada = horas < 10 ? `${horas}` : `${horas}`;
    const minutosFormateados = minutosRestantes < 10 ? `0${minutosRestantes}` : `${minutosRestantes}`;
    return `${horaFormateada}:${minutosFormateados}`;
  }


  useEffect(() => {
    if(authState.islogged === true) {
        CustomFetch('http://localhost:4000/auth/user', 'TOKEN', localStorage.getItem('token')).then((data) => {
          if(data.cinemaId == cinema){
            setAuthCine(true)
          }
        })
    }
  }, [cinema])

  const deleteInfo = async (e) => {
    e.preventDefault()
    const response = await CustomFetch(`http://localhost:4000/api/information/${info.information[0].id}`, 'DELETE')
    navigate('/')
  }
  const editInfo = async (e) => {
    e.preventDefault()
    navigate(`/editar-movie?info=${info.information[0].id}&movie=${movie}`)
  }
  return (
    <div className="bgInfoMovie">
      <div className="infomovie container rounded-4">
      {authState.cinema && authCine && 
                  <div className='crud'>
                    <div className='crudBoton mt-2 me-2' data-tooltip="Editar">
                      <button onClick={editInfo} className='crudButton'><box-icon name='edit-alt' type='solid' color='#ffffff' ></box-icon></button>
                    </div>
                    <div className='crudBoton mt-2' data-tooltip="Eliminar">
                      <button onClick={deleteInfo} className='crudButton'>               <box-icon name='x-circle' color='#ffffff' ></box-icon></button>
                </div>
          </div>}
        <div className="row">
          <div className="col">
            {info &&
              info.information &&
              info.information[0] && (
                <img
                  className="imgInfoMovie"
                  src={`/movies_img/${info.information[0].rutaImage}`}
                  alt=""
                />
              )}
          </div>
          <div className="col-md-8">
            <div className="descripcion">
              <h1 className="">{info === undefined ? '' : info.title}</h1>

              {info &&
                info.information &&
                info.information[0] && (
                  <p>{info.information[0].description}</p>
                )}

              <div>
                <ul className="movie-info">
                  <li>
                    <span className="lista">Precio:</span>${info &&
                      info.information &&
                      info.information[0] && (
                        <span>{info.information[0].price}</span>
                      )}
                  </li>
                  <li>
                    <span className="lista">Cine:</span>
                    {info &&
                      info.cinemas &&
                      info.cinemas[0] && (
                        <span>{info.cinemas[0].name}</span>
                      )}
                  </li>
                  <li>
                    <span className="lista">N° Sala:</span>
                    {info &&
                      info.information &&
                      info.information[0] &&
                      info.information[0].hall && (
                        <span>
                          {info.information[0].hall.nr_hall}
                        </span>
                      )}
                  </li>
                  <li>
                    <span className="lista">Formato:</span>
                    {info &&
                      info.information &&
                      info.information[0] &&
                      info.information[0].type_emission && (
                        <span>
                          {info.information[0].type_emission.type_emission}
                        </span>
                      )}
                  </li>
                  <li>
                    <span className="lista">Duración:</span>
                    {info &&
                      info.information &&
                      info.information[0] && (
                        <span>
                          {convertirMinutosAHorasYMinutos(info.information[0].duration)} h
                        </span>
                      )}
                  </li>
                  <li>
                    <span className="lista">Director:</span>
                    {info &&
                      info.information &&
                      info.information[0] && (
                        <span>{info.information[0].director}</span>
                      )}
                  </li>
                  <li>
  {trailerURL && (
    <div style={{ width: '250px', height: '250px', position: 'relative' }}>
      <ReactPlayer
        url={trailerURL}
        controls
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: '0', left: '0' }}
      />
    </div>
  )}
</li>

                  <li>
                    <span className="lista">Fechas de emisión:</span>
                    <div className="row">
                      {info &&
                        info.information &&
                        info.information[0].date_emissions &&
                        info.information[0].date_emissions.map((date) => {
                          const formattedDate = new Date(date.date);
                          const month = formattedDate.toLocaleString('default', { month: 'short' });
                          const day = formattedDate.getDate();
                          const hour = formattedDate.getHours() + ':' + (formattedDate.getMinutes() < 10 ? '0' : '') + formattedDate.getMinutes();

                          return (
                            <div key={date.id} className="col">
                              <p className="text-center bg-dark p-1 rounded" key={date.id} id={date.id}>
                                {month} {day}, {hour}
                              </p>
                            </div>
                          );
                        })}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end">
          <p className="d-inline-flex gap-1">
            {
              authReserva !== null ?

                <button
                  className="reserva btn bg-primary"
                  role="button"
                >
                  Reservado
                </button>
                :
                authState.islogged === false ?
                <Link
                className="reserva"
                role="button"
                to={'/register'}
                >
                Registrate para reservar
              </Link>
                  :
                <Link
                  className="reserva"
                  role="button"
                  to={`/reserva?movieId=${movie}&cinemaId=${cinema}`}
               
                >
                  Reservar
                </Link>
            }

          </p>
        </div>
      </div>
    </div>
  );
};
