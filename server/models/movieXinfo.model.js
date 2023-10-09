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