import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/style/soporteForm.css';

export const SoporteForm = () => {
  return (

    <div className='formularioSoporte'>
      <div className="container">
        <div className='row'>
          <div className="col">
              <div className='mt-5'>
                    <h2 className='titleSupport text-center'>Soporte al Cliente</h2>
                    <p className='textos'>
                      Nuestro dedicado equipo de soporte revisará tu consulta con prontitud y se comunicará contigo a la brevedad. 
                      Si tu solicitud requiere atención urgente o asistencia inmediata,
                      no dudes en contactarnos por teléfono o a través de nuestro servicio de chat en vivo.
                    </p>

                   <div className='mt-5'>
                      <h4 className='text-center'>Solicitud de Permisos para Subir Películas</h4>
                        <p>
                        Si deseas compartir tu cartelera de películas, puedes enviarnos una solicitud y la revisaremos lo más rápido posible.
                        </p>
                  </div>
            </div>

          </div>
          <div className="col">
            <div className='formSoporteBox container mt-5'>
              <form className='formularioItems'>
                <h5 className='titleForm mt-3'>¡Contactate con nosotros!</h5>
                <div className="row">

                </div>
                <div className='row mt-2'>
                  <div className='row justify-content-center' >
                    <label className='text-center'>Correo Electrónico:</label>
                    <input
                      className='w-75'
                      type="email"
                      name="email"

                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='row' >
                    <label className='text-center'>Asunto:</label>
                    <input
                      className='w-100'
                      type="text"
                      name="name"

                    />
                  </div>

                </div>
                <div className='row'>

                  <div className='row'>
                    <label className='text-center'>Mensaje:</label>
                    <textarea
                      className='rounded'
                      name=""
                      id=""
                      cols="30"
                      rows="10"></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className='botonSoporte btn mt-4 mb-2' type="submit">Enviar</button>

                  </div>
                  <div className="col">
                    <Link to={'/register-cine'} className='botonSoporte btn mt-4 mb-2'>Solicitud</Link>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
