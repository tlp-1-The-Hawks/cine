import { sequelize } from "../config/database.js";

export const infoCinemaModel = sequelize.define(
    'infoCinema', {

}, {
    timestamps: false
})

infoCinemaModel.removeAttribute('id')