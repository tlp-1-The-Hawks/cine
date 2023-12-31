import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';
import { cinemaModel } from './Cinema.models.js';
import { informationModel } from './Information.model.js';
import { genreModel } from './genre.models.js';
import { dateEmissionsModel } from './DateEmissions.js';
import { hallModel } from './Hall.models.js';
import { TypeEmissionModel } from './TypeEmission.model.js';

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
  }
  return shearchMovie

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
        },
        required: true
      }
    ]
  }) ?? null;
}

export async function getMovieById(movieId, cinemaId) {
  return await MovieModel.findOne({
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
        model: informationModel,
        where: {
          cinemaId: cinemaId
        },
        include: [
          {
            model: dateEmissionsModel
          },
          {
            model: hallModel
          },
          {
            model: TypeEmissionModel
          }
        ]
      }
    ]
  });
}


export async function deleteMovieById(movieId) {
  const movie = await MovieModel.findByPk(movieId);
  if (!movie) {
    return null;
  }
  await movie.destroy();
  return movie;
}

export async function updateMovie(movieId, title) {
  const movie = await MovieModel.findOne({
    where : {
      id: movieId
    }
  });

  if(movie.title == title){
    return movie.update({title:title})
  } 

  if(movie !== title) {
    return await MovieModel.create({
      title: title
    })
  }

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

export async function getMovieByCinemaId(cinemaId) {
  return await MovieModel.findAll({
    include: [
      {
        model: informationModel,
        where: {
          cinemaId: cinemaId
        }
      }
    ]
  })
}
