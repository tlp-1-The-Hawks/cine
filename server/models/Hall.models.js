import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize"

export const hallModel = sequelize.define(
    'hall',
    {
        nr_hall: {
            type: DataTypes.INTEGER
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }
)

//services 
export async function addCreateHall(hall) {
    return await hallModel.create(hall)
}