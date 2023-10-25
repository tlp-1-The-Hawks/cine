export const MovieInfo = ({ info }) => {
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
                    <span className="lista">Lugar:</span>
                    Sala 3
                  </li>
                  <li>
                    <span className="lista">Formato:</span>
                    {
                      info &&
                      info.information &&
                      info.information[0] && (
                        <span>
                          {info.information[0].type_emissionId}
                        </span>
                      )}
                  </li>
                  <li>
                    <span className="lista">Duración:</span>
                    {info &&
                      info.information &&
                      info.information[0] && (
                        <span>{info.information[0].duration}</span>
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
            <a
              className="trailer"
              href="https://www.youtube.com/watch?v=YrbdN5zaouU"
              role="button"
              target="_blank"
            >
              Ver Tráiler
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
