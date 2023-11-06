import { sequelize } from "../config/database.js";
import { DataTypes} from "sequelize";
import { addInfoXdateEmissions } from "./InfoXDateEmissions.js";

export const dateEmissionsModel = sequelize.define(
    'date_emission',
{
    date: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export async function addDateEmissions(events, informationId){
    for (let index = 0; index < events.length; index++) {
       const newDateEmissions = await dateEmissionsModel.create({
        date: events[index]
       }) 

       const dateEmissionId = newDateEmissions.id
       const newInfoXdateEmissions = await addInfoXdateEmissions(informationId, dateEmissionId)

    }
    return 
}