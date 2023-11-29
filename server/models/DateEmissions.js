import { sequelize } from "../config/database.js";
import { DataTypes} from "sequelize";
import { addInfoXdateEmissions } from "./InfoXDateEmissions.js";
import { informationModel } from "./Information.model.js";
import { MovieModel } from "./movie_model.js";

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

export async function updateDateEmissions(events, informationId){
    const dates = await dateEmissionsModel.findAll({
        include: {
            model: informationModel,
            where: {
                id: informationId
            }
        }
    })

    for (let index = 0; index < events.length; index++) {
        if (dates[index]) {
     
            await dates[index].update({ date: events[index].date });
        } else {

            const newDateEmissions = await dateEmissionsModel.create({
                date: events[index]
            });
            
            const dateEmissionId = newDateEmissions.id;
            const newInfoXdateEmissions = await addInfoXdateEmissions(informationId, dateEmissionId);
        }
    }
}

export async function getDateEmissionByCinemaAndMovie(cinemaId, movieId){
    return await dateEmissionsModel.findAll({
        include: [
            {
                model: informationModel,
                where: {
                    cinemaId: cinemaId
                },
                include: [
                    {
                        model: MovieModel,
                        where: {
                            id: movieId
                        }
                    }
                ]
            }
        ]
    })
}
