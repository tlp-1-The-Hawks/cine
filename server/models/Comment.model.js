import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const commentModel = sequelize.define(
    'comment', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
})