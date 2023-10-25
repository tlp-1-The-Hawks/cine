import { Header } from '../components/Headers/Header.jsx'
import { MovieInfo } from '../components/DirectorioMain/MovieInfo.jsx'
import { Footer } from '../components/Footers/Footer.jsx'
import { useState, useEffect } from 'react'
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const { movie, cinema } = params;
import '../assets/style/InfoMovie.css'

export const InfoMovie = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/api/movies/${movie}/${cinema}`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setInfo(data)
            })
            .catch((error) => console.log(error));
    }, [])

    return (
        <>
            <Header />
            <MovieInfo
                info={info}
            />
            <Footer />
        </>
    )
}