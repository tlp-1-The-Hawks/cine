import React from 'react'
import { useState } from 'react'
import '../../assets/style/FormRegister.css'
import { RegisterSubmit } from '../Submits/RegisterSubmit.jsx'
import { Link } from "react-router-dom"


export const FormRegister = () => {

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




  return (

    <div className='contenedorRegister'>
      <div className='formBoxRegister'>
        <form name='formregister'>
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

          <RegisterSubmit
            formState={formState}
          />

          <div className='groupRegister'>
          <Link to={'/recuperar-clave'}> <a href="#">Recuperar Contraseña</a>   </Link>
            <span><a href="/login">Inicia Sesion</a></span>
          </div>
        </form>
      </div>
    </div>
  )
}

