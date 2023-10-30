import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize"
import { cinemaModel } from "./Cinema.models.js"
import { MovieModel } from "./movie_model.js"
import { movieInfoModel } from "./moviexinfo.model.js"
export const informationModel = sequelize.define(
  'information', {
  rutaImage: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_issue: {
    type: DataTypes.DATE,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actors: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

//services

export async function addInfor(newInfo) {
  const newInfoMovie = await informationModel.create(newInfo)

  return newInfoMovie
}
