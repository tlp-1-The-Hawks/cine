import { Link } from "react-router-dom"

export const LoginButtons = () => {
    return (
        <div>
            <Link to="/register" type="button" className="btn bg-dark text-white me-2">
            <box-icon name='log-in' type='solid' color='#ffffff' ></box-icon> Registrarse
            </Link>
            <Link to='/login' type="button" className="btn bg-dark text-white">
            <box-icon name='log-in' type='solid' color='#ffffff' ></box-icon> Iniciar sesión
            </Link>
        </div>
    )
}