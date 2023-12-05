import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AppRouter } from './routers/App.routers.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';
import { SocketProvider } from './context/SocketProvider.jsx';
import Prueba from './components/prueba.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

<Prueba />

);
