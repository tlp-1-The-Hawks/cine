import React, { useState } from 'react';
import './card';

export default function AgregarComentario({ addCard, movieId, userId }) {
    const [nuevoComentario, setNuevoComentario] = useState('');

    const agregarComentario = () => {
        const comentario = nuevoComentario.trim();
        if (comentario !== '') {
            // Enviar el comentario al backend
            fetch(`/comment/${movieId}/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment: comentario }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // Manejar la respuesta del servidor, por ejemplo, mostrar un mensaje de éxito
                    console.log('Comentario guardado:', data);
                    addCard(comentario);
                    setNuevoComentario('');
                })
                .catch((error) => {
                    console.error('Error al guardar el comentario:', error);
                });
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


// import React, { useState } from 'react';
// import './card';

// export default function AgregarComentario({ addCard }) {
//     const [nuevoComentario, setNuevoComentario] = useState('');

//     const agregarComentario = () => {
//         const comentario = nuevoComentario.trim();
//         if (comentario !== '') {
//             addCard(comentario);
//             setNuevoComentario('');
//         }
//     };

//     return (

//         <div className='agregarComentario'>
//             <h3>¿Quieres agregar un comentario?</h3>
//             <input
//                 className='boton_comentario'
//                 type="text"
//                 placeholder="Añade un comentario"
//                 value={nuevoComentario}
//                 onChange={(e) => setNuevoComentario(e.target.value)}
//             />
//             <button className='boton_comentario' onClick={agregarComentario}>Agregar Comentario</button>
//         </div>
//     );
// }
