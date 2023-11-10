import { Header } from '../components/Headers/Header.jsx'
import { MovieInfo } from '../components/DirectorioMain/MovieInfo.jsx'
import { Footer } from '../components/Footers/Footer.jsx'
import { useState, useEffect } from 'react'
import { CommentBox } from '../components/DirectorioMain/comment_box.jsx'
import '../assets/style/InfoMovie.css'
import { FindComments } from '../hooks/datePreloads/FindComments.js'
import { FindInformation } from '../hooks/datePreloads/FindInformation.js'
import { FindOneUser } from '../hooks/datePreloads/FindOneUser.js'
import { FindOneBookings } from '../hooks/datePreloads/FindBookings.js'

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
                const dataInfo = await FindInformation(movie, cinema)
                const dataComments = await FindComments(movie)

                setInfo(dataInfo)
                setComments(dataComments)

                if(token) {
                    const user = await FindOneUser(token)    
                    const databooking = await FindOneBookings(user.id, movie, cinema)
                    
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