import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize';

export const MovieModel = sequelize.define(
  'Movie',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actors: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// Servicios

export async function createMovie(movieData) {
  try {
    const newMovie = await MovieModel.create(movieData);

    return newMovie;
  } catch (error) {
    console.error('Error al crear la película:');

    throw error;
  }
}

export async function getAllMovies() {
  try {
    return (await MovieModel.findAll()) ?? null;
  } catch (error) {
    console.error('Error al encontrar las películas:');

    throw error;
  }
}

export async function getMovieById(movieId) {
  try {
    const movie = await MovieModel.findByPk(movieId);
    if (!movie) {
      return null;
    }
    return movie;
  } catch (error) {
    console.error('Error al encontrar la película:');

    throw error;
  }
}

export async function deleteMovieById(movieId) {
  try {
    const movie = await MovieModel.findByPk(movieId);
    if (!movie) {
      return null;
    }
    await movie.destroy();
    return movie;
  } catch (error) {
    console.error('Error al eliminar la película:');

    throw error;
  }
}

export async function updateMovie(movieId, movieData) {
  try {
    const editMovie = await MovieModel.findByPk(movieId);

    editMovie.update(movieData);
    return editMovie;
  } catch (error) {
    console.error('Error al actualizar la película:');

    throw error;
  }
}

export async function getMovieByTitle(title) {
  try {
    const movie = await MovieModel.findOne({ where: { title } });

    if (!movie) {
      return null;
    }

    return movie;
  } catch (error) {
    console.error('Error al encontrar la película:');

    throw error;
  }
}
