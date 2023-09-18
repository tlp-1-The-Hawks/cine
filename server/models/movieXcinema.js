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
  try {
    const newMovieCinema = await movieCinemaModel.create({
      movieId,
      cineId,
    });

    return newMovieCinema;
  } catch (error) {
    console.error('Erro al crear un movieXcinema');
    throw error;
  }
}

export async function getAllMovieCinema() {
  try {
    const movieXcinemas = await movieCinemaModel.findAll();
    return movieXcinemas;
  } catch (error) {
    console.error('Error al encontrar movieXcinemas');
    throw error;
  }
}

export async function getMovieCinemaById(id) {
  try {
    const movieXcinema = await movieCinemaModel.findByPk(id);
    if (!movieXcinema) {
      return null;
    }
    return movieXcinema;
  } catch (error) {
    console.error('Error al encontrar el movieXcinema');
    throw error;
  }
}

export async function deleteMovieCinema(id) {
  try {
    const movieXcinema = await movieCinemaModel.findByPk(id);
    if (!movieXcinema) {
      return null;
    }
    await movieXcinema.destroy();
    return movieXcinema;
  } catch (error) {
    console.error('Error al eliminar el movieXcinema');
    throw error;
  }
}
