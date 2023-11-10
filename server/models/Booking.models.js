import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { UserModel } from './user_model.js';
import { cinemaModel } from './Cinema.models.js';
import { MovieModel } from './movie_model.js';
import { dateEmissionsModel } from './DateEmissions.js';
export const bookingModel = sequelize.define(
  'booking',
  {
    paymentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

//services

export async function addBooking(paymentId, cinemaId, userId, movieId) {
  const newBooking = await bookingModel.create({
    paymentId: paymentId,
    cinemaId: cinemaId,
    userId: userId,
    movieId: movieId});

  return newBooking;

}

export async function getAllBooking() {
  const bookings = await bookingModel.findAll();
  return bookings;

}

export async function getBookingById(movieId,cinemaId,userId) {
 return await bookingModel.findOne({
    where: {
      movieId:movieId,
      cinemaId:cinemaId,
      userId: userId
    },
    include: [
    {
      model: dateEmissionsModel
    }
    ]
  }) ?? null
}

export async function deleteBooking(id) {
  const booking = await bookingModel.findByPk(id);
  if (!booking) {
    return null;
  }
  return await booking.destroy();
}

export async function updateBooking(id, booking) {
  const bookingToUpdate = await bookingModel.findByPk(id);
  if (!bookingToUpdate) {
    return null;
  }
  return await bookingToUpdate.update(booking);
}

export async function getBookingByUserId(userId) {
  const booking = await bookingModel.findAll({
    where: {
      userId,
    },
  });
  if (!booking) {
    return null;
  }
  return booking;
}

export async function getAllBookingByMovieIdAndCinemaId(movieId, cinemaId) {
  const booking = await bookingModel.findAll({
    where: {
      movieId: movieId,
      cinemaId: cinemaId
    },
    include: [
      {
        model: UserModel
      }
    ]
  });
  if (!booking) {
    return null;
  }
  return booking;
}

