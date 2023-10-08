import {Router} from 'express';
import { ctrlGetOneMovieCinema } from '../controllers/movie_cinema.controlles.js';

const movieCinemarouter = Router()

movieCinemarouter.get('/movie-cinema/:movieId/:cinemaId', ctrlGetOneMovieCinema)

export {movieCinemarouter}