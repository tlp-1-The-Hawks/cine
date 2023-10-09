import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize"
import { cinemaModel } from "./Cinema.models.js"
import { MovieModel } from "./movie_model.js"

export const infoMovieModel = sequelize.define(
  'information', {
  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release_year: {
    type: DataTypes.INTEGER,
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
  }
})

//services

export async function addInfoMovie(director,
  release_year,
  genreId,
  synopsis,
  duration,
  rating,
  actors,
  score) {
  return await infoMovieModel.create({
    director,
    release_year: release_year,
    genreId: genreId,
    synopsis: synopsis,
    duration: duration,
    rating: rating,
    actors: actors,
    score: score
  })
} 
