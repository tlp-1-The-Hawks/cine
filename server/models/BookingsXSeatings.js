import { sequelize } from "../config/database.js";

export const bookingsXSeatings = sequelize.define(
    'bookingsXseatings',
    {

    }
    ,
    {
        timestamps: false
    }
)