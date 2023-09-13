import {Router} from 'express';
import {
  ctrlGetUserInfoByToken,
  ctrlLoginUser,
  ctrlRegisterUser,
} from '../controllers/auth.controllers.js';
import {
  createUserSchema,
  loginUserSchema,
} from '../models/schemas/user.shemas.js';
import {validador} from '../middlewares/validator.js';

const authRouter = Router();

authRouter.get('/user', ctrlGetUserInfoByToken);

authRouter.post('/login', loginUserSchema, validador, ctrlLoginUser);

authRouter.post('/register', createUserSchema, validador, ctrlRegisterUser);

export {authRouter};
