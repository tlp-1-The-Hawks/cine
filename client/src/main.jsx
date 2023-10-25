import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {NextUIProvider} from '@nextui-org/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from './Pages/Register.jsx';
import { Reserva } from './Pages/Reserva.jsx'
import { FormLogin } from './components/Formularios/FormLogin.jsx';
import { AddMovie } from './Pages/AddMovie.jsx';
import { InfoMovie } from './Pages/InfoMovie.jsx';
import { Context } from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD


    <React.StrictMode>
      <NextUIProvider>
   
  
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
        element={<FormLogin />}
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
    </Routes>
  </BrowserRouter>
  </NextUIProvider>
    </React.StrictMode>,
=======
  <Context>
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
          element={<FormLogin />}
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
      </Routes>
    </BrowserRouter>
  </Context>
>>>>>>> 750b2a311faa8834ba4d8f3353c4ca7afef603bf
);
