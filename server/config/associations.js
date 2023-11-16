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
import { TypeEmissionModel, addTypeEmission } from '../models/TypeEmission.model.js';
import { hallModel } from '../models/Hall.models.js';
import { hallXcinemas } from '../models/hallXCinemas.js';
import { dateEmissionsModel } from '../models/DateEmissions.js';
import { infoXdateEmissions } from '../models/InfoXDateEmissions.js';
import { locationModel, createLocation } from '../models/location.model.js';
import { provinceModel, createProvince } from '../models/Province.model.js';
import { requestCinemaModel } from '../models/RequestCinema.js';

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
informationModel.belongsTo(cinemaModel, {
  foreignKey: 'cinemaId',
  targetKey: 'id',
})

cinemaModel.hasMany(informationModel, {
  foreignKey: 'cinemaId',
  sourceKey: 'id'
})



// Movie, cinema and infomovie

MovieModel.belongsToMany(cinemaModel, { through: movieCinemaModel });
cinemaModel.belongsToMany(MovieModel, { through: movieCinemaModel });

MovieModel.belongsToMany(informationModel, { through: movieInfoModel });
informationModel.belongsToMany(MovieModel, { through: movieInfoModel });


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

informationModel.belongsTo(TypeEmissionModel, {
  foreignKey: 'type_emissionId',
  targetKey: 'id'
})

//Hall and information 
hallModel.hasMany(informationModel, {
  foreignKey: 'hallId',
  sourceKey: 'id'
})

informationModel.belongsTo(hallModel, {
  foreignKey: 'hallId',
  targetKey: 'id'
})

//info and dateEmissions
informationModel.belongsToMany(dateEmissionsModel, { through: infoXdateEmissions })
dateEmissionsModel.belongsToMany(informationModel, { through: infoXdateEmissions })

//booking and date emission
dateEmissionsModel.hasMany(bookingModel)
bookingModel.belongsTo(dateEmissionsModel)


//Province and location
provinceModel.hasMany(locationModel)
locationModel.belongsTo(provinceModel)

//requestsCinema
provinceModel.hasMany(requestCinemaModel)
requestCinemaModel.belongsTo(provinceModel)

locationModel.hasMany(requestCinemaModel)
requestCinemaModel.belongsTo(locationModel)


//cinema and privince/location
provinceModel.hasMany(cinemaModel)
cinemaModel.belongsTo(provinceModel)

locationModel.hasMany(cinemaModel)
cinemaModel.belongsTo(locationModel)

//preloaded data
async function dataPreloaded() {
  await createGenre()
  await addTypeEmission()
  await createProvince()
  await createLocation()
}




export async function startDb() {
  try {
    await sequelize.sync({ force: true });
    await dataPreloaded();
  } catch (error) {
    console.log(error);
  }
}
