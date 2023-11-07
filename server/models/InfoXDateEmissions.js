import { sequelize } from "../config/database.js";

export const infoXdateEmissions = sequelize.define(
    'infoXdateEmission',
{

},
{
    timestamps: false
})

infoXdateEmissions.removeAttribute('id')

export async function addInfoXdateEmissions(informationId,dateEmissionId){
    return await infoXdateEmissions.create({
        informationId:informationId,
        dateEmissionId: dateEmissionId
    })
}