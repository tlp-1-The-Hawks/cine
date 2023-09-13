import {Router} from 'express';
import {ctrlCreateMovie} from '../controllers/movie.controllers.js';
import {validador} from '../middlewares/validator.js';
import {createMovieValidation} from '../models/schemas/movie.shemas.js';

const movieRouter = Router();

movieRouter.post('/movies', createMovieValidation, validador, ctrlCreateMovie);

export {movieRouter};
