import { bookingModel } from "../models/Reserva.models.js";
import { cinemaModel } from "../models/Cine.models.js";
import { sequelize } from "./database.js";
import { UserModel } from "../models/user_model.js";


cinemaModel.hasMany(bookingModel, {
    foreignKey: "cineId",
    sourceKey: "id"
})

bookingModel.belongsTo(cinemaModel, {
    foreignKey: "cineId",
    targetKey: "id"
})

UserModel.hasMany(bookingModel, {
    foreignKey: "userId",
    sourceKey: "id"
})

bookingModel.belongsTo(UserModel, {
    foreignKey: "userId",
    targetKey: "id"
})





export async function startDb() {
    try {
        await sequelize.sync({ force: false });
    } catch (error) {
        console.log(error);
    }
}


