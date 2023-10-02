import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';

export const movieCinemaModel = sequelize.define(
  'movie_cinema',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

//services

export async function addMovieCinema(movieId, cineId) {
  const newMovieCinema = await movieCinemaModel.create({
    movieId,
    cineId,
  });

  return newMovieCinema;
}

export async function getAllMovieCinema() {
  const movieXcinemas = await movieCinemaModel.findAll();
  return movieXcinemas;
}

export async function getMovieCinemaById(id) {
  const movieXcinema = await movieCinemaModel.findByPk(id);
  if (!movieXcinema) {
    return null;
  }
  return movieXcinema;
}

export async function deleteMovieCinema(id) {
  const movieXcinema = await movieCinemaModel.findByPk(id);
  if (!movieXcinema) {
    return null;
  }
  await movieXcinema.destroy();
  return movieXcinema;
}
