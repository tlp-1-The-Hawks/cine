import { useState, useEffect } from "react"
import { CustomFetch } from "../../api/customFetch.js"

export const ReservationsBox = ({ movies, cinemaId }) => {
    const [titleMovie, setTitleMovi] = useState('')
    const [bookings, setBookings] = useState([])
    const [cartelera, setCartelera] = useState([])

    useEffect(() => {
        setCartelera(movies)
    }, [movies])

    const handleMovie = async (e) => {
        const data = await CustomFetch(`http://localhost:4000/api/booking/${e.target.id}/${cinemaId}`, 'GET')

        setTitleMovi(e.target.name)
        setBookings(data)
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
                                bookings.map((bookings) => (
                                    <p className="text-white">{bookings.paymentId}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}