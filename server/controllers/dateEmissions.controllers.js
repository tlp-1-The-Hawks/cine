import { getDateEmissionByCinemaAndMovie } from "../models/DateEmissions.js";

export const ctrlGetDateByCinemaAndMovie = async (req,res) => {
    try {
        const {cinemaId, movieId} = req.params

        const dates = await getDateEmissionByCinemaAndMovie(cinemaId, movieId)
        
        res.status(200).json(dates)
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}