import { sequelize } from '../config/database.js';
import { informationModel } from './Information.model.js';
import { cinemaModel } from './Cinema.models.js';

export const movieCinemaModel = sequelize.define(
  'movie_cinema',
  {

  },
  {
    indexes: [],
    timestamps: false,
  }
);

movieCinemaModel.removeAttribute('id')
//services

export async function addMovieCinema(movieId, cinemaId) {
  const newMovieCinema = await movieCinemaModel.create({
    movieId: movieId,
    cinemaId: cinemaId
  });

  return newMovieCinema;
}

export async function getAllMovieCinema() {
  const movieXcinemas = await movieCinemaModel.findAll({
    include: [
      {
        model: cinemaModel,
        as: 'cinema'
      }
    ]
  });
  return movieXcinemas;
}

export async function getMovieCinemaById(movieId, cinemaId) {
  const movieXcinema = await movieCinemaModel.findOne({
    where: {
      movieId: movieId,
      cinemaId: cinemaId
    },
    include: {
      model: informationModel,
      as: 'infomovie'
    }
  }
  );
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
