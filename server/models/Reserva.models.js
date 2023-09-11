import { sequelize } from "../config/database.js";

export const reservaModel = sequelize.define(
    'reserva',
    {

    }, {
    timestamps: true
})