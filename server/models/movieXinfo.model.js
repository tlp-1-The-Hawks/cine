import { sequelize } from "../config/database.js";

export const movieInfoModel = sequelize.define('movieInfo', {

}, {
    timestamps: false
})

movieInfoModel.removeAttribute('id');

//services
export async function addMovieInfo(movieId, informationId) {
    const NewMovieInfo = await movieInfoModel.create({
        movieId: movieId,
        informationId: informationId
    })
    return NewMovieInfo
}

export async function updateMovieInfo(movieId, informationId) {

    const movieAndInfo = await movieInfoModel.findOne({
        informationId: informationId
    })


    if(movieAndInfo.movieId !== movieId) {
         await movieAndInfo.destroy(movieAndInfo)

         return await movieInfoModel.create({
            movieId: movieId,
            informationId: informationId
        })
    }

    return 
}