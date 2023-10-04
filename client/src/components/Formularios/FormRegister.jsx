import React from 'react'
import style from '../../../public/style/FormRegister.module.css'

export const FormRegister = () => {
  return (

    <div className={style.contenedor}>
      <div className={style.formBox}>
        <form name='formfill'>
          <h2>Registro</h2>

          <div className={style.inputBox}>
            <i class='bx bxs-user'></i>
            <input type="text"
              placeholder='Nombre de Usuario'
              name="Username"
              id='username'
            />
          </div>

          <div className={style.inputBox}>
            <i class='bx bxs-envelope'></i>
            <input type="email"
              placeholder='Email'
              name="Email"
              id='email'
            />
          </div>

          <div className={style.inputBox}>
            <i class='bx bxs-lock-alt'></i>
            <input type="password"
              placeholder='Contraseña'
              name="Password"
              id='password'
            />
          </div>

          <div className={style.inputBox}>
            <i class='bx bxs-lock-alt'></i>
            <input type="password"
              placeholder='Confirmar Contraseña'
              name="Password"
              id='confirmarpassword'
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
