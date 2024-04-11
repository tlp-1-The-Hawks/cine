import { sequelize } from "../config/database.js";

export const dateEmissionXseatings = sequelize.define(
    'dateEmissionXseatings',
    {

    }
    ,
    {
        timestamps: false
    }
)


export async function addDateEmissionXseatings(seatings, dateId) {
    for (let index = 0; index < seatings.length; index++) {
        const newdateEmissionXseatings = await dateEmissionXseatings.create({
            seatingId: seatings[index],
            dateEmissionId: dateId
        })
    }
}

