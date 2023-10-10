import { sequelize } from "../config/database.js";

export const infoCinemaModel = sequelize.define(
    'infoCinema', {

}, {
    timestamps: false
})

infoCinemaModel.removeAttribute('id')


//services

export async function addCinemaInfo(cinemaId, informationId) {
    const NewCineInfo = await infoCinemaModel.create({
        cinemaId: cinemaId,
        informationId: informationId
    })
    
    return NewCineInfo
}