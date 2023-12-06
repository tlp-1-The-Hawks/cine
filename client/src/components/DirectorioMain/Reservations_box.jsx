import { useState, useEffect } from "react"
import { CustomFetch } from "../../api/customFetch.js"

export const ReservationsBox = ({ movies, cinemaId }) => {
    const [titleMovie, setTitleMovi] = useState('')
    const [bookings, setBookings] = useState([])
    const [cartelera, setCartelera] = useState([])
    const [dateEmissios, setDateEmissions] = useState([])

    useEffect(() => {
        setCartelera(movies)
    }, [movies])

    const handleMovie = async (e) => {
        const data = await CustomFetch(`http://localhost:4000/api/booking/${e.target.id}/${cinemaId}`, 'GET')
        const dates = await CustomFetch(`http://localhost:4000/api/date/${cinemaId}/${e.target.id}`, 'GET')
        setTitleMovi(e.target.name)
        setBookings(data)
        setDateEmissions(dates)
        console.log(data);
    }

    const filtro = async (e) => {
        const selectedDateId = e.target.id;
        const data = await CustomFetch(`http://localhost:4000/api/booking/${selectedDateId}`, 'GET');
        setBookings(data);
    }
    return (
        <div className="reservationsBox">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row mt-5">
                            <h2 className="text-center text-white mt-5">Mi cartelera</h2>
                            {
                                cartelera.map((movies) => (
                                    <div className="miCartelera mt-1 mb-1">
                                        <button onClick={handleMovie} key={movies.id} id={movies.id} name={movies.title} className="w-100 btn btn-danger">{movies.title}</button>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    <div className="col-8">
                        <h1 className="text-center">Reservas: {titleMovie}</h1>
                        <div className="d-flex justify-content-center">

                            {
                                bookings.map((bookings) => {
                                    const formattedDate = new Date(bookings.date_emission.date);
                                    const month = formattedDate.toLocaleString('default', { month: 'short' });
                                    const day = formattedDate.getDate();
                                    const hour = formattedDate.getHours() + ':' + (formattedDate.getMinutes() < 10 ? '0' : '') + formattedDate.getMinutes();

                                    return (
                                        <div key={bookings.id} className="border text-white border-white w-75 rounded-4 mt-3 mb-3">
                                            <div className="container text-center mt-3">
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="">Nombre del titular: {bookings.User.name} {bookings.User.last_name}</p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="">Payment: {bookings.paymentId}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <p className="">Fecha de emisión: {month} {day}, {hour}</p>
                                                    </div>
                                                    <div className="col">
                                                        <p className="">Asientos reservados: {bookings.seatings.length}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                                )
                            }
                        </div>
                    </div>
                    <div className="col mt-5">
                        {dateEmissios.length > 0 ?
                            <div className="dropdawn rounded mt-5">
                                <button className="dropdown-toggle btn text-white w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Fechas
                                </button>

                                <ul className="dropdown-menu">
                                    {
                                        dateEmissios.map((date) => {
                                            const formattedDate = new Date(date.date);
                                            const month = formattedDate.toLocaleString('default', { month: 'short' });
                                            const day = formattedDate.getDate();
                                            const hour = formattedDate.getHours() + ':' + (formattedDate.getMinutes() < 10 ? '0' : '') + formattedDate.getMinutes();
                                            return (
                                                <li key={date.id}><button id={date.id}
                                                    onClick={filtro} className='btn w-100'>{month} {day}, {hour}</button></li>
                                            )
                                        }

                                        )
                                    }
                                </ul>
                            </div>
                            : ""
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}