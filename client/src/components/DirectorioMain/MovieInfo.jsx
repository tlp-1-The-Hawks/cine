import { useEffect, useState } from "react";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const { movie, cinema } = params;


export const MovieInfo = () => {
    const [info, setInfo] = useState({})

    useEffect(() => {
        fetch(`http://localhost:4000/api/movies/${movie}/${cinema}`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setInfo({ data })
            })
            .catch((error) => console.log(error));
    }, [])

    return (
        <div className="bgInfoMovie">
            <div className="infomovie container rounded-4">
                <div className="row">
                    <div className="col-md-4">
                        <img className="imgInfoMovie" src={`/movies_img/${info.cinemas[0].information[0].rutaImage}`} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="descripcion">
                            <h1 className="">Título de la Película</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                                officia voluptates odit et odio quasi veritatis, facere quis nihil
                                consequatur vitae ipsa impedit beatae? Quaerat saepe quasi neque
                                repellendus debitis? Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Voluptatum error dolorum totam autem illo
                                exercitationem soluta tempore, ad similique voluptatibus dicta,
                                ducimus iste reprehenderit aliquid, at perferendis atque commodi!
                                Tempora!
                            </p>
                            <div>
                                <ul className="movie-info">
                                    <li>
                                        <span className="lista">Precio:</span>
                                        $10.00
                                    </li>
                                    <li>
                                        <span className="lista">Cine:</span>
                                        Cineplex
                                    </li>
                                    <li>
                                        <span className="lista">Lugar:</span>
                                        Sala 3
                                    </li>
                                    <li>
                                        <span className="lista">Formato:</span>
                                        2D
                                    </li>
                                    <li>
                                        <span className="lista">Duración:</span>
                                        2 horas
                                    </li>
                                    <li>
                                        <span className="lista">Director:</span>
                                        Nolan
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Enlace para mostrar el formulario de reserva con Bootstrap Collapse --> */}
                            <p className="d-inline-flex gap-1">
                                <a className="reserva" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
                                    aria-controls="collapseExample">
                                    Reserva
                                </a>
                                <a className="trailer" href="https://www.youtube.com/watch?v=YrbdN5zaouU" role="button" target="_blank">
                                    Ver Tráiler
                                </a>
                            </p>
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
            </div>
        </div>
    )
}