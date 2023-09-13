import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const movieCinema = sequelize.define('movie_cinema', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
}, {
    timestamps: true
})