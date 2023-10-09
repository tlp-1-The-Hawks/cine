import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const genreModel = sequelize.define(
    'genre',
    {
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

//Services
export async function addGenre(genre){
    return await genreModel.create({
        genre: genre
    }) ?? null
}

