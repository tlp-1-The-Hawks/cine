import { addCinemaInfo } from "../models/infoXcinema.model.js";
import { createMovie } from "../models/movie_model.js";
import { addMovieCinema } from '../models/movieXcinema.js';
import { addMovieInfo } from "../models/moviexinfo.model.js";
import { addInfor } from "../models/movie_information.model.js";

export const ctrlAddInfoMovie = async (req, res) => {
    try {
        const {
            title,
            director,
            release_year,
            synopsis,
            duration,
            rating,
            actors,
            price,
            genreId
        } = req.body


        const { cinemaId } = req.params

        const NewMovie = await createMovie(title)

        const addInfo = await addInfor(
            director,
            release_year,
            synopsis,
            duration,
            rating,
            actors,
            price,
            genreId)

        const movieId = NewMovie.id
        const informationId = addInfo.id


        const MovieCinema = await addMovieCinema(movieId, cinemaId)

        const CinemaInfo = await addCinemaInfo(cinemaId, informationId)

        const newMovieInfo = await addMovieInfo(movieId, informationId)

        res.status(200).json({
            message: 'Created'
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error add infomation'
        })
    }
}