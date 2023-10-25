import {body} from 'express-validator';

export const createUserSchema = [
  body('name')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('El nombre no debe estar vacio')
    .isString()
    .withMessage('El nombre solo puede estar en formato texto'),
  body('last_name')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('El apellido no debe estar vacio')
    .isString()
    .withMessage('El apellido solo puede estar en formato texto'),
  body('username')
    .exists()
    .trim()
    .escape()
    .notEmpty()
    .withMessage('el nombre de usuario no debe estar vacio')
    .isAlphanumeric()
    .withMessage('el nombre de usuario debe ser alphanumerico')
    .isLength({min: 5, max: 20})
    .withMessage(
      'El nombre de usuario debe tener un minimo de 5 caracteres y un maximo de 20.'
    ),
  body('email')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('El email no debe estar vacio')
    .isEmail()
    .withMessage('El email debe tener formato de correo valido.'),
  body('password')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('La contraseña no debe estar vacia')
    .isString()
    .isLength({min: 8, max: 20})
    .withMessage('Debe tener un mínimo de 8 caracteres y un máximo de 20.'),
];

export const updateUserSchema = [
  body('name')
    .optional()
    .trim()
    .escape()
    .isString()
    .withMessage('El nombre solo puede estar en formato texto'),
  body('last_name')
    .optional()
    .trim()
    .escape()
    .isString()
    .withMessage('El apellido solo puede estar en formato texto'),
  body('username')
    .optional()
    .trim()
    .escape()
    .isAlphanumeric()
    .withMessage('el nombre de usuario debe ser alphanumerico')
    .isLength({min: 5, max: 20})
    .withMessage(
      'El nombre de usuario debe tener un minimo de 5 caracteres y un maximo de 20.'
    ),
  body('email')
    .optional()
    .trim()
    .isEmail()
    .withMessage('El email debe tener formato de correo valido.'),
  body('password')
    .optional()
    .trim()
    .isString()
    .isLength({min: 8, max: 20})
    .withMessage('Debe tener un mínimo de 8 caracteres y un máximo de 20.'),
];

export const loginUserSchema = [
  body('email')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('El email no debe estar vacio.')
    .isEmail()
    .withMessage('El email debe tener formato de correo valido.'),
  body('password')
    .exists()
    .trim()
    .notEmpty()
    .withMessage('La contraseña no debe estar vacia.')
    .isString()
    .isLength({min: 8, max: 20})
    .withMessage('Debe tener un mínimo de 8 caracteres y un máximo de 20.'),
];
