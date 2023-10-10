import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { UserModel } from './user_model.js';
import { cinemaModel } from './Cinema.models.js';
import { MovieModel } from './movie_model.js';

export const bookingModel = sequelize.define(
  'booking',
  {
    tikets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

//services

export async function addBooking(tikets, cinemaId, userId, movieId) {
  const newBooking = await bookingModel.create({
    tikets: tikets,
    cinemaId: cinemaId,
    userId: userId,
    movieId: movieId
  });

  return newBooking;

}

export async function getAllBooking() {
  const bookings = await bookingModel.findAll();
  return bookings;

}

export async function getBookingById(bookingId) {
  const booking = await bookingModel.findOne({
    where: {
      id: bookingId
    },
    include: [
      {
        model: UserModel
      },
      {
        model: MovieModel
      },
      {
        model: cinemaModel
      }
    ]
  });
  if (!booking) {
    return null;
  }
  return booking;
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

export async function getBookingByMovieId(movieId) {
  const booking = await bookingModel.findAll({
    where: {
      movieId,
    },
  });
  if (!booking) {
    return null;
  }
  return booking;
}
