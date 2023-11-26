import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { Register } from '../Pages/Register.jsx';
import { Reserva } from '../Pages/Reserva.jsx'
import { Login } from '../Pages/Login.jsx';
import { AddMovie } from '../Pages/AddMovie.jsx';
import { Support } from '../Pages/Support.jsx';
import { ManageRequests } from '../Pages/ManageRequests.jsx';
import { InfoMovie } from '../Pages/InfoMovie.jsx';
import { WatchReservations } from '../Pages/WatchReservations.jsx';
import { RegisterCinema } from '../Pages/RegisterCinema.jsx';
import { Halls } from '../Pages/Halls.jsx';
import { EditHall } from '../Pages/EditHall.jsx';
import { MyReservation } from '../Pages/MyReservation.jsx';
import { Correo_devolucion } from '../Pages/Correo_devolucion.jsx';
import {Codigo_Correo} from '../components/otros/Codigo-Correo.jsx';

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
                    />}
                />
                <Route
                    path='/soporte'
                    element={<Support />}
                />
                <Route
                    path='/MiReservas'
                    element={<MyReservation />}
                />
                <Route
                    path='/reservaciones'
                    element={<WatchReservations />}
                />
                <Route
                    path='/register-cine'
                    element={<RegisterCinema />}
                />
                <Route
                    path='/solicitudes'
                    element={<ManageRequests />}
                />
                <Route
                    path='/salas'
                    element={<Halls />}
                />
                <Route
                    path='/editar-sala'
                    element={<EditHall />}
                />
                <Route
                    path='/recuperar-clave'
                    element={<Correo_devolucion />}
                />
                <Route
                    path='/Codigo-Correo'
                    element={<Codigo_Correo/>}
                />
               
            </Routes>
        </BrowserRouter>
    )
}