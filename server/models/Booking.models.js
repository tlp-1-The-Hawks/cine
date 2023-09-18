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
  try {
    const newBooking = await bookingModel.create({
      ...booking,
      userId,
      movieId,
    });

    return newBooking;
  } catch (error) {
    console.error('Erro al crear un booking');
    throw error;
  }
}

export async function getAllBooking() {
  try {
    const bookings = await bookingModel.findAll();
    return bookings;
  } catch (error) {
    console.error('Error al encontrar bookings');
    throw error;
  }
}

export async function getBookingById(id) {
  try {
    const booking = await bookingModel.findByPk(id);
    if (!booking) {
      return null;
    }
    return booking;
  } catch (error) {
    console.error('Error al encontrar el booking');
    throw error;
  }
}

export async function deleteBooking(id) {
  try {
    const booking = await bookingModel.findByPk(id);
    if (!booking) {
      return null;
    }
    return await booking.destroy();
  } catch (error) {
    console.error('Error al eliminar el booking');
    throw error;
  }
}

export async function updateBooking(id, booking) {
  try {
    const bookingToUpdate = await bookingModel.findByPk(id);
    if (!bookingToUpdate) {
      return null;
    }
    return await bookingToUpdate.update(booking);
  } catch (error) {
    console.error('Error al actualizar el booking');
    throw error;
  }
}

export async function getBookingByUserId(userId) {
  try {
    const booking = await bookingModel.findAll({
      where: {
        userId,
      },
    });
    if (!booking) {
      return null;
    }
    return booking;
  } catch (error) {
    console.error('Error al encontrar el booking');
    throw error;
  }
}

export async function getBookingByMovieId(movieId) {
  try {
    const booking = await bookingModel.findAll({
      where: {
        movieId,
      },
    });
    if (!booking) {
      return null;
    }
    return booking;
  } catch (error) {
    console.error('Error al encontrar el booking');
    throw error;
  }
}
