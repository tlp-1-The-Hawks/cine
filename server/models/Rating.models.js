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
  const newRating = await ratingModel.create({
    ...rating,
    userId,
    movieId,
  });

  return newRating;
}

export async function getAllRating() {
  const ratings = await ratingModel.findAll();
  return ratings;
}

export async function getRatingById(id) {
  const rating = await ratingModel.findByPk(id);
  if (!rating) {
    return null;
  }
  return rating;
}

export async function deleteRating(id) {
  const rating = await ratingModel.findByPk(id);
  if (!rating) {
    return null;
  }
  await rating.destroy();
  return rating;
}

export async function updateRating(id, rating) {
  const ratingToUpdate = await ratingModel.findByPk(id);
  if (!ratingToUpdate) {
    return null;
  }
  const ratingUpdated = await ratingToUpdate.update(rating);
  return ratingUpdated;
}

export async function getRatingByMovieId(movieId) {
  const rating = await ratingModel.findAll({
    where: {
      movieId,
    },
  });
  if (!rating) {
    return null;
  }
  return rating;
}

export async function getRatingByUserId(userId) {
  const rating = await ratingModel.findAll({
    where: {
      userId,
    },
  });
  if (!rating) {
    return null;
  }
  return rating;
}

export async function getRatingByUserIdAndMovieId(userId, movieId) {
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
}
