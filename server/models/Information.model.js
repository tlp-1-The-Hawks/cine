import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize"
import { hallModel } from "./Hall.models.js"
import { dateEmissionsModel } from "./DateEmissions.js"
import { genreModel } from "./genre.models.js"
import { MovieModel } from "./movie_model.js"

export const informationModel = sequelize.define(
  'information', {
  rutaImage: {
    type: DataTypes.STRING,
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


export async function deleteInfo(id) {
  return await informationModel.destroy({
    where: {
      id:id
    }
  })
}

export async function getOneInfo(id){
  return await informationModel.findOne({
    where : {
      id: id
    },
    include: [
      {
        model: dateEmissionsModel
      },
      {
        model: hallModel
      },
      {
        model: MovieModel
      }
    ]
  })
}

export async function updateInfo(info, infoId){
  const information = await informationModel.findOne({
    where: {
      id: infoId
    }
  })

  return await information.update(info)
}


// export async function getOneInfo(id){
//   return await MovieModel.findAll({
//       include: {
//         model: informationModel,
//          where: {
//             id: id
//           },
//           include: [
//             {
//               model: genreModel
//             },
//             {
//               model: dateEmissionsModel
//             },
//             {
//               model: hallModel
//             }
//           ]
//       }
//   })
// }

