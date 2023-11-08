import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { Register } from '../Pages/Register.jsx';
import { Reserva } from '../Pages/Reserva.jsx'
import { Login } from '../Pages/Login.jsx';
import { AddMovie } from '../Pages/AddMovie.jsx';
import { Support } from '../Pages/support.jsx';
import { InfoMovie } from '../Pages/InfoMovie.jsx';

import io from 'socket.io-client'
const socket = io("http://localhost:4000")

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
                    element={<InfoMovie
                        socket={socket}
                        />}
                />
                <Route
                path='/soporte'
                element={<Support/>}
                />
            </Routes>
        </BrowserRouter>
    )
}