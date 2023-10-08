import { sequelize } from '../config/database.js';
import { infoMovieModel } from './movie_information.model.js';

export const movieCinemaModel = sequelize.define(
  'movie_cinema',
  {

  },
  {
    timestamps: false,
  }
);

movieCinemaModel.removeAttribute('id')
//services

export async function addMovieCinema(movieId, cinemaId, infomovieId) {
  const newMovieCinema = await movieCinemaModel.create({
    movieId: movieId,
    cinemaId: cinemaId,
    infomovieId: infomovieId
  });

  return newMovieCinema;
}

export async function getAllMovieCinema() {
  const movieXcinemas = await movieCinemaModel.findAll();
  return movieXcinemas;
}

export async function getMovieCinemaById(movieId,cinemaId) {
  const movieXcinema = await movieCinemaModel.findOne({
    where: {
      movieId: movieId,
      cinemaId: cinemaId
    },
    include: {
      model: infoMovieModel,
      as: "infomovie"
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
