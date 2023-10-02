import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';

export const MovieModel = sequelize.define(
  'Movie',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actors: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// Servicios

export async function createMovie(movieData) {
  const newMovie = await MovieModel.create(movieData);

  return newMovie;
}

export async function getAllMovies() {
  return (await MovieModel.findAll()) ?? null;
}

export async function getMovieById(movieId) {
  const movie = await MovieModel.findByPk(movieId);
  if (!movie) {
    return null;
  }
  return movie;
}

export async function deleteMovieById(movieId) {
  const movie = await MovieModel.findByPk(movieId);
  if (!movie) {
    return null;
  }
  await movie.destroy();
  return movie;
}

export async function updateMovie(movieId, movieData) {
  const editMovie = await MovieModel.findByPk(movieId);

  editMovie.update(movieData);
  return editMovie;
}

export async function getMovieByTitle(title) {
  const movie = await MovieModel.findOne({ where: { title } });

  if (!movie) {
    return null;
  }

  return movie;
}
