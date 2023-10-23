import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../../assets/style/FormLogin.css'
import Swal from 'sweetalert2'

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
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          Swal.fire({
            title: 'Error',
            text: data.errors[0].msg,
            icon: 'error',
            width: '50%',
            padding: '1rem',
            background: '#DBCBCB',
            grow: 'row'
          })
        } else {
          if (data.token) {
            localStorage.setItem('token', data.token);
            Swal.fire({
              title: 'Inicio sesión correctamente',
              icon: 'success',
              confirmButtonText: 'ok',
              width: '50%',
              padding: '1rem',
              background: '#DBCBCB',
              grow: 'row'
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = '/'
              }
            })
          } else {
            console.error('Error al iniciar sesión');
          }
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
    <div className='contenedorLogin'>
      <div className='formBoxLogin'>
        <form name='formlogin' onSubmit={handleSubmit}>
          <h2>Inicio de Sesión</h2>

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
