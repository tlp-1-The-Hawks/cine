import React from 'react'
import { useState } from 'react'
import '../../assets/style/FormLogin.css'
import { LoginSubmit } from '../Submits/LoginSubmit.jsx'

export const FormLogin = () => {



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
          <h2> Inicio de Sesión</h2>

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
              placeholder='Contraseña'
              name="password"
              id='password'
              value={formState.password}
              onChange={handleChange}
            />
          </div>

         <LoginSubmit
         formState={formState}
         />

          <div className='groupLogin'>
            <span><a href="#">Recuperar Contraseña</a></span>
            <span><a href="/register">Registro</a></span>
          </div>

        </form>
      </div>
    </div>
  )
}
