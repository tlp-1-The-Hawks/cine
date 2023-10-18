import {Router} from 'express';
import { ctrlGetAllMovieCinema, ctrlGetOneMovieCinema } from '../controllers/movie_cinema.controlles.js';

const movieCinemarouter = Router()

movieCinemarouter.get('/movie-cinema/:movieId/:cinemaId', ctrlGetOneMovieCinema)

movieCinemarouter.get('/movie-cinema', ctrlGetAllMovieCinema)

export {movieCinemarouter}