import { Link } from 'react-router-dom'
import { CustomFetch } from '../../api/customFetch.js'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
export const RequestCineSubmit = ({formState}) => {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await CustomFetch('http://localhost:4000/api/request-cine', 'POST', formState)

        if (data.errors) {
            return Swal.fire({
                title: 'Error',
                text: data.errors[0].msg,
                icon: 'error',
                width: '50%',
                padding: '1rem',
                background: '#DBCBCB',
                grow: 'row'
            })
        }

        Swal.fire({
            title: 'Solicitud enviada',
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