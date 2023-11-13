import { sequelize } from '../config/database.js'
import { DataTypes } from 'sequelize'
import { provinceModel } from './Province.model.js'
import { locationModel } from './location.model.js'

export const requestCinemaModel = sequelize.define(
    'requestCinema',
    {
        name_cinema: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cuit: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)


export async function addRequestCine(solicitud) {
    return await requestCinemaModel.create(solicitud)
}

export async function getRequestCine() {
    return await requestCinemaModel.findAll({
        include: [
            {
                model: provinceModel
            },
            {
                model: locationModel
            }
        ]
    })
}


export async function deleteRequestCine(id) {
    return await requestCinemaModel.destroy({
        where: {
            id: id
        }
    })
}