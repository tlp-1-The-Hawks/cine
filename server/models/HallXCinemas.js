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

