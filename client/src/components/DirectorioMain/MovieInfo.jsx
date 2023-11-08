export const MovieInfo = ({ info }) => {
  const trailerURL = info && info.information && info.information[0] && info.information[0].url_trailer;

  return (
    <div className="bgInfoMovie">
      <div className="infomovie container rounded-4">
        <div className="row">
          <div className="col-md-4">
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
          <div className="col-md-6">
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
                    <span className="lista">Precio:</span>
                    {info &&
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
                    {
                      info &&
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
                    {
                      info &&
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
                        <span>{info.information[0].duration} Minutos</span>
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
            <a
              className="reserva"
              role="button"
              onClick={() => {
                const cinemaId = info.cinemas[0].id; // Obtén el ID del cine
                const movieId = info.id; // Obtén el ID de la película
                window.location.href = `/reserva?movieId=${movieId}&cinemaId=${cinemaId}`;
              }}
            >
              Reservar
            </a>
            {trailerURL && (
              <a
                className="trailer"
                href={trailerURL}
                role="button"
                target="_blank"
              >
                Ver Tráiler
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
