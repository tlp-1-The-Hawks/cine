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

