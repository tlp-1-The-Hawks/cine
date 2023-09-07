import {Router} from 'express';
import {ctrlCreateUser} from '../controllers/users.controllers.js';

const userRoter = Router();

userRoter.post('/', ctrlCreateUser);

export {userRoter};
