// Importacion de bibliotecas
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import {environments} from './config/environments.js';
import {startDb} from './config/database.js';

// Middlewares
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet({contentSecurityPolicy: false}));

// Servidor escuchando
app.listen(environments.PORT, () => {
  console.log(`Server on http://localhost:${environments.PORT}`);
  startDb();
});
