import {Router} from 'express';
import {ctrlCreateUser} from '../controllers/users.controllers.js';
import {createUserSchema} from '../models/schemas/user.shemas.js';
import {validador} from '../middlewares/validator.js';

const userRoter = Router();

userRoter.post('/', createUserSchema, validador, ctrlCreateUser);

export {userRoter};
