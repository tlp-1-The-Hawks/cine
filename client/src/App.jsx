import React from 'react';
import { Header } from './components/Headers/Header.jsx';
import { Filtros } from './components/DirectorioMain/Filtros.jsx';
import { Footer } from './components/Footers/Footer.jsx';
import './App.css';

function App() {
  return (
      <div className="wrapper">
        <Header />
        <main>
        <Filtros />
        
        </main>
        <Footer />
      </div>
  );
}

export default App;