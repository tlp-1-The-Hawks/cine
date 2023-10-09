import React from 'react'
import { useState } from 'react'
import style from '../../assets/style/FormRegister.module.css'




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

    fetch("http://localhost:4000/api/users", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => console.log(res))
  }

  return (
    <div className={style.contenedor}>
      <div className={style.formBox}>
        <form name='formregister' onChange={handleChange} onSubmit={handleSubmit}>
          <h2>Registro</h2>

          <div className={style.inputBox}>
            <i className='bx bxs-user'></i>
            <input type="text"
              placeholder='Nombre'
              name="name"
              id='name'
              value={formState.name}
            />
          </div>

          <div className={style.inputBox}>
            <i className='bx bxs-user'></i>
            <input type="text"
              placeholder='Apellido'
              name="last_name"
              id='last_name'
              value={formState.last_name}
            />
          </div>

          <div className={style.inputBox}>
            <i className='bx bxs-user'></i>
            <input type="text"
              placeholder='Nombre de Usuario'
              name="username"
              id='username'
              value={formState.username}
            />
          </div>

          <div className={style.inputBox}>
            <i className='bx bxs-envelope'></i>
            <input type="email"
              placeholder='Email'
              name="email"
              id='email'
              value={formState.email}
            />
          </div>

          <div className={style.inputBox}>
            <i className='bx bxs-lock-alt'></i>
            <input type="password"
              placeholder='Contraseña'
              name="password"
              id='password'
              value={formState.password}
            />
          </div>

          <div className={style.inputBox}>
            <i className='bx bxs-lock-alt'></i>
            <input
              type="password"
              placeholder="Confirmar Contraseña"
              name="confirmarpassword"
              id="confirmarpassword"
              value={formState.confirmarpassword}
            />
          </div>

          <div className={style.botn}>
            <input type="submit" className={style.botn} value="Registro" />
          </div>

          <div className={style.group}>
            <span><a href="#">Recuperar Contraseña</a></span>
            <span><a href="#">Inicia Sesion</a></span>
          </div>
        </form>
      </div>
    </div>
  )
}
