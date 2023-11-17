import { sequelize } from '../config/database.js';
import { DataTypes, } from 'sequelize';

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
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cuit: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  return await cinemaModel.findAll() ?? null;
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
