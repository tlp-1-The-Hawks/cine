import React from 'react'
import { types_user } from '../../types/types.user.js'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext.jsx'
import '../../assets/style/FormLogin.css'

export const FormLogin = () => {

  const { state, dispatch } = useContext(UserContext)

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


  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: types_user.USER_FIND_ONE,
      payload: formState
    })

  }

  return (
    <div className='contenedorLogin'>
      <div className='formBoxLogin'>
        <form name='formlogin' onSubmit={handleSubmit}>
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

          <div className='botonLogin'>
            <input type="submit" className='botonLogin' value="Registro" />
          </div>

          <div className='groupLogin'>
            <span><a href="#">Recuperar Contraseña</a></span>
            <span><a href="/register">Registro</a></span>
          </div>

        </form>
      </div>
    </div>
  )
}
