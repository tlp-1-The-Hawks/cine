import { sequelize } from '../config/database.js';
import { DataTypes } from 'sequelize'


export const cineModel = sequelize.define(
    'cine',
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

