import { Header } from '../components/Headers/Header.jsx'
import { MovieInfo } from '../components/DirectorioMain/MovieInfo.jsx'
import { Footer } from '../components/Footers/Footer.jsx'
import { useState, useEffect } from 'react'
import { CommentBox } from '../components/DirectorioMain/comment_box.jsx'
import '../assets/style/InfoMovie.css'

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const { movie, cinema } = params;


export const InfoMovie = ({socket}) => {
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
            />
            <CommentBox socket={socket} movie={movie} />
            <Footer />
        </>
    )
}