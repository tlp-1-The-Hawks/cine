import {body} from 'express-validator';

export const createMovieSchema = (req, res, next) => [
  body('title')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('El nombre de la pelicula no debe estar vacio.'),
  body('director')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('El nombre del director no debe estar vacio').isSr,
];
