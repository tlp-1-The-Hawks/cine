import { useState, useEffect } from "react";
import { movieContext } from "../../context/MovieContext.jsx";
import { type_movie } from "../../types/types.movie.js";
import { useContext } from "react";
import { FindOneUser } from "../../hooks/datePreloads/FindOneUser.js";
const token = localStorage.getItem("token");

export const AddComment = ({ movie }) => {
    const { state, dispatch } = useContext(movieContext)
    const [userId, setUserId] = useState('')
    const [nuevoComentario, setNuevoComentario] = useState('');

    useEffect(() => {
        (
            async () => {
                const user = await FindOneUser(token)
                setUserId(user.id)
            }
        )()

    }, [])

    const handleChange = (e) => {
        const { value } = e.target

        setNuevoComentario(value)

    }

    const agregarComentario = (e) => {
        e.preventDefault()

        dispatch({
            type: type_movie.ADD_COMMENT_MOVIE,
            payload: {
                comment: nuevoComentario,
                userId: userId,
                movieId: movie
            }
        })

    };
    return (

        <div className='agregarComentario container mb-2'>
            <form action="" onChange={handleChange}>
                <div className="row">
                    <div className="row">
                        <h3>¿Quieres agregar un comentario?</h3>

                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <input
                            className='boton_comentario w-100 rounded p-1'
                            name='comment'
                            type="text"
                            placeholder="Añade un comentario"
                            value={nuevoComentario}
                            onChange={handleChange}
                            onKeyUpCapture={
                                (e) => {
                                    if (e.key === "Enter") {
                                        agregarComentario()
                                    }
                                }
                            }
                        />
                    </div>
                    <div className="col text-start">
                        <button className='boton_comentario rounded p-1' onClick={agregarComentario}>Agregar Comentario</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
