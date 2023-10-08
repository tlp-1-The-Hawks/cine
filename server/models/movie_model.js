import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';
import { cinemaModel } from './Cinema.models.js';

export const MovieModel = sequelize.define(
  'movie',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

// Servicios

export async function createMovie(movie) {
  const newMovie = await MovieModel.create(movie);

  return newMovie;
}

export async function getAllMovies() {
  return await MovieModel.findAll({
    include: [
      {
        model: cinemaModel,
        as: "cine",
      }
    ]
  }) ?? null;
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
