import {createMovie, 
  getAllMovies, 
  getMovieById, 
  getMovieByInfo} from '../models/movie_model.js';

export const ctrlCreateMovie = async (req, res) => {
  try {
    const movie = await createMovie(req.body);

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
      message: 'Error get all movie'
    })
  }
}

export const ctrlGetOneMovie = async (req,res) => {
  try {
    const {
      movieId,
      cinemaId
    } = req.params

    const movie = await getMovieById(movieId,cinemaId)

    res.status(200).json(movie)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error get movie by id'
    })
  }
}
export const ctrlGetMovieByInfo = async (req,res) => {
  try {
    const {
      genreId
    } = req.params

    const movie = await getMovieByInfo(genreId)

    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json({
      message: 'Error get movie by Info'
    })
  }
}