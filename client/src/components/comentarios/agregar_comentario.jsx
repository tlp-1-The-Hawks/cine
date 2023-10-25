import React, { useState } from 'react';

function AgregarComentario() {
    const [comentarios, setComentarios] = useState([]);
    const [nuevoComentario, setNuevoComentario] = useState('');

    const agregarComentario = () => {
        if (nuevoComentario.trim() !== '') {
            setComentarios([...comentarios, nuevoComentario]);
            setNuevoComentario('');
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Añade un comentario"
                    value={nuevoComentario}
                    onChange={(e) => setNuevoComentario(e.target.value)}
                />
                <button onClick={agregarComentario}>Agregar Comentario</button>
            </div>
            <div>
                <h2>Comentarios:</h2>
                <ul>
                    {comentarios.map((comentario, index) => (
                        <li key={index}>{comentario}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AgregarComentario;