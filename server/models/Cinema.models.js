import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';

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
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

//services
export async function addCinema(cinema) {
  try {
    const newCinema = await cinemaModel.create(cinema);

    return newCinema;
  } catch (error) {
    console.error('Erro al crear un cine');
    throw error;
  }
}

export async function getAllCinema() {
  try {
    const cinemas = await cinemaModel.findAll();
    return cinemas;
  } catch (error) {
    console.error('Error al encontrar cines');
    throw error;
  }
}

export async function getCinemaById(id) {
  try {
    const cinema = await cinemaModel.findByPk(id);
    if (!cinema) {
      return null;
    }
    return cinema;
  } catch (error) {
    console.error('Error al encontrar el cine');
    throw error;
  }
}

export async function deleteCinema(id) {
  try {
    const cinema = await cinemaModel.findByPk(id);
    if (!cinema) {
      return null;
    }
    await cinema.destroy();
    return cinema;
  } catch (error) {
    console.error('Error al eliminar el cine');
    throw error;
  }
}

export async function updateCinema(id, cinema) {
  try {
    const cinemaToUpdate = await cinemaModel.findByPk(id);
    if (!cinemaToUpdate) {
      return null;
    }
    const cinemaUpdated = await cinemaToUpdate.update(cinema);
    return cinemaUpdated;
  } catch (error) {
    console.error('Error al actualizar el cine');
    throw error;
  }
}
