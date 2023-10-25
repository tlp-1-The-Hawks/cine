import React from 'react'
const user = "juan"
const timeUser = "hace 2 minutos"
import img from "../../../img/persona.jpg"

function Perfil() {
    return (

        <header className='header'>
            <img className='fotoUser' src={img} alt={user} />
            <div className='userName'></div>
            <span className='nameUser'>{user}</span>
            <span className='timeUser'>{timeUser}</span>
            <span><img className='trashImg' src="" alt="borrar" /></span>
        </header >

    )
}

export default Perfil