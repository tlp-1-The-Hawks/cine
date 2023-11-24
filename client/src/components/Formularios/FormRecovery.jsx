import React from 'react'
import { useState } from 'react'
import '../../assets/style/FormRecovery.css'
import { LoginSubmit } from '../Submits/LoginSubmit.jsx'
import { Link } from "react-router-dom"
import { RecoverySubmit } from '../Submits/RecoverySubmit.jsx'

export const FormRecovery = () => {



    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };


    return (
        <div className='contenedorLogin'>
            <div className='formBoxLogin'>
                <form name='formlogin'>
                    <h2> Recuperar contraseña</h2>

                    <div className='inputBoxLogin'>
                        <input type="text"
                            placeholder='Email'
                            name="email"
                            id='email'
                            value={formState.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='inputBoxLogin'>
                        <input type="password"
                            placeholder='Ultima contraseña'
                            name="password"
                            id='password'
                            value={formState.password}
                            onChange={handleChange}
                        />
                    </div>

                    <RecoverySubmit
                        formState={formState}
                    />

                    <div className='groupLogin'>
                        <Link to={'/login'}> <a href="#">¿Ya tienes una cuenta?</a> </Link>
                        <span><a href="/register">Registro</a></span>
                    </div>

                </form>
            </div>
        </div>
    )
}
