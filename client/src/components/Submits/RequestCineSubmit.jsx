import { types_user } from '../../types/types.user.js'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext.jsx'
import { Link } from 'react-router-dom'

export const RequestCineSubmit = ({formState}) => {
    const {state, dispatch} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: types_user.CINE_REQUEST,
            payload: formState
        })
    }
    return (
        
            <div className='groupRegisterCine'>
                    <div className='row'>
                        <div className='col'>
                            <button onClick={handleSubmit} className='botonRegisterCine1 btn'>Enviar</button>
                        </div>
                        <div className="col">
                            <Link className='botonRegisterCine2 btn' to={'/soporte'}>Cancelar</Link>
                        </div>
                    </div>
             </div>
        
    )
}