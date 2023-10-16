import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../../assets/style/FormRegister.css'

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


  const handleSubmit = (e) => {
    e.preventDefault()


    fetch("http://localhost:4000/auth/register", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error en la solicitud');
        }
      })
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          window.location.href = '/';
        } else {
          console.error('Error al iniciar sesión');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (token) {
      window.location.href = '/';
    }
  }, []);

  return (
    <div className='contenedor'>
      <div className='formBox'>
        <form name='formregister' onSubmit={handleSubmit}>
          <h2>Registro</h2>

          <div className='inputBox'>
            <i className='bx bxs-user'></i>
            <input type="text"
              placeholder='Nombre'
              name="name"
              id='name'
              value={formState.name}
              onChange={handleChange}
            />
          </div>

          <div className='inputBox'>
            <i className='bx bxs-user'></i>
            <input type="text"
              placeholder='Apellido'
              name="last_name"
              id='last_name'
              value={formState.last_name}
              onChange={handleChange}
            />
          </div>

          <div className='inputBox'>
            <i className='bx bxs-user'></i>
            <input type="text"
              placeholder='Nombre de Usuario'
              name="username"
              id='username'
              value={formState.username}
              onChange={handleChange}
            />
          </div>

          <div className='inputBox'>
            <i className='bx bxs-envelope'></i>
            <input type="email"
              placeholder='Email'
              name="email"
              id='email'
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className='inputBox'>
            <i className='bx bxs-lock-alt'></i>
            <input type="password"
              placeholder='Contraseña'
              name="password"
              id='password'
              value={formState.password}
              onChange={handleChange}
            />
          </div>

          <div className='inputBox'>
            <i className='bx bxs-lock-alt'></i>
            <input
              type="password"
              placeholder="Confirmar Contraseña"
              name="confirmarpassword"
              id="confirmarpassword"
              value={formState.confirmarpassword}
              onChange={handleChange}
            />
          </div>

          <div className='botn'>
            <input type="submit" className='botn' value="Registro" />
          </div>

          <div className='group'>
            <span><a href="#">Recuperar Contraseña</a></span>
            <span><a href="/login">Inicia Sesion</a></span>
          </div>
        </form>
      </div>
    </div>
  )
}
