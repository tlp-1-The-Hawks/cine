import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const bookingModel = sequelize.define(
    'booking',
    {
        date_booking: {
            type: DataTypes.DATE,
            allowNull: false
        },
        tikets: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
    timestamps: true
})