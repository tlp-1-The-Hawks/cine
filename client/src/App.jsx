import React from 'react';
import { Header } from './components/Header/Header.jsx';
import { Filtros } from './components/Filtros.jsx';
import { Tarjetas } from './components/Tarjetas.jsx';
import { Footer } from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      {/* Encabezado */}
      <Header />
      {/* Contenido principal */}
      <main>
        <Filtros />
        {/* Sección de tarjetas */}
        <Tarjetas />*{' '}
      </main>
      {/* {/ Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
