import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize"

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
  },
  url_trailer: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

//services

export async function addInfor(newInfo) {
  const newInfoMovie = await informationModel.create(newInfo)

  return newInfoMovie
}
