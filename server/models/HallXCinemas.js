import { sequelize } from "../config/database.js";


export const hallXcinemas = sequelize.define(
    'hallXcinemas',
    {

    },
    {
        timestamps: false
    }
)

hallXcinemas.removeAttribute('id');

export async function addHallxCinemas(cinemaId, hallId) {
    return await hallXcinemas.create({
        cinemaId: cinemaId,
        hallId: hallId
    })
}