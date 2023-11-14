import { types_user } from "../../types/types.user.js"
import { UserContext } from "../../context/UserContext.jsx"
import { useContext } from "react"
import { CustomFetch } from "../../api/customFetch.js"
import { SocketContext } from "../../context/SocketProvider.jsx"
import { FindOneUser } from "../../hooks/datePreloads/FindOneUser.js"
import { AuthContext } from "../../context/AuthProvider.jsx"
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"

export const LoginSubmit = ({ formState }) => {
  const navigate = useNavigate()
  const { conectarSocket } = useContext(SocketContext)
  const { login } = useContext(AuthContext)
  const { state, dispatch } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await CustomFetch("http://localhost:4000/auth/login", 'POST', formState);

    if (resp === null) {
      Swal.fire({
        title: 'El correo o contraseña son invalidos',
        icon: 'error',
        confirmButtonText: 'ok',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      })
    }
    if (resp.errors) {
      Swal.fire({
        title: 'Error',
        text: resp.errors[0].msg,
        icon: 'error',
        width: '50%',
        padding: '1rem',
        background: '#DBCBCB',
        grow: 'row'
      })
    }
    if (resp.token) {
      login(resp);
      conectarSocket();
      localStorage.setItem('token', resp.token);
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
          // window.location.href = '/'
          navigate('/')
        }
      })
    }

  }
  return (
    <div className='botonLogin'>
      <input type="submit" onClick={handleSubmit} className='botonLogin' value="Iniciar sesión" />
    </div>
  )
}