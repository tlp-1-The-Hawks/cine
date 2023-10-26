import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { types_user } from '../../types/types.user.js'
import { UserContext } from '../../context/UserContext.jsx'
import '../../assets/style/FormRegister.css'


export const FormRegister = () => {

  const { state, dispatch } = useContext(UserContext)

  const [formState, setFormState] = useState({
    name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirmarpassword: ""
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
      type: types_user.USER_ADD,
      payload: formState
    })
  }

  return (

    <div className='contenedorRegister'>
      <div className='formBoxRegister'>
        <form name='formregister' onSubmit={handleSubmit}>
          <h2 className='mt-2'>Registro</h2>

          <div className='inputBoxRegister'>
            <input type="text"
              placeholder='Nombre'
              name="name"
              id='name'
              value={formState.name}
              onChange={handleChange}
            />
          </div>

          <div className='inputBoxRegister'>
            <input type="text"
              placeholder='Apellido'
              name="last_name"
              id='last_name'
              value={formState.last_name}
              onChange={handleChange}
            />
          </div>

          <div className='inputBoxRegister'>
            <input type="text"
              placeholder='Nombre de Usuario'
              name="username"
              id='username'
              value={formState.username}
              onChange={handleChange}
            />
          </div>

          <div className='inputBoxRegister'>
            <input type="email"
              placeholder='Email'
              name="email"
              id='email'
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className='inputBoxRegister'>
            <input type="password"
              placeholder='Contraseña'
              name="password"
              id='password'
              value={formState.password}
              onChange={handleChange}
            />
          </div>

          <div className='inputBoxRegister'>
            <input
              type="password"
              placeholder="Confirmar Contraseña"
              name="confirmarpassword"
              id="confirmarpassword"
              value={formState.confirmarpassword}
              onChange={handleChange}
            />
          </div>

          <div className='botonRegister'>
            <input type="submit" className='botonRegister' value="Registro" />
          </div>

          <div className='groupRegister'>
            <span><a href="#">Recuperar Contraseña</a></span>
            <span><a href="/login">Inicia Sesion</a></span>
          </div>
        </form>
      </div>
    </div>
  )
}

