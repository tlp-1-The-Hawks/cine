import {createLogs} from '../helpers/createLogs.js';
import __dirname from '../helpers/__dirname.js';
export const handleErrors = (err, req, res, next) => {
  const date = new Date();
  const timestamp = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  createLogs(`${timestamp}-${err.stack}\n`, __dirname, 'errors'); // Usa __dirname directamente
  const errorMessage = JSON.parse(err.message);
  res.status(errorMessage.status).send(errorMessage.Error);
};
