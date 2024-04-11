import React, { useState, useEffect } from 'react';
import { Header } from './components/Headers/Header.jsx';
import { Filtros } from './components/DirectorioMain/Filtros.jsx';
import { Footer } from './components/Footers/Footer.jsx';
import { CustomFetch } from './api/customFetch.js';
import './App.css';



function App() {
  const [cinemas, setCinemas] = useState([]);
  const [searchBar, setSearchBar] = useState('');
  const [movies, setMovies] = useState([]);



  useEffect(() => {
    (
      async () => {
        const dataMovies = await CustomFetch('http://localhost:4000/api/movies', 'GET')
        const data = await CustomFetch('http://localhost:4000/api/cinema', 'GET')

        setCinemas(data)

        setMovies(dataMovies)
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