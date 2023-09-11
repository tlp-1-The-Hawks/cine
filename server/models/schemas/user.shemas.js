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
    .withMessage('el nombre de usuario puede ser alphanumerico')
    .isLength({min: 5, max: 20})
    .withMessage(
      'El nombre de usuario debe tener un minimo de 5 caracteres y un maximo de 20.'
    ),
  body('email')
    .exists()
    .trim()
    .notEmpty('El email no debe estar vacio.')
    .isEmail()
    .withMessage('El email debe tener formato de correo valido.'),
  body('password')
    .exists()
    .trim()
    .notEmpty('La contraseña no debe estar vacia.')
    .isString()
    .isLength({min: 8, max: 20})
    .withMessage('Debe tener un minimo de 5 caracteres y un maximo de 20.')
    .matches('/^(?=.*d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[]:;<>,.?~\\-]).+$/')
    .withMessage(
      'La contraseña debe contener al menos un número, una letra mayúscula y un carácter especial.'
    ),
];

export const loginUserSchema = [body('username')];
