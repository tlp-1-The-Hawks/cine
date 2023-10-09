import React from 'react';
import { Header } from './components/Headers/Header.jsx';
import { Filtros } from './components/DirectorioMain/Filtros.jsx';
import { Tarjetas } from './components/DirectorioMain/Tarjetas.jsx';
import { Footer } from './components/Footers/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      {/* Encabezado */}
      <Header />
      {/* Contenido principal */}
      <main>
        <Filtros />
      </main>
      {/* {/ Pie de página */}
      <Footer />
    </div>
  );
}

export default App;