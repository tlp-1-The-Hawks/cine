import { body } from 'express-validator';

export const createRequestCineSchema = [
  body('name_cinema')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('El nombre no debe estar vacío'),
  body('provinceId')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Selecciona una provincia'),

  body('locationId')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Selecciona un departamento'),
  body('address')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('La dirección no debe estar vacía'),

  body('email')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('El email no debe estar vacío')
    .isEmail()
    .withMessage('El email debe tener formato de correo válido.'),

  body('phone')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('El teléfono no debe estar vacío')
    .isString()
    .withMessage('El teléfono solo puede estar en formato texto'),

  body('cuit')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('El CUIT no debe estar vacío')
    .isNumeric()
    .withMessage('El CUIT solo puede estar en formato numerico')
    .isLength({min: 11, max: 11})
    .withMessage('Debe tener  11 caracteres')
];
