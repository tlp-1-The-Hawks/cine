import React from 'react'
const nameUser = "juan"
const time = "hace 2 minutos"
import img from "./persona.jpg"

function Perfil() {
    return (
        <header className='perfil'>
            <img className='fotoUser' src={img} alt="axel" />
            <div className='userName'></div>
            <span className='nameUser'>{nameUser}</span>
            <span className='timeUser'>{time}</span>
            <span><img className='trashImg' src="" alt="borrar" /></span>
        </header>
    );
}


export default Perfil