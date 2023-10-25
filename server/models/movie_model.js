import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';
import { cinemaModel } from './Cinema.models.js';
import { informationModel } from './Information.model.js';
import { genreModel } from './genre.models.js';
import { movieCinemaModel } from './movieXcinema.js';

export const MovieModel = sequelize.define(
  'movie',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      defaultValue: "0"
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

      },
      {
        model: informationModel,
        include: {
          model: genreModel
        }
      }
    ]
  }) ?? null;
}

export async function getMovieById(movieId, cinemaId) {
  const movie = await MovieModel.findOne({
    where: {
      id: movieId
    },
    include: [
      {
        model: cinemaModel,
        where: {
          id: cinemaId
        }
      },
      {
        model: informationModel
      }
    ]
  });


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
        model: informationModel,
        as: 'infomovie',
        where: {
          genreId: genreId
        }
      }
    ]
  })
}
