import React from 'react'
import '../../../public/style/FormRegister.css'
export const FormRegister = () => {
  return (
      
    <div className="contenedor">
      <div className="form-box">
        <form name='formfill'>
          <h2>Registro</h2>

            <div className="input-box">
              <input type="text" 
              placeholder='Nombre de Usuario' 
              name="Username"
              />
            </div>

            <div className="input-box">
              <input type="email" 
              placeholder='Email' 
              name="Email"
              />
            </div>

            <div className="input-box">
              <input type="password" 
              placeholder='Contraseña' 
              name="Password"
              />
            </div>

            <div className="input-box">
              <input type="password" 
              placeholder='Confirmar Contraseña' 
              name="cPassword"
              />
            </div>

            <div className="button">
              <input type="submit" className='botn' value="Registro" />
            </div>

            <div className="group">
              <span><a href="#">Recuperar Contraseña</a></span>
              <span><a href="#">Inicia Sesion</a></span>
            </div>

        </form>
      </div>
    </div>
  )
}
