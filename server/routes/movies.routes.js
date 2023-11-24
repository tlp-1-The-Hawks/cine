import { Router } from 'express';
import {
    ctrlCreateMovie,
    ctrlGetAllMovie,
    ctrlGetMovieByCinemaId,
    ctrlGetMovieByInfo,
    ctrlGetOneMovie
} from '../controllers/movie.controllers.js';
import { validator } from '../middlewares/validator.js';
import { createMovieValidation } from '../models/schemas/movie.shemas.js';

const movieRouter = Router();

movieRouter.post('/movies', createMovieValidation, validator, ctrlCreateMovie);

movieRouter.get('/movies', ctrlGetAllMovie)

movieRouter.get('/movies/:movieId/:cinemaId', ctrlGetOneMovie)

movieRouter.get('/movies/:cinemaId', ctrlGetMovieByCinemaId)

movieRouter.get('/movies/:genreId', ctrlGetMovieByInfo)

export { movieRouter };
