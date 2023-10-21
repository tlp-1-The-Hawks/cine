export const MovieInfo = ({info}) => {
    
    return (
        <div className="bgInfoMovie">
            <div className="infomovie container rounded-4">
                <div className="row">
                <div className="col-md-4">
                 {info && info.cinemas && info.cinemas[0] && info.cinemas[0].information && info.cinemas[0].information[0] && (
                     <img className="imgInfoMovie" src={`/movies_img/${info.cinemas[0].information[0].rutaImage}`} alt="" />
                    )}
                    
                </div>
                    <div className="col-md-6">
                        <div className="descripcion">
                            <h1 className="">{info===undefined ? "":info.title}</h1>
                           
                            {info && info.cinemas && info.cinemas[0] && info.cinemas[0].information && info.cinemas[0].information[0] && (
                                <p>{info.cinemas[0].information[0].description}</p>
                            )}
                            
                            <div>
                                <ul className="movie-info">
                                    <li>
                                        <span className="lista">Precio:</span>
                                        {info && info.cinemas && info.cinemas[0] && info.cinemas[0].information && info.cinemas[0].information[0] && (
                                          <span>{info.cinemas[0].information[0].price}</span>
                                      )}
                                    </li>
                                    <li>
                                        <span className="lista">Cine:</span>
                                        {info && info.cinemas && info.cinemas[0] && info.cinemas[0].information && info.cinemas[0].information[0] && (
                                          <span>{info.cinemas[0].name}</span>
                                      )}
                                    </li>
                                    <li>
                                        <span className="lista">Lugar:</span>
                                        Sala 3
                                    </li>
                                    <li>
                                        <span className="lista">Formato:</span>
                                        {info && info.cinemas && info.cinemas[0] && info.cinemas[0].information && info.cinemas[0].information[0] && (
                                          <span>{info.cinemas[0].information[0].type_emissionId}</span>
                                          )}
                                    </li>
                                    <li>
                                        <span className="lista">Duración:</span>
                                        {info && info.cinemas && info.cinemas[0] && info.cinemas[0].information && info.cinemas[0].information[0] && (
                                          <span>{info.cinemas[0].information[0].duration}</span>
                                          )}
                                    </li>
                                    <li>
                                        <span className="lista">Director:</span>
                                        {info && info.cinemas && info.cinemas[0] && info.cinemas[0].information && info.cinemas[0].information[0] && (
                                          <span>{info.cinemas[0].information[0].director}</span>
                                          )}
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Enlace para mostrar el formulario de reserva con Bootstrap Collapse --> */}
                           
                            {/* <!-- <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                <h2>Reserva de Tickets</h2>
                                <form id="reserva-form">
                                    <div className="mb-3">
                                        <label for="cantidad" className="form-label">Cantidad de Personas:</label>
                                        <input type="number" id="cantidad" name="cantidad" min="1" className="form-control" required
                                            placeholder="Ej: 1, 2, 3, ..." oninput="calcularCosto();" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="costo" className="form-label">Costo Total:</label>
                                        <input type="text" id="costo" name="costo" className="form-control" readonly />
                                    </div>
                                    <button type="submit" className="reserva" id="boton-reserva" onclick="ocultarBoton();">
                                        Reservar
                                    </button>
                                </form>
                            </div>
                        </div> --> */}
                        </div>
                    </div>
                </div>
                <div className="text-end">
                     <p className="d-inline-flex gap-1">
                        <a className="reserva" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                            aria-controls="collapseExample">
                                Reservar
                        </a>
                        <a className="trailer" href="https://www.youtube.com/watch?v=YrbdN5zaouU" role="button" target="_blank">
                                Ver Tráiler
                        </a>
                      </p>
                </div>
            </div>
        </div>
    )
}