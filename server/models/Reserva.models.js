import { sequelize } from "../config/database.js";

export const bookingModel = sequelize.define(
    'booking',
    {

    }, {
    timestamps: true
})