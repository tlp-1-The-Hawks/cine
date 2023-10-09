import { addInfoMovie } from "../models/movie_information.model.js";
import { addMovieCinema } from '../models/movieXcinema.js';

export const ctrlAddInfoMovie = async (req, res) => {
    try {
        const {
            movieId,
            genreId,
            director,
            release_year,
            synopsis,
            duration,
            rating,
            actors,
            score
        } = req.body

        const {cinemaId} = req.params

        const AddInfo = await addInfoMovie(director,
            release_year,
            genreId,
            synopsis,
            duration,
            rating,
            actors,
            score)

        const infomovieId = AddInfo.id
        
        const CinemaXmovie = await addMovieCinema(movieId,cinemaId,infomovieId)

        res.status(200).json({
            message:'information added'
        })
            
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error add infomation'
        })
    }
}