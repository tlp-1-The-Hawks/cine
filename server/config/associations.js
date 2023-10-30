import { sequelize } from './database.js';
import { bookingModel } from '../models/Booking.models.js';
import { cinemaModel } from '../models/Cinema.models.js';
import { CommentModel } from '../models/Comment.model.js';
import { UserModel } from '../models/user_model.js';
import { MovieModel } from '../models/movie_model.js';
import { movieCinemaModel } from '../models/movieXcinema.js';
import { ratingModel } from '../models/Rating.models.js';
import { informationModel } from '../models/Information.model.js';
import { createGenre, genreModel } from '../models/genre.models.js';
import { movieInfoModel } from '../models/moviexinfo.model.js';
import { infoCinemaModel } from '../models/infoXcinema.model.js';
import { TypeEmissionModel, addTypeEmission } from '../models/TypeEmission.model.js';
import { hallModel } from '../models/Hall.models.js';
import { hallXcinemas } from '../models/hallXCinemas.js';



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

MovieModel.belongsToMany(informationModel, { through: movieInfoModel });
informationModel.belongsToMany(MovieModel, { through: movieInfoModel });

cinemaModel.belongsToMany(informationModel, { through: infoCinemaModel });
informationModel.belongsToMany(cinemaModel, { through: infoCinemaModel })

//genre and information
genreModel.hasMany(informationModel, {
  foreignKey: 'genreId',
  sourceKey: 'id'
})

informationModel.belongsTo(genreModel, {
  foreignKey: 'genreId',
  targetKey: 'id'
})

//user and rating
UserModel.hasMany(ratingModel, {
  foreignKey: 'userId',
  sourceKey: 'id',
});

ratingModel.belongsTo(UserModel, {
  foreignKey: 'userId',
  targetKey: 'id',
});

//movie and rating
MovieModel.hasMany(ratingModel, {
  foreignKey: 'movieId',
  sourceKey: 'id',
});

ratingModel.belongsTo(MovieModel, {
  foreignKey: 'movieId',
  targetKey: 'id',
});

//cinema and hall
cinemaModel.belongsToMany(hallModel, { through: hallXcinemas });
hallModel.belongsToMany(cinemaModel, { through: hallXcinemas });

//information and type_emission
TypeEmissionModel.hasMany(informationModel, {
  foreignKey: 'type_emissionId',
  sourceKey: 'id'
})

infoCinemaModel.belongsTo(TypeEmissionModel, {
  foreignKey: 'type_emissionId',
  targetKey: 'id'
})

//preloaded data
async function dataPreloaded() {
  await createGenre()
  await addTypeEmission()
}




export async function startDb() {
  try {
    await sequelize.sync({ force: false });
    await dataPreloaded();
  } catch (error) {
    console.log(error);
  }
}
