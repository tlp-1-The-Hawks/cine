import { AddComment } from "./AddComment.jsx";
import { useEffect, useState } from "react";
import { LikeAndDisLike } from "./LikeAndDisLike.jsx";
import { FindComments } from "../../hooks/datePreloads/FindComments.js";

export const CommentBox = ({ movie, socket }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
                (
                async () => {
                    const data = await FindComments()
    
                    setComments(data)
                }
            )()
           
    }, [])

    useEffect(() => {
        socket.on('comment', (comment) => {
            setComments((comments) => [...comments, comment])
        })
    }, [socket])

    return (
        <div className="Contenedor_comentario">
            <AddComment socket={socket} movie={movie} comments={comments} />
            <div className="container">
                <div className="row justify-content-center">

                    {
                        comments.map((comment) => (
                            < div key={comment.id} className="col-12 col-md-5 col-sm-12 card">
                                <div className='perfil'>
                                    <img className='fotoUser' src="/img/userImg.png" />
                                    <div className='userName'>{comment.User.username}</div>
                                    <span className='nameUser'></span>
                                    <span className='timeUser'></span>
                                </div>
                                <p>{comment.description}</p>
                                <LikeAndDisLike />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
}
