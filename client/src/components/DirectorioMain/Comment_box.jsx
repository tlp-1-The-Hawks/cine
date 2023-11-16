import { AddComment } from "../Submits/AddComment.jsx";
import { useEffect, useState } from "react";

export const CommentBox = ({ movie, comments, authReserva }) => {
    const [comment, setComment] = useState([]);
    const [contComment, setContComment] = useState('');


    useEffect(() => {
        if (authReserva !== null) {
            let targetDate = new Date(authReserva.date_emission.date).getTime();

            function startCountdown() {
                const interval = setInterval(function () {
                    const currentDate = new Date().getTime();
                    const difference = targetDate - currentDate;

                    if (difference <= 0) {
                        clearInterval(interval);
                        setContComment('0d 0h 0m 0s');
                    } else {
                        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                        let time = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                        setContComment(time);
                    }
                }, 1000);

                return () => clearInterval(interval);
            }

            startCountdown();

        }
    }, [authReserva]);

    return (
        <div className="Contenedor_comentario">
            {authReserva === null ? <p className="text-white">!Reseva la película y luego dinos tu opinión¡</p> :
                contComment === '0d 0h 0m 0s' ? <AddComment movie={movie} /> :
                    <p className="text-white">Activación de comentario: {contComment}</p>
            }
            <div className="container">
                <div className="row justify-content-center">
                    {comment.map((comment) => (
                        <div key={comment.id} className="col-12 col-md-5 col-sm-12 card">
                            <div className='perfil'>
                                <img className='fotoUser' src="/img/userImg.png" alt="user" />
                                <p>{comment.User.username}</p>
                                <span className='nameUser'></span>
                                <span className='timeUser'></span>
                            </div>
                            <p>{comment.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


