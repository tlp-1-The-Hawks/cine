import { Header } from "../components/Headers/Header.jsx"
import { Footer } from "../components/Footers/Footer.jsx"
import { ReservationsBox } from "../components/DirectorioMain/Reservations_box.jsx"
import { useEffect, useState, useContext } from "react"
import { FindOneUser } from "../hooks/datePreloads/FindOneUser.js"
import { CustomFetch } from "../api/customFetch.js"

// import { AuthContext } from "../context/AuthContext.jsx"
import { Navigate } from "react-router-dom"

import '../assets/style/Reservations.css'

export const WatchReservations = () => {
    const token = localStorage.getItem('token')



    const [movies, setMovies] = useState([])
    const [cinemaId, setCinemaId] = useState('')


    useEffect(() => {

        (
            async () => {
                const user = await CustomFetch("http://localhost:4000/auth/user", 'TOKEN', token);
                const dataMovies = await CustomFetch(`http://localhost:4000/api/movies/${user.id}`, 'GET')


                setCinemaId(user.cinemaId)
                setMovies(dataMovies)
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