import { bookingModel } from "../models/Booking.models.js";
import { cinemaModel } from "../models/Cinema.models.js";
import { commentModel } from "../models/Comment.model.js";
import { UserModel } from "../models/user_model.js";
import { sequelize } from "./database.js";
import { MovieModel } from "../models/movie_model.js";

//cinema and booking
cinemaModel.hasMany(bookingModel, {
  foreignKey: "cineId",
  sourceKey: "id"
})


bookingModel.belongsTo(cinemaModel, {
  foreignKey: "cineId",
  targetKey: "id"
})

//user and booking
UserModel.hasMany(bookingModel, {
  foreignKey: "userId",
  sourceKey: "id"
})


bookingModel.belongsTo(UserModel, {
  foreignKey: "userId",
  targetKey: "id"
})

//user and comments
UserModel.hasMany(commentModel, {
  foreignKey: "userId",
  sourceKey: "id"
})

commentModel.belongsTo(UserModel, {
  foreignKey: "userId",
  targetKey: "id"
})

//movie and comments 
MovieModel.hasMany(commentModel, {
  foreignKey: "movieId",
  sourceKey: "id"
})

commentModel.belongsTo(MovieModel, {
  foreignKey: "movieId",
  targetKey: "id"
})

//booking and movie 
MovieModel.hasMany(bookingModel, {
  foreignKey: "movieId",
  sourceKey: "id"
})

bookingModel.belongsTo(MovieModel, {
  foreignKey: 'movieId',
  targetKey: 'id',
});


MovieModel.belongsToMany(cinemaModel, { through: movieCinema })
cinemaModel.belongsTo(MovieModel, { through: movieCinema })


export async function startDb() {
  try {
    await sequelize.sync({ force: false });
  } catch (error) {
    console.log(error);
  }
}


