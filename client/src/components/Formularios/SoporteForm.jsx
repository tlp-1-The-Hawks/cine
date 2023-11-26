import React, { useState } from 'react';
import '../../assets/style/soporteForm.css';
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import axios from 'axios';



export const SoporteForm = () => {
  const {authState} = useContext(AuthContext)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/signup', formData); // Reemplaza con tu dirección de servidor correcta
      console.log(response.data); // Mensaje de éxito o error
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <div className='formularioSoporte'>
      <div className="container">
        <div className='row'>
          <div className="col-12 col-md-6 col-sm-12">
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
              <form className='formularioItems' onSubmit={handleSubmit}>
                <h5 className='titleForm mt-3'>¡Contactate con nosotros!</h5>
                <div className="row">

                </div>
                <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Subject</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
                <div className="row">
                  <div className="col">
                    <button className='botonSoporte btn mt-4 mb-2' type="submit">Enviar</button>
                  </div>
                  <div className="col">
                    <button onClick={e => {
                      e.preventDefault()
                      if(authState.cinema){
                       return Swal.fire({
                          title: 'Error',
                          text: '¡Ya puedes compartir tu cartelera de películas!',
                          icon: 'error',
                          width: '50%',
                          padding: '1rem',
                          background: '#ff0000',
                          color:'white',
                          grow: 'row'
                        })
                      }
                       if(authState.islogged) {
                         return navigate('/register-cine')
                       }
                      Swal.fire({
                        title: 'Error',
                        text: '¡Debes iniciar sesion!',
                        icon: 'error',
                        width: '50%',
                        padding: '1rem',
                        background: '#DBCBCB',
                        grow: 'row'
                      })
                    }} className='botonSoporte btn mt-4 mb-2'>Solicitud</button>
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
