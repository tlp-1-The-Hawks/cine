import { body } from "express-validator";

export const createHallSchema =  [
  body('formState.nr_hall')
  .isInt({ min: 1 })
  .withMessage('¡Ingresa el número de la sala!'),
  body('formState.capacity')
  .isInt({ min: 1 })
  .withMessage('Ingresa la capacidad de la sala'),
  body('formState.column')
  .isInt({ min: 1 })
  .withMessage('Coloca las columnas para replicar su sala'),
  body('formState.row')
  .isInt({ min: 1 })
  .withMessage('Coloca las filas para replicar su sala')
]