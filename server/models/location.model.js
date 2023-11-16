import { DataTypes } from 'sequelize'
import {sequelize} from '../config/database.js'

export const locationModel = sequelize.define(
    'location',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

export async function createLocation() {
    const locationToCreate =
      [
        {
          "id": 1,
          "name": "Formosa",
          "provinceId": 1
        },
        {
          "id": 2,
          "name": "Bermejo",
          "provinceId": 1
        },
        {
          "id": 3,
          "name": "Laishí",
          "provinceId": 1
        },
        {
          "id": 4,
          "name": "Matacos",
          "provinceId": 1
        },
        {
          "id": 5,
          "name": "Patiño",
          "provinceId": 1
        },
        {
          "id": 6,
          "name": "Pilagás",
          "provinceId": 1
        },
        {
          "id": 7,
          "name": "Pilcomayo",
          "provinceId": 1
        },
        {
          "id": 8,
          "name": "Pirané",
          "provinceId": 1
        },
        {
          "id": 9,
          "name": "Ramón Lista",
          "provinceId": 1
        }
      ]
  
    for (const locationData of locationToCreate) {
      const existinglocation = await locationModel.findOne({ where: { name: locationData.name } });
  
      if (!existinglocation) {
        await locationModel.create(locationData);
      }
    }
  }

  export async function getLocationByProvince(provinceId){
        return await locationModel.findAll({
            where: {
                provinceId: provinceId
            }
        })
  }