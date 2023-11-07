import React from 'react'
import '../../assets/style/soporteForm.css';

export const SoporteForm = () => {
  return (<div className='formulario'>      
    <h5 className='
    titleForm'>¡Contactate con nosotros!</h5>
    <p>¡Gracias por contactar nuestro equipo de soporte! Estamos aquí para ayudarte con tus preguntas y preocupaciones. Por favor, proporciona la siguiente información para que podamos asistirte de la mejor manera posible:
    </p>
    <form  className='formularioItems'>
      <div className='inputs'> 
        <div >
          <label>Nombre:</label>
          <input
            type="text"
            name="name"

          />
        </div>
      <div >
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="email"

        />
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea
          name="message"

        />
        </div>
    </div>

      <button type="submit">Enviar</button>
    </form>
  </div>

  )
}
