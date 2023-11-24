import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize"
import { cinemaModel } from "./Cinema.models.js"
import { seatingModel } from "./seating.mode.js"
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

//services 
export async function addCreateHall(hall) {
    return await hallModel.create(hall)
}

export async function getAllHallByCinemaId(cinemaId) {
    return await hallModel.findAll({
        include: {
            model: cinemaModel,
            where: {
                id: cinemaId
            }
        }
    })
}

export async function deleteHall(id) {
    return await hallModel.destroy({
        where: {
            id: id
        }
    })
}

export async function getOneHallById(id, cinemaId) {
    return await hallModel.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: seatingModel,
                where: {
                    hallId: id
                }
            },
            {
                model: cinemaModel,
                where: {
                    id: cinemaId
                }
            }
        ]
    })
}


export async function updateHall(id,formState) {
    const hall = await hallModel.findOne({
        where: {
            id:id
        }
    })
    return await hall.update(formState)
}