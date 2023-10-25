import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import fileUpload from "express-fileupload";
import mercadopago from 'mercadopago';
import { environments } from './config/environments.js';
import { startDb } from './config/associations.js';
// import { userRouter } from './routes/users.routes.js';
import { hallrouter } from './routes/hall.routes.js';
import { type_emissionRouter } from './routes/type_emission.routes.js';
import { cinemaRouter } from './routes/cinema.routes.js';
import { commentRouter } from './routes/comment.routes.js';
import { authRouter } from './routes/auth.routes.js';
import { infoMovierouter } from './routes/infomovie.routes.js';
import { movieCinemarouter } from './routes/movie_cinema.routes.js';
import { genrerouter } from './routes/genre.routes.js';
import { bookingRouter } from './routes/booking.routes.js';
import __dirname from './helpers/__dirname.js';
import { movieRouter } from './routes/movies.routes.js';
import { handleErrors } from './middlewares/handleError.js';
import { createLogs } from './helpers/createLogs.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  morgan('combined', {
    stream: {
      write: (message) => {
        const logDirectory = __dirname;
        createLogs(message, logDirectory, 'logs');
      },
    },
  })
);
app.use(helmet({ contentSecurityPolicy: false }));
app.use(fileUpload());

mercadopago.configure({
  access_token: 'APP_USR-404212168429405-100814-0deccd0b6f09ee5ef36fe7e6a21b05f8-1500511378'
})

app.post('/create_preference', (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity)
      }
    ],
    back_urls: {
      success: 'http://localhost:3000',
      failure: 'http://localhost:3000',
      pending: ''
    },
    auto_return: 'approved'
  }
  console.log(preference)
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      const id = response.body.id
      console.log(id)
      res.json({
        id: response.body.id
      });
    })
    .catch(function (error) {
      console.log(error);
    });
})

app.use('/api', cinemaRouter);
app.use('/api', commentRouter);
app.use('/api', movieRouter)
// app.use('/api', userRouter);
app.use('/api', hallrouter);
app.use('/api', infoMovierouter);
app.use('/api', genrerouter);
app.use('/api', movieCinemarouter);
app.use('/api', bookingRouter);
app.use('/api', type_emissionRouter);
app.use('/auth', authRouter);
app.use(handleErrors);

app.listen(environments.PORT, () => {
  console.log(`Server on http://localhost:${environments.PORT}`);
  startDb();
});
