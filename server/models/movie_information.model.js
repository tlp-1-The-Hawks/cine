import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize"

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
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  }
})

//services

export async function addInfor(
  director,
  release_year,
  synopsis,
  duration,
  rating,
  actors,
  price,
  genreId
) {
  const newInfoMovie = await infoMovieModel.create({
    director: director,
    release_year: release_year,
    synopsis: synopsis,
    duration: duration,
    rating: rating,
    actors: actors,
    price: price,
    genreId: genreId
  })

  return newInfoMovie
} 
