import { Header } from '../components/Headers/Header.jsx'
import { MovieInfo } from '../components/DirectorioMain/MovieInfo.jsx'
import { Footer } from '../components/Footers/Footer.jsx'
import { useState, useEffect } from 'react'
import { CommentBox } from '../components/DirectorioMain/comment_box.jsx'
import '../assets/style/InfoMovie.css'
import { CustomFetch } from '../api/customFetch.js'
import { useLocation } from 'react-router-dom'



export const InfoMovie = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = localStorage.getItem('token')
    const [info, setInfo] = useState([])
    const [comments, setComments] = useState([]);
    const [authReserva, setAuthReserva] = useState(null);




    const movie = searchParams.get('movie');
    const cinema = searchParams.get('cinema');

    useEffect(() => {
        (
            async () => {
                const dataInfo = await CustomFetch(`http://localhost:4000/api/movies/${movie}/${cinema}`, 'GET')

                const dataComments = await CustomFetch(`http://localhost:4000/api/comment/${movie}`, 'GET')

                setInfo(dataInfo)
                setComments(dataComments)

                if (token) {
                    const user = await CustomFetch("http://localhost:4000/auth/user", 'TOKEN', token)
                    const databooking = await CustomFetch(`http://localhost:4000/api/booking/${movie}/${cinema}/${user.id}`, 'GET')

                    console.log(databooking)
                    setAuthReserva(databooking)
                }
            }
        )()
    }, [])
    return (
        <>
            <Header />
            <MovieInfo
                info={info}
                authReserva={authReserva}
                cinema={cinema}
                movie={movie}
            />
            <CommentBox
                authReserva={authReserva}
                movie={movie}
                comments={comments} />
            <Footer />
        </>
    )
}