import { bookingModel } from '../models/Booking.models.js';
import { cinemaModel } from '../models/Cinema.models.js';
import { CommentModel } from '../models/Comment.model.js';
import { UserModel } from '../models/user_model.js';
import { sequelize } from './database.js';
import { MovieModel } from '../models/movie_model.js';

//cinema and booking
cinemaModel.hasMany(bookingModel, {
  foreignKey: 'cineId',
  sourceKey: 'id',
});

bookingModel.belongsTo(cinemaModel, {
  foreignKey: 'cineId',
  targetKey: 'id',
});

//user and booking
UserModel.hasMany(bookingModel, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

bookingModel.belongsTo(UserModel, {
  foreignKey: 'userId',
  targetKey: 'id',
});

//user and comments
UserModel.hasMany(CommentModel, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

CommentModel.belongsTo(UserModel, {
  foreignKey: 'userId',
  targetKey: 'id',
});

//movie and comments
MovieModel.hasMany(CommentModel, {
  foreignKey: 'movieId',
  sourceKey: 'id',
});

CommentModel.belongsTo(MovieModel, {
  foreignKey: 'movieId',
  targetKey: 'id',
});

//booking and movie
MovieModel.hasMany(bookingModel, {
  foreignKey: 'movieId',
  sourceKey: 'id',
});

bookingModel.belongsTo(MovieModel, {
  foreignKey: 'movieId',
  targetKey: 'id',
});

export async function startDb() {
  try {
    await sequelize.sync({ force: false });
  } catch (error) {
    console.log(error);
  }
}
