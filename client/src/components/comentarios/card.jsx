import React, { useState } from 'react';
import Perfil from './perfil';
import Icons from './icon';
import AgregarComentario from './agregar_comentario';
import "../../assets/style/comentario.css";


function Card() {
    const [cards, setCards] = useState([]);

    const addCard = (comment) => {
        const newCard = (
            <div key={cards.length} className="card">
                <Perfil />
                <p>{comment}</p>
                <Icons />

            </div>
        );
        setCards([...cards, newCard]);
    };

    return (
        <div className="Contenedor_comentario">
            <h3>¿Quieres agregar un comentario?</h3>
            <AgregarComentario addCard={addCard} />
            {cards}
        </div>
    );
}

export default Card;
