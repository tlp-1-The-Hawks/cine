import { addCinemaInfo } from "../models/infoXcinema.model.js";
import { createMovie } from "../models/movie_model.js";
import { addMovieCinema } from '../models/movieXcinema.js';
import { addMovieInfo } from "../models/moviexinfo.model.js";
import { addInfor } from "../models/Information.model.js";

export const ctrlAddInfoMovie = async (req, res) => {
    try {
        const {
            title,
            director,
            description,
            duration,
            rating,
            actors,
            price,
            genreId,
            rutaImage,
            date_issue,
            type_emissionId
        } = req.body
        const { cinemaId } = req.params

        const newInfo = {
            rutaImage,
            director,
            description,
            duration,
            rating,
            actors,
            price,
            genreId,
            date_issue,
            type_emissionId
        }

        const NewMovie = await createMovie(title)
        const addInfo = await addInfor(newInfo)




        const movieId = NewMovie.id
        const informationId = addInfo.id


        const MovieCinema = await addMovieCinema(movieId, cinemaId)

        const CinemaInfo = await addCinemaInfo(cinemaId, informationId)

        const newMovieInfo = await addMovieInfo(movieId, informationId)

        res.status(200).json({
            message: 'Movie and information added'
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error add infomation'
        })
    }
}

export const ctrlUploadImgMovie = async (req, res) => {
    try {
        const file = req.files.file;
        const fileName = file.name;


        file.mv(`../client/public/movies_img/${fileName}`, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Error save archive' });
            }
            res.status(200).json({ message: 'Image upload' });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error upload image' });
    }
};