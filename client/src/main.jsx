import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './Pages/Register.jsx';
import { Reserva } from './Pages/Reserva.jsx';
import { FormLogin } from './components/Formularios/FormLogin.jsx';
import { AddMovie } from './Pages/AddMovie.jsx';
import { InfoMovie } from './Pages/InfoMovie.jsx';
import { Context } from './context/UserContext.jsx';
import Card from './components/comentarios/card.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<FormLogin />} />
        <Route path='/reserva' element={<Reserva />} />
        <Route path='/agregar-pelicula' element={<AddMovie />} />
        <Route path='/informacion-pelicula' element={<InfoMovie />} />
        <Route path='/comentario' element={<Card />} />
      </Routes>
    </BrowserRouter>
  </Context>
);
