import { body } from 'express-validator';

export const createMovieValidation = [
  body('title')
    .exists()
    .notEmpty()
    .withMessage('El título es requerido')
    .isString()
    .withMessage('El título debe ser una cadena de texto'),
  body('director')
    .exists()
    .notEmpty()
    .withMessage('El director es requerido')
    .isString()
    .withMessage('El director debe ser una cadena de texto'),
  body('description')
    .exists()
    .notEmpty()
    .withMessage('La sinopsis es requerida')
    .isString()
    .withMessage('La sinopsis debe ser una cadena de texto'),
  // body('duration')
  //   .exists()
  //   .notEmpty()
  //   .isString()
  //   .withMessage('la duracion tiene que ser en formato string')
  //   .withMessage('La duracion es requerida')
  //   .matches(/^\d+:\d{2}hs$/)
  //   .withMessage(
  //     'El formato de la duración debe ser "X:XXhs", por ejemplo, "1:30hs"'
  //   ),
  body('actors')
    .exists()
    .notEmpty()
    .withMessage('Los actores son requeridos')
    .isString()
    .withMessage('Los actores deben ser una cadena de texto'),
];
