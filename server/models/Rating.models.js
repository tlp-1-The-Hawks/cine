import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";


export const ratingModel = sequelize.define('rating', {
    stars: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true
})