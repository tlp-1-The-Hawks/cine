import {createMovie} from '../models/movie_model.js';

export const ctrlCreateMovie = async (req, res) => {
  try {
    const movie = await createMovie(req.body);
    res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    res.status(500).json('Unexpected error');
  }
};
