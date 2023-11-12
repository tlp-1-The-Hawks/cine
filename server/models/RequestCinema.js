import {sequelize} from '../config/database.js'
import { DataTypes } from 'sequelize'

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


export async function addRequestCine(solicitud){
    return await requestCinemaModel.create(solicitud)
}