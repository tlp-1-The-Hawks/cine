import { createJWT } from '../helpers/jsonwebtoken.js';
import {
  createUser,
  getUserByEmailAndPassword,
  getUserById,
} from '../models/user_model.js';
import jwt from 'jsonwebtoken';
import { environments } from '../config/environments.js';

export const ctrlLoginUser = async (req, res) => {
  try {
    // if (req.body.password)
    console.log(req.body.password, req.body.confirmarpassword)
    const user = await getUserByEmailAndPassword(req.body);

    if (user === null) {
      const token = null
      res.status(200).json(token);
    } else {
      const token = await createJWT({ user: user.id });
      res.status(200).json(token);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const ctrlRegisterUser = async (req, res) => {
  try {
    const user = await createUser(req.body);

    const token = await createJWT({ user: user.id });

    res.status(200).json(token);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};


export const ctrlGetUserInfoByToken = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.sendStatus(404);
  }

  const { user: userId } = jwt.verify(token, environments.SECRET);

  const user = await getUserById(userId);

  if (!user) {
    return res.sendStatus(404);
  }

  res.status(200).json(
    user
  );
};
