import {createMovie, getAllMovies} from '../models/movie_model.js';
import { addMovieCinema } from '../models/movieXcinema.js';
export const ctrlCreateMovie = async (req, res) => {
  try {
    const movie = await createMovie(req.body);

    const {cinemaId} = req.params
    const MovieId = movie.id


    const CinemaXmovie = await addMovieCinema(MovieId,cinemaId)

    res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json('Unexpected error');
  }
};

export const ctrlGetAllMovie = async (req,res) => {
  try {
    const movies = await getAllMovies()

    res.status(200).json(movies)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Error al obtener las peliculas"
    })
  }
}