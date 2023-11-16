import { DataTypes } from 'sequelize'
import {sequelize} from '../config/database.js'

export const provinceModel = sequelize.define(
    'province',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

export async function createProvince() {
    const provinceToCreate =
      [
        {
          "id": 1,
          "name": "Formosa",
        }
      ]
  
    for (const provinceData of provinceToCreate) {
      const existingProvince = await provinceModel.findOne({ where: { name: provinceData.name } });
  
      if (!existingProvince) {
        await provinceModel.create(provinceData);
      }
    }
  }

export async function getAllProvinces(){
    return await provinceModel.findAll()
}