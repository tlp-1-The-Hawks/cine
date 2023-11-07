import React from 'react'
const nameUser = "juan"
const time = "hace 2 minutos"

export const UserPerfil = () => {
    return (
        <header className='perfil'>
            <img className='fotoUser' alt="axel" />
            <div className='userName'></div>
            <span className='nameUser'>{nameUser}</span>
            <span className='timeUser'>{time}</span>
            <span><img className='trashImg' src="" alt="borrar" /></span>
        </header>
    );
}


