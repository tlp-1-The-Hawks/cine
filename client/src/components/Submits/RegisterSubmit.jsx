import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider.jsx"
import { CustomFetch } from "../../api/customFetch.js"
import { SocketContext } from "../../context/SocketProvider.jsx"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
export const RegisterSubmit = ({ formState }) => {
  const { login } = useContext(AuthContext)
  const { conectarSocket } = useContext(SocketContext)

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(formState)




    if (formState.password !== formState.confirmarpassword) {
      return Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      })


    } else {
      const response = await CustomFetch("http://localhost:4000/auth/register", 'POST', formState)


      if (response.errors) {
        return Swal.fire({
          title: 'Error',
          text: response.errors[0].msg,
          icon: 'error',
          width: '50%',
          padding: '1rem',
          background: '#DBCBCB',
          grow: 'row'
        })
      }
      if (response.token) {
        login(response)

        conectarSocket();

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
            navigate('/')
          }
        })
      }

    }

  }

  return (
    <div className='botonRegister'>
      <input onClick={handleSubmit} type="submit" className='botonRegister' value="Registro" />
    </div>
  )
}