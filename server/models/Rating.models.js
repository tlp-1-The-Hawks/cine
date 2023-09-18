import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const ratingModel = sequelize.define(
  'rating',
  {
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

//services

export async function addRating(rating, userId, movieId) {
  try {
    const newRating = await ratingModel.create({
      ...rating,
      userId,
      movieId,
    });

    return newRating;
  } catch (error) {
    console.error('Erro al crear un rating');
    throw error;
  }
}

export async function getAllRating() {
  try {
    const ratings = await ratingModel.findAll();
    return ratings;
  } catch (error) {
    console.error('Error al encontrar ratings');
    throw error;
  }
}

export async function getRatingById(id) {
  try {
    const rating = await ratingModel.findByPk(id);
    if (!rating) {
      return null;
    }
    return rating;
  } catch (error) {
    console.error('Error al encontrar el rating');
    throw error;
  }
}

export async function deleteRating(id) {
  try {
    const rating = await ratingModel.findByPk(id);
    if (!rating) {
      return null;
    }
    await rating.destroy();
    return rating;
  } catch (error) {
    console.error('Error al eliminar el rating');
    throw error;
  }
}

export async function updateRating(id, rating) {
  try {
    const ratingToUpdate = await ratingModel.findByPk(id);
    if (!ratingToUpdate) {
      return null;
    }
    const ratingUpdated = await ratingToUpdate.update(rating);
    return ratingUpdated;
  } catch (error) {
    console.error('Error al actualizar el rating');
    throw error;
  }
}

export async function getRatingByMovieId(movieId) {
  try {
    const rating = await ratingModel.findAll({
      where: {
        movieId,
      },
    });
    if (!rating) {
      return null;
    }
    return rating;
  } catch (error) {
    console.error('Error al encontrar el rating');
    throw error;
  }
}

export async function getRatingByUserId(userId) {
  try {
    const rating = await ratingModel.findAll({
      where: {
        userId,
      },
    });
    if (!rating) {
      return null;
    }
    return rating;
  } catch (error) {
    console.error('Error al encontrar el rating');
    throw error;
  }
}

export async function getRatingByUserIdAndMovieId(userId, movieId) {
  try {
    const rating = await ratingModel.findAll({
      where: {
        userId,
        movieId,
      },
    });
    if (!rating) {
      return null;
    }
    return rating;
  } catch (error) {
    console.error('Error al encontrar el rating');
    throw error;
  }
}
