import React from 'react'
import { useState } from 'react'
import '../../assets/style/FormLogin.css'

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
  

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => console.log(res))
  }

  return (
        <div className='contenedor'>
      <div className='formBoxe'>
        <form name='formlogin' onChange={handleChange} onSubmit={handleSubmit}>
          <h2>Inicio de Sesión</h2>

          <div className='inputBox'>
            <i className='bx bxs-user'></i>
            <input type="text"
              placeholder='Email'
              name="email"
              id='email'
              value={formState.email}
            />
          </div>

          <div className='inputBox'>
            <i className='bx bxs-user'></i>
            <input type="password"
              placeholder='Contraseña'
              name="password"
              id='password'
              value={formState.password}
            />
          </div>

          <div className='botn'>
            <input type="submit" className='botn' value="Registro" />
          </div>

          <div className='group'>
            <span><a href="#">Recuperar Contraseña</a></span>
            <span><a href="/register">Registro</a></span>
          </div>

        </form>
      </div>
    </div>
  )
}
