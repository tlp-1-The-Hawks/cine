import { useState, useEffect } from "react"

export const ReservationsBox = ({ movies }) => {
    const [titleMovie, setTitleMovi] = useState('')

    const [cartelera, setCartelera] = useState([])
    useEffect(() => {
        console.log(movies)
        setCartelera(movies)
    }, [movies])

    const handleMovie = (e) => {
        setTitleMovi(e.target.name)
    }
    return (
        <div className="reservationsBox container mt-3">
            <div className="row">
                <div className="col">
                    <div className="row mt-4">
                        <h2 className="text-center">Mi cartelera</h2>
                        {
                            cartelera.map((movies) => (
                                <div className="miCartelera mt-1 mb-1">
                                    <button onClick={handleMovie} key={cartelera.id} name={movies.title} className="w-100 btn btn-danger">{movies.title}</button>
                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className="col-8">
                    <h1 className="text-center">Reservas: {titleMovie}</h1>
                </div>
            </div>
        </div>
    )
}