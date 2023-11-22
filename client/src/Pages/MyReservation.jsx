import { Header } from "../components/Headers/Header.jsx"
import { Footer } from "../components/Footers/Footer.jsx"
import { MyReservations } from "../components/DirectorioMain/MyReservations.jsx"
import { useEffect, useState } from "react"
import { CustomFetch } from "../api/customFetch.js"
import '../assets/style/Reservations.css'

export const MyReservation = () => {
    const token = localStorage.getItem('token')



    const [movies, setMovies] = useState([])
    const [cinemaId, setCinemaId] = useState('')


    useEffect(() => {

        (
            async () => {
                const user = await CustomFetch("http://localhost:4000/auth/user", 'TOKEN', token);
                const dataMovies = await CustomFetch(`http://localhost:4000/api/movies/${user.cinemaId}`, 'GET')


                setCinemaId(user.cinemaId)
                setMovies(dataMovies)
            }

        )()
    }, [])

    return (
        <>
            <Header />
            <MyReservations 
                movies={movies}
                cinemaId={cinemaId}
            />
            <Footer />
        </>
    )
}