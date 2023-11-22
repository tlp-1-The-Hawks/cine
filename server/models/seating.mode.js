import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { dateEmissionsModel } from "./DateEmissions.js";
export const seatingModel = sequelize.define(
    'seating',
    {
        row: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        column: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)

//
export async function addSeating(seating, hallId) {
    for (let index = 0; index < seating.length; index++) {
        const newSeating = await seatingModel.create({
            row: seating[index].row,
            column: seating[index].column,
            hallId: hallId
        })
    }
}

export async function updateSeating(seating, hallId) {
    const oldSeating = await seatingModel.destroy({
        where: {
            hallId: hallId
        }
    })

    for (let index = 0; index < seating.length; index++) {

        const newSeating = await seatingModel.create({
            row: seating[index].row,
            column: seating[index].column,
            hallId: hallId
        })
    }
}

export async function deleteSeatings(hallId) {
    return await seatingModel.destroy({
        where: {
            hallId: hallId
        }
    })
}

export async function getSeatingsByHallAndDate(hallId, dateId) {
    return await seatingModel.findAll({
        where: {
            hallId: hallId
        },
        include:
        {
            model: dateEmissionsModel,
            where: {
                dateEmissionId: dateId
            }
        }
    })
}