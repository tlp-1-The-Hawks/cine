import { Header } from "../components/Headers/Header.jsx"
import { Footer } from "../components/Footers/Footer.jsx"
import { ReservationsBox } from "../components/DirectorioMain/Reservations_box.jsx"
import { useEffect, useState, useContext } from "react"
import { FindMovieByCinema } from "../hooks/datePreloads/FindMovieByCinema.js"
import { FindOneUser } from "../hooks/datePreloads/FindOneUser.js"
const token = localStorage.getItem('token')
import { AuthContext } from "../context/AuthContext.jsx"
import { Navigate } from "react-router-dom"
import '../assets/style/Reservations.css'

export const WatchReservations = () => {
    const { rolCinema } = useContext(AuthContext)
    if (!rolCinema) return (<Navigate to={"/"} />)

    const [movies, setMovies] = useState([])


    useEffect(() => {

        (
            async () => {
                const user = await FindOneUser(token)
                const dataMovies = await FindMovieByCinema(user.id)

                setMovies(dataMovies)
            }

        )()
    }, [])

    return (
        <>
            <Header />
            <ReservationsBox
                movies={movies}
            />
            <Footer />
        </>
    )
}