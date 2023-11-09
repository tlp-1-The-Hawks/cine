import React, { useState, useEffect } from 'react';
import { Header } from './components/Headers/Header.jsx';
import { Filtros } from './components/DirectorioMain/Filtros.jsx';
import { Footer } from './components/Footers/Footer.jsx';
import { FindCinemas } from './hooks/datePreloads/FindCinemas.js';
import { FindMovies } from './hooks/datePreloads/FindMovies.js';
import './App.css';



function App() {
  const [cinemas, setCinemas] = useState([]);
  const [searchBar, setSearchBar] = useState('');
  const movies = FindMovies()


  useEffect(() => {
    (
      async () => {
        const data = await FindCinemas()
        setCinemas(data)
      }
    )()
  }, [])

  return (
    <div className="wrapper">
      <Header
        setSearchBar={setSearchBar}
      />
      <main>
        <Filtros
          setSearchBar={setSearchBar}
          searchBar={searchBar}
          movies={movies}
          cinemas={cinemas}
        />

      </main>
      <Footer />
    </div>
  );
}

export default App;