import { getMovieCinemaById } from "../models/movieXcinema.js"

export const ctrlGetOneMovieCinema = async (req,res) => {
    try {
        const {movieId,cinemaId} = req.params
        
        const movieCinema = await getMovieCinemaById(movieId,cinemaId)

        res.status(200).json(movieCinema)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Arror get one movie-cinema'
        })
    }
}   