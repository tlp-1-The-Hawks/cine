import {Router} from 'express';
import {ctrlCreateMovie, 
    ctrlGetAllMovie, 
    ctrlGetMovieByInfo} from '../controllers/movie.controllers.js';
import {validador} from '../middlewares/validator.js';
import {createMovieValidation} from '../models/schemas/movie.shemas.js';

const movieRouter = Router();

movieRouter.post('/movies', createMovieValidation, validador, ctrlCreateMovie);

movieRouter.get('/movies', ctrlGetAllMovie)

movieRouter.get('/movies/:genreId', ctrlGetMovieByInfo)

export {movieRouter};
