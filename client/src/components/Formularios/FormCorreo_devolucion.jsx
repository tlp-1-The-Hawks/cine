import React from 'react'
import { useState } from 'react'
import '../../assets/style/FormRecovery.css'
import { LoginSubmit } from '../Submits/LoginSubmit.jsx'
import { Link } from "react-router-dom"
import { CorreoSubmit } from '../Submits/CorreoSubmit.jsx'

export const FormCorreo_devolucion = () => {
    const [formState, setFormState] = useState({
      email: '',
    });
  
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
              <input
                type='text'
                placeholder='Email'
                name='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            {/* Aquí se integra el componente RecoverySubmit */}
            <CorreoSubmit formState={formState} />
            <div className='groupLogin'>
              <Link to={'/login'}>
                {' '}
                <a href='#'>¿Ya tienes una cuenta?</a>{' '}
              </Link>
              <span>
                <a href='/register'>Registro</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  };