import { createMovie, updateMovie } from "../models/movie_model.js";
import { addMovieCinema, updateMovieAndCinema } from '../models/movieXcinema.js';
import { addMovieInfo, updateMovieInfo } from "../models/moviexinfo.model.js";
import { addInfor, deleteInfo, getOneInfo, updateInfo } from "../models/Information.model.js";
import { addDateEmissions, updateDateEmissions } from "../models/DateEmissions.js";

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
            type_emissionId,
            url_trailer,
            hallId,
            events
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
            type_emissionId,
            url_trailer,
            hallId,
            cinemaId,
        }

        const NewMovie = await createMovie(title)
        const addInfo = await addInfor(newInfo)




        const movieId = NewMovie.id
        const informationId = addInfo.id

        const newInfoXdateEmissions = await addDateEmissions(events, informationId)

        const MovieCinema = await addMovieCinema(movieId, cinemaId)

        const newMovieInfo = await addMovieInfo(movieId, informationId)

        res.status(200).json({
            msg: 'movie added successfully'
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

        const fileName = file.name

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

export const ctrlDeleteInfoById = async (req,res) => {
    try {
        const {id} = req.params

        const delInfo = await deleteInfo(id)
        res.status(200).json({
            msg: 'infomation deleted'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'error dekete infomation'
        })
    }
}   


export const ctrlGetOneInfo = async (req,res) => {
    try {
        const {id} = req.params

        const info = await getOneInfo(id)
        res.status(200).json(info)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'error get one info'
        })
    }
}   



export const ctrlUpdateInfo = async (req,res) => {
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
            type_emissionId,
            url_trailer,
            hallId,
            events
        } = req.body
        const { cinemaId, infoId, movieId } = req.params

        const newInfo = {
            rutaImage,
            director,
            description,
            duration,
            rating,
            actors,
            price,
            genreId,
            type_emissionId,
            url_trailer,
            hallId,
            cinemaId,
        }
        console.log(infoId);

        const info = await updateInfo(newInfo, infoId)

        const movie = await updateMovie(movieId, title)


        const newEvents = await updateDateEmissions(events, infoId)

        const movieAndCinema = await updateMovieAndCinema(movie.id, cinemaId,movieId)

        const movieAndInfo = await updateMovieInfo(movie.id, infoId)

        res.status(200).json({
            msg: 'info updated'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'error update info'
        })
    }
}   