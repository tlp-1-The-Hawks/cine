import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const bookingModel = sequelize.define(
  'booking',
  {
    date_booking: {
      type: DataTypes.DATE,
      allowNull: false,
    },
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

export async function addBooking(booking, userId, movieId) {
  const newBooking = await bookingModel.create({
    ...booking,
    userId,
    movieId,
  });

  return newBooking;

}

export async function getAllBooking() {
  const bookings = await bookingModel.findAll();
  return bookings;

}

export async function getBookingById(id) {
  const booking = await bookingModel.findByPk(id);
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
