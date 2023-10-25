import React from 'react';

export const  GenreSelect = ({ genreState, formMovie, handleChange }) => {
  return (
    <div className="mt-3 col col-sm-12 col-md-6 mb-3">
      <div className="row">
        <label htmlFor="genre" className="form-label">Género</label>
        <select
          name="genreId"
          id="genre"
          onChange={handleChange}
          defaultValue={1}
          value={formMovie.genreId}
        >
          {genreState.map((genre) => (
            <option defaultValue={1} key={genre.id} value={genre.id}>
              {genre.genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

