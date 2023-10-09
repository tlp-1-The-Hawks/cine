import { getCinemaById } from "../models/Cinema.models.js";
import { addInfoMovie } from "../models/movie_information.model.js";
import { createMovie } from "../models/movie_model.js";
import { addMovieCinema } from '../models/movieXcinema.js';

export const ctrlAddInfoMovie = async (req, res) => {
    try {
        const {
            title,
            genreId,
            director,
            release_year,
            synopsis,
            duration,
            rating,
            actors,
            score
        } = req.body

        const { cinemaId } = req.params

        const NewMovie = await createMovie(title)

        const shearchCinema = await getCinemaById(cinemaId)

        const AddInfo = await addInfoMovie(director,
            release_year,
            genreId,
            synopsis,
            duration,
            rating,
            actors,
            score)


        res.status(200).json({
            message: 'information added'
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error add infomation'
        })
    }
}