import { AddComment } from "./AddComment.jsx";
import { useState } from "react";
import { LikeAndDisLike } from "./LikeAndDisLike.jsx";
import { UserPerfil } from "./UserPerfil.jsx";
export const CommentBox = () => {
    const [cards, setCards] = useState([]);

    const addCard = (comment) => {
        const newCard = (
            <div key={cards.length} className="card">
                <UserPerfil />
                <p>{comment}</p>
                <LikeAndDisLike />
            </div>
        );


        setCards([...cards, newCard]);
    };

    return (
        <div className="Contenedor_comentario">
            <AddComment addCard={addCard} />
            {cards}
        </div>
    );
}
