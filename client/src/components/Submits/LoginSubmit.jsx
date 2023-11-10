import { types_user } from "../../types/types.user.js"
import { UserContext } from "../../context/UserContext.jsx"
import { useContext } from "react"

export const LoginSubmit = ({ formState }) => {

  const { state, dispatch } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type: types_user.USER_FIND_ONE,
      payload: formState
    })


  }
  return (
    <div className='botonLogin'>
      <input type="submit" onClick={handleSubmit} className='botonLogin' value="Registro" />
    </div>
  )
}