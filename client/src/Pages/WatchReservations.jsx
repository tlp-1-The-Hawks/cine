import { Header } from "../components/Headers/Header.jsx"
import { Footer } from "../components/Footers/Footer.jsx"
import { ReservationsBox } from "../components/DirectorioMain/Reservations_box.jsx"
import { useEffect, useState, useContext } from "react"
import { FindMovieByCinema } from "../hooks/datePreloads/FindMovies.js"
import { FindOneUser } from "../hooks/datePreloads/FindOneUser.js"
import { AuthContext } from "../context/AuthContext.jsx"
import { Navigate } from "react-router-dom"
import '../assets/style/Reservations.css'

export const WatchReservations = () => {
    const token = localStorage.getItem('token')
    const { rolCinema } = useContext(AuthContext)


    const [movies, setMovies] = useState([])
    const [cinemaId, setCinemaId] = useState('')


    useEffect(() => {

        (
            async () => {
                const user = await FindOneUser(token)
                const dataMovies = await FindMovieByCinema(user.id)

                setCinemaId(user.cinemaId)
                setMovies(dataMovies)
                if (!rolCinema) return (<Navigate to={"/"} />)
            }

        )()
    }, [])

    return (
        <>
            <Header />
            <ReservationsBox
                movies={movies}
                cinemaId={cinemaId}
            />
            <Footer />
        </>
    )
}