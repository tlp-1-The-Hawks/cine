import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
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
    // Verificar si hay un token en el localStorage
    const token = localStorage.getItem('token');
    
    const tokenExpirationTime = 1 * 60 * 1000; // 1 minuto en milisegundos
    setTimeout(() => {
      localStorage.removeItem('token'); // Eliminar el token del localStorage
    }, tokenExpirationTime);

    if (token) {
      // Redirigir automáticamente a otra página (por ejemplo, '/dashboard')
      window.location.href = '/';
    }
  }, []);

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
