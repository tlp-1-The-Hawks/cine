import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const TypeEmissionModel = sequelize.define('type_emission', {
  type_emission: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    timestamps: false
  })

//services

export async function addTypeEmission() {
  const typeEmissionToCreate =
    [
      {
        "id": 1,
        "type_emission": "2D"
      },
      {
        "id": 2,
        "type_emission": "3D"
      },
      {
        "id": 3,
        "type_emission": "4D"
      }
    ]

  for (const typeEmissionData of typeEmissionToCreate) {
    const existinTypeEmission = await TypeEmissionModel.findOne({
      where: { type_emission: typeEmissionData.type_emission }
    });

    if (!existinTypeEmission) {
      await TypeEmissionModel.create(typeEmissionData);
    }
  }
}

export async function getAllTypesEmissions() {
  return await TypeEmissionModel.findAll();
}