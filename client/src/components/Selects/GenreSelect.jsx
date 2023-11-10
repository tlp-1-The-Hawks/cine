import React from 'react';
import { FindGenre } from '../../hooks/datePreloads/FindGenres.js';

export const GenreSelect = ({ formMovie, handleChange }) => {
  const genreState = FindGenre();

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
