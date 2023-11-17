import React from 'react';
import { useEffect, useState } from 'react';
import { CustomFetch } from '../../api/customFetch.js';

export const GenreSelect = ({ formMovie, handleChange }) => {
  const [genreState, setGenreState] = useState([])

  useEffect(() => {
    (
      async () => {
        const data = await CustomFetch('http://localhost:4000/api/genre', 'GET')

        setGenreState(data)
      }
    )()
  }, [])

  return (
    <div className="mt-3 col col-sm-12 col-md-6 mb-3">
      <div className="row">
        <label htmlFor="genre" className="form-label">Género</label>
        <select
          name="genreId"
          id="genre"
          onChange={handleChange}
          value={formMovie.genreId}
        >
          {genreState.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
