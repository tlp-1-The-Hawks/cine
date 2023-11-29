import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { CustomFetch } from "../../api/customFetch.js";

export const AddComment = ({ movie, setComments }) => {

    const [user, setUser] = useState('')
    const [nuevoComentario, setNuevoComentario] = useState('');

    useEffect(() => {
        (
            async () => {
                const user = await CustomFetch("http://localhost:4000/auth/user", 'TOKEN', localStorage.getItem('token'))
                setUser(user)
            }
        )()

    }, [])

    const handleChange = (e) => {
        const { value } = e.target

        setNuevoComentario(value)

    }

    const agregarComentario = async (e) => {
        e.preventDefault() 
        


        if (nuevoComentario.length > 0) {

            const comment = {
                description: nuevoComentario
            }

            const response = await CustomFetch(`http://localhost:4000/api/comment/${movie}/${user.id}`, 'POST', comment)

            const dataComments = await CustomFetch(`http://localhost:4000/api/comment/${movie}`, 'GET')
            setComments(dataComments)
            
            setNuevoComentario('')
        } else {
            Swal.fire({
                title: '¡Debes escribir algo!',
                icon: 'error'
            })
        }


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
                            autoComplete="off"
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
