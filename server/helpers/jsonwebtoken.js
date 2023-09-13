import jwt from 'jsonwebtoken';
import {environments} from '../config/environments.js';

export const createJWT = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, environments.SECRET, (err, token) => {
      if (err) {
        reject('Error al firmar el token');
      }

      resolve({token});
    });
  });
};
