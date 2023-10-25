import React from 'react';
import Perfil from './perfil';
import Texto from './comentario';
import Icons from './icon';
import img from "../../../img/persona.jpg";
const user = "axel";
const timeUser = "hace 2 minutos";


function Card() {
    return (
        <div className="MainCard">
            <div className="card">
                <Perfil user={user} timeUser={timeUser} img={img} />
                <Texto />
                <Icons />
            </div>
        </div>
    );
}

export default Card;