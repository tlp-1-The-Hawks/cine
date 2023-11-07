import { useState } from "react";
export const AddComment = ({ addCard }) => {
    const [nuevoComentario, setNuevoComentario] = useState('');

    const agregarComentario = () => {
        const comentario = nuevoComentario.trim();
        if (comentario !== '') {
            addCard(comentario);
            setNuevoComentario('');
        }
    };
    return (

        <div className='agregarComentario'>
            <h3>¿Quieres agregar un comentario?</h3>
            <input
                className='boton_comentario'
                type="text"
                placeholder="Añade un comentario"
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
            />
            <button className='boton_comentario' onClick={agregarComentario}>Agregar Comentario</button>
        </div>
    );
}
