import { sequelize } from './database.js';
import { bookingModel } from '../models/Booking.models.js';
import { cinemaModel } from '../models/Cinema.models.js';
import { CommentModel } from '../models/Comment.model.js';
import { UserModel } from '../models/user_model.js';
import { MovieModel } from '../models/movie_model.js';
import { movieCinemaModel } from '../models/movieXcinema.js';
import { ratingModel } from '../models/Rating.models.js';
import { infoMovieModel } from '../models/movie_information.model.js';
import { createGenre, genreModel } from '../models/genre.models.js';
import { movieInfoModel } from '../models/moviexinfo.model.js';
import { infoCinemaModel } from '../models/infoXcinema.model.js';

//cinema and booking
cinemaModel.hasMany(bookingModel, {
  foreignKey: 'cinemaId',
  sourceKey: 'id',
});

bookingModel.belongsTo(cinemaModel, {
  foreignKey: 'cinemaId',
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

//uno a muchos 
movieCinemaModel.belongsTo(MovieModel, {
  foreignKey: 'movieId',
  targetKey: 'id',
})

MovieModel.hasMany(movieCinemaModel, {
  foreignKey: 'movieId',
  sourceKey: 'id'
})



// Movie, cinema and infomovie

MovieModel.belongsToMany(cinemaModel, { through: movieCinemaModel });
cinemaModel.belongsToMany(MovieModel, { through: movieCinemaModel });

MovieModel.belongsToMany(infoMovieModel, { through: movieInfoModel });
infoMovieModel.belongsToMany(MovieModel, { through: movieInfoModel });

cinemaModel.belongsToMany(infoMovieModel, { through: infoCinemaModel });
infoMovieModel.belongsToMany(cinemaModel, { through: infoCinemaModel })

genreModel.hasMany(infoMovieModel, {
  foreignKey: 'genreId',
  sourceKey: 'id'
})

infoMovieModel.belongsTo(genreModel, {
  foreignKey: 'genreId',
  targetKey: 'id'
})
UserModel.hasMany(ratingModel, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

ratingModel.belongsTo(UserModel, {
  foreignKey: 'userId',
  targetKey: 'id',
});

MovieModel.hasMany(ratingModel, {
  foreignKey: 'movieId',
  sourceKey: 'id',
});

ratingModel.belongsTo(MovieModel, {
  foreignKey: 'movieId',
  targetKey: 'id',
});


//preloaded data
async function dataPreloaded(){
  await createGenre()
}




export async function startDb() {
  try {
    await sequelize.sync({ force: false });
    await dataPreloaded();
  } catch (error) {
    console.log(error);
  }
}
