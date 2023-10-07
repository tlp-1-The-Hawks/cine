import { sequelize } from '../config/database.js';

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

export async function addMovieCinema(MovieId, cinemaId) {
  const newMovieCinema = await movieCinemaModel.create({
    MovieId: MovieId,
    cinemaId: cinemaId
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
