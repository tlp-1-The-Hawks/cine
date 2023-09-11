import { reservaModel } from "../models/Reserva.models.js";
import { cineModel } from "../models/Cine.models.js";
import { sequelize } from "./database.js";
cineModel.hasMany(reservaModel, {
    foreignKey: "cineId",
    sourceKey: "id"
})

reservaModel.belongsTo(cineModel, {
    foreignKey: "cineId",
    targetKey: "id"
})





export async function startDb() {
    try {
        await sequelize.sync({ force: false });
    } catch (error) {
        console.log(error);
    }
}


