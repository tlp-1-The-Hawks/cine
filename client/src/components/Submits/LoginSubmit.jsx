import { types_user } from "../../types/types.user.js"
import { UserContext } from "../../context/UserContext.jsx"
import { useContext } from "react"
import { CustomFetch } from "../../api/customFetch.js"
import { SocketContext } from "../../context/SocketProvider.jsx"
import { FindOneUser } from "../../hooks/datePreloads/FindOneUser.js"

export const LoginSubmit = ({ formState }) => {
  const { conectarSocket } = useContext(SocketContext)

  const { state, dispatch } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await CustomFetch("http://localhost:4000/auth/login", 'POST', formState);
    if (resp.user) {

      // Se dispara la acción para modificar el estado global
      login(resp);

      // Persistencia
      localStorage.setItem('user', JSON.stringify(resp.user));
      localStorage.setItem('token', JSON.stringify(resp.token));

      conectarSocket();

      alert('Bienvenid@!!!');
      reset();


    } else {
      alert('Algo salió mal')
    }

  }
  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   dispatch({
  //     type: types_user.USER_FIND_ONE,
  //     payload: formState
  //   })


  // }
  return (
    <div className='botonLogin'>
      <input type="submit" onClick={handleSubmit} className='botonLogin' value="Registro" />
    </div>
  )
}