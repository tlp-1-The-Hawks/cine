import { Header } from '../components/Headers/Header.jsx'
import { MovieInfo } from '../components/DirectorioMain/MovieInfo.jsx'
import { Footer } from '../components/Footers/Footer.jsx'
import { useState, useEffect } from 'react'
import { CommentBox } from '../components/DirectorioMain/comment_box.jsx'
import '../assets/style/InfoMovie.css'
import { FindOneBookings } from '../hooks/datePreloads/FindBookings.js'
import { CustomFetch } from '../api/customFetch.js'

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const { movie, cinema } = params;


export const InfoMovie = ({ socket }) => {
    const token = localStorage.getItem('token')
    const [info, setInfo] = useState([])
    const [comments, setComments] = useState([]);
    const [authReserva, setAuthReserva] = useState(null);

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

    useEffect(() => {
        socket.on('connect', () => {
            console.log("El usuario se ha conectado al servidor Socket.io");
        });
    }, [socket]);

    return (
        <>
            <Header />
            <MovieInfo
                info={info}
                authReserva={authReserva}
            />
            <CommentBox
                authReserva={authReserva}
                socket={socket}
                movie={movie}
                comments={comments} />
            <Footer />
        </>
    )
}