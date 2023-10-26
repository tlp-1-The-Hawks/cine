import React, { useState } from 'react';
import Perfil from './perfil';
import Icons from './icon';

function AgregarComentario({ addCard }) {
    const [comentarios, setComentarios] = useState([]);
    const [nuevoComentario, setNuevoComentario] = useState('');

    const agregarComentario = () => {
        if (nuevoComentario.trim() !== '') {
            setComentarios([...comentarios, nuevoComentario]);
            setNuevoComentario('');
            addCard(nuevoComentario);
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
                {/* <ul>
                    {nuevoComentario.map((comentario) => (
                        <p key={1}>{comentario}</p>
                        
                    ))}
                </ul> */}
            </div>
        </div>
    );
}

function Card() {
    const [cards, setCards] = useState([]);

    const addCard = (comment) => {
        const newCard = (
            <div key={cards.length} className="card">
                <Perfil user="axel" timeUser="hace 2 minutos" img="persona.jpg" />
                <Icons />
                <p>{comment}</p>
            </div>
        );
        setCards([...cards, newCard]);
    };

    return (
        <div className="MainCard">
            {cards}
            <AgregarComentario addCard={addCard} />
        </div>
    );
}

export default Card;


