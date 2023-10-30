import { sequelize } from '../config/database.js';
import { DataTypes, } from 'sequelize';
import { MovieModel } from './movie_model.js';
import { movieCinemaModel } from './movieXcinema.js';

export const cinemaModel = sequelize.define(
  'cinema',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

//services
export async function addCinema(cinema) {
  const newCinema = await cinemaModel.create(cinema);

  return newCinema;
}

export async function getAllCinema() {
  const cinemas = await cinemaModel.findAll({
    include: [
      {
        model: MovieModel,
        as: 'movie',
        through: {
          model: movieCinemaModel,
        },
      },
    ]
  });
  return cinemas;
}


export async function getCinemaById(cinemaId) {
  const cinema = await cinemaModel.findOne({
    where: {
      id: cinemaId
    }
  });

  if (!cinema) {
    return null;
  }
  return cinema;
}

export async function deleteCinema(id) {

  const cinema = await cinemaModel.findByPk(id);
  if (!cinema) {
    return null;
  }
  await cinema.destroy();
  return cinema;
}

export async function updateCinema(id, cinema) {
  const cinemaToUpdate = await cinemaModel.findByPk(id);
  if (!cinemaToUpdate) {
    return null;
  }
  const cinemaUpdated = await cinemaToUpdate.update(cinema);
  return cinemaUpdated;
}
