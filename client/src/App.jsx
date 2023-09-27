import React from 'react';
import { Header } from './components/Header';
import { Filtros } from './components/Filtros';
import { Tarjetas } from './components/Tarjetas';
import { Footer } from './components/Footer';

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
