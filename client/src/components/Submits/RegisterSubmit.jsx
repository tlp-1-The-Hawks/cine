import { UserContext } from "../../context/UserContext.jsx"
import { types_user } from "../../types/types.user.js"
import { useContext } from "react"

export const RegisterSubmit = ({formState}) => {
    const { state, dispatch } = useContext(UserContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
    
        dispatch({
          type: types_user.USER_ADD,
          payload: formState
        })
      }

    return (
        <div className='botonRegister'>
            <input onClick={handleSubmit} type="submit" className='botonRegister' value="Registro" />
        </div>
    )
}