import { Header } from '../components/Headers/Header.jsx'
import { MovieInfo } from '../components/DirectorioMain/MovieInfo.jsx'
import { Footer } from '../components/Footers/Footer.jsx'
import '../assets/style/InfoMovie.css'

export const InfoMovie = () => {
    return (
        <>
            <Header />
            <MovieInfo />
            <Footer />
        </>
    )
}