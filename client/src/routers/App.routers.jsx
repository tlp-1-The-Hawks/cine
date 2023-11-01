import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { Register } from '../Pages/Register.jsx';
import { Reserva } from '../Pages/Reserva.jsx'
import { Login } from '../Pages/Login.jsx';
import { AddMovie } from '../Pages/AddMovie.jsx';
import { InfoMovie } from '../Pages/InfoMovie.jsx';
import R from '../components/reserva_boletos/r';
import Reserva_boletos from '../components/reserva_boletos/Reserva_boletos';
import Card from '../components/comentarios/card';
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<App />}
                />
                <Route
                    path='/register'
                    element={<Register />}
                />
                <Route
                    path='/login'
                    element={<Login />}
                />
                <Route
                    path='/reserva'
                    element={<Reserva />}
                />
                <Route
                    path='/agregar-pelicula'
                    element={<AddMovie />}
                />
                <Route
                    path='/informacion-pelicula'
                    element={<InfoMovie />}
                />
                <Route
                    path='/pract'
                    element={<InfoMovie />}
                />
                <Route
                    path='/reserva_boletos'
                    element={<Reserva_boletos />}
                />
                <Route
                    path='/r'
                    element={<R />}
                />
                <Route
                    path='/comentario'
                    element={<Card />}
                />
            </Routes>
        </BrowserRouter>
    )
}