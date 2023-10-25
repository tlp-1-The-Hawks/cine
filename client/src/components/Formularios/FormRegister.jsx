import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { type } from '../../types/types.js'
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
      type: type.USER_ADD,
      payload: formState
    })
  }

  // fetch("http://localhost:4000/auth/register", {
  //   method: "POST",
  //   body: JSON.stringify(formState),
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     if (data.errors) {
  //       Swal.fire({
  //         title: 'Error',
  //         text: data.errors[0].msg,
  //         icon: 'error',
  //         width: '50%',
  //         padding: '1rem',
  //         background: '#DBCBCB',
  //         grow: 'row'
  //       })
  //     } else {
  //       if (data.token) {
  //         localStorage.setItem('token', data.token);
  //         Swal.fire({
  //           title: 'Se registro correctamente',
  //           icon: 'success',
  //           confirmButtonText: 'ok',
  //           width: '50%',
  //           padding: '1rem',
  //           background: '#DBCBCB',
  //           grow: 'row'
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //             window.location.href = '/'
  //           }
  //         })
  //       } else {
  //         console.error('Error al iniciar sesión');
  //       }
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });


  useEffect(() => {

    const token = localStorage.getItem('token');

    if (token) {
      window.location.href = '/';
    }
  }, []);

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

