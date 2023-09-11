import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize'


export const cinemaModel = sequelize.define(
    'cinema',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
    timestamps: true
})

//services
export async function addCinema(cinema) {
    return await cinemaModel.create(cinema)
}

export async function getAllCinema() {
    return await cinemaModel.findAll();
}

export async function getCinemaById(id) {
    return await cinemaModel.findOne({
        where: {
            id
        }
    }) ?? null;
}

export async function deleteCinema(id) {
    return await cinemaModel.destroy({
        where: {
            id
        }
    }) ?? null;
}

export async function updateCinema(id, cinema) {

    const editcinema = await cinemaModel.findOne(
        {
            where: {
                id
            }
        }
    );

    return await editcinema.update(cinema)
}