import { AddComment } from "../Submits/AddComment.jsx";
import { useEffect, useState } from "react";

export const CommentBox = ({ movie, socket, comments }) => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        setComment(comments)
    }, [comments])

    useEffect(() => {
        socket.on('comment', (comment) => {
            setComment((comments) => [...comments, comment])
        })
    }, [socket])

    return (
        <div className="Contenedor_comentario">
            <AddComment socket={socket} movie={movie} />
            <div className="container">
                <div className="row justify-content-center">

                    {
                        comment.map((comment) => (
                            < div key={comment.id} className="col-12 col-md-5 col-sm-12 card">
                                <div className='perfil'>
                                    <img className='fotoUser' src="/img/userImg.png" />
                                    <p>{comment.User.username}</p>
                                    <span className='nameUser'></span>
                                    <span className='timeUser'></span>
                                </div>
                                <p>{comment.description}</p>
                            </div>
                        ))


                    }
                </div>
            </div>
        </div >
    );
}
