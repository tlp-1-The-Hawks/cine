import { sequelize } from "../config/database.js"
import { DataTypes } from "sequelize"

export const hallModel = sequelize.define(
    'hall',
    {
        hall: {
            type: DataTypes.INTEGER
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    }
) 