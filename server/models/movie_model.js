import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';
import { cinemaModel } from './Cinema.models.js';
import { infoMovieModel } from './movie_information.model.js';

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

export async function createMovie(title) {

  let shearchMovie = await MovieModel.findOne({
    where: {
      title: title,
    }
  }) ?? null


  if (shearchMovie === null) {
    const newMovie = await MovieModel.create({
      title: title
    });


    return newMovie
  } else {
    return shearchMovie
  }
}

export async function getAllMovies() {
  return await MovieModel.findAll({
    include: [
      {
        model: cinemaModel,
        as: "cine",
      },
      {
        model: infoMovieModel,
        as: 'infomovie'
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

export async function getMovieByInfo(genreId) {
  return await MovieModel.findAll({
    include: [
      {
        model: cinemaModel,
        as: 'cine'
      },
      {
        model: infoMovieModel,
        as: 'infomovie',
        where: {
          genreId: genreId
        }
      }
    ]
  })
}
