import { sequelize } from '../config/database.js'
import { DataTypes } from 'sequelize'
import { provinceModel } from './Province.model.js'
import { locationModel } from './location.model.js'
import { cinemaModel } from './Cinema.models.js'
import { UserModel } from './user_model.js'

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
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)


export async function addRequestCine(solicitud, UserId) {
    const data = {...solicitud, UserId}
    return await requestCinemaModel.create(data)
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

export async function acceptRequest(id) {
    const request = await requestCinemaModel.findOne({
        where: {
            id: id
        }
    })

  
    const addCinema = await cinemaModel.create({
        name: request.name_cinema,
        address: request.address,
        email: request.email,
        phone: request.phone,
        cuit: request.cuit,
        provinceId: request.provinceId,
        locationId: request.locationId
    })

    const user = await UserModel.findOne({
        where: {
            id: request.UserId
        }
    })
 

 
   await user.update({cinemaId: addCinema.id})

    const delRequest = await requestCinemaModel.destroy({
        where: {
            id: request.id
        }
    })

    return addCinema
}