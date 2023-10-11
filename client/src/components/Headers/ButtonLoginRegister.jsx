import { Link } from "react-router-dom"

export const LoginButtons = () => {
    return (
        <div>
            <Link to="/register" type="button" className="btn bg-dark text-white me-2">
                Registrarse
            </Link>
            <Link to='/login' type="button" className="btn bg-dark text-white">
                Iniciar sesión
            </Link>
        </div>
    )
}