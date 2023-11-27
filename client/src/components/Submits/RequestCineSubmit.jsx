import { Link } from 'react-router-dom'
import { CustomFetch } from '../../api/customFetch.js'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export const RequestCineSubmit = ({ formState }) => {

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const user = await CustomFetch("http://localhost:4000/auth/user", 'TOKEN', localStorage.getItem('token'))

            const data = await CustomFetch(`http://localhost:4000/api/request-cine/${user.id}`, 'POST', formState)

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
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className='groupRegisterCine'>
            <div className='row'>
                <div className='col'>
<<<<<<< HEAD
                    <button onClick={handleSubmit} className='botonRegisterCine1 btn'>Enviar</button>
                </div>
                <div className="col">
                    <Link className='botonRegisterCine2 btn' to={'/soporte'}>Cancelar</Link>
=======
                    <button onClick={handleSubmit} className=' btn botonRegisterCine1'>Enviar</button>
                </div>
                <div className="col">
                    <Link className='btn botonRegisterCine2' to={'/soporte'}>Cancelar</Link>
>>>>>>> 6a63a3021f21c74d17dfdf4bd0805dadcdb3ff47
                </div>
            </div>
        </div>

    )
}